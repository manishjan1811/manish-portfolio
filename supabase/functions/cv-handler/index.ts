import { serve } from "https://deno.land/std@0.208.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const url = new URL(req.url);
    const action = url.searchParams.get('action');
    const cvType = url.searchParams.get('type') || 'manish'; // Default to manish, support 'omkar'

    console.log(`CV Handler - Action: ${action}, Type: ${cvType}`);

    if (action === 'upload') {
      // Handle CV upload to storage
      try {
        console.log('Upload request received for CV type:', cvType);
        
        // Generate the CV PDF
        const pdfBuffer = await generateCVPDF(cvType, supabaseClient);
        const fileName = cvType === 'omkar' ? 'omkar-singh-cv.pdf' : 'manish-jangra-cv.pdf';
        
        // Upload to storage
        const { data, error } = await supabaseClient.storage
          .from('cv-files')
          .upload(fileName, pdfBuffer, {
            contentType: 'application/pdf',
            upsert: true
          });

        if (error) {
          throw new Error(`Upload failed: ${error.message}`);
        }

        return new Response(
          JSON.stringify({ 
            success: true,
            message: `${cvType} CV uploaded successfully`,
            file: fileName,
            data: data 
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        );
      } catch (uploadError) {
        console.error('Upload error:', uploadError);
        return new Response(
          JSON.stringify({ 
            error: 'Upload failed', 
            details: uploadError.message 
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500 
          }
        );
      }
    }

    if (action === 'download') {
      const fileName = cvType === 'omkar' ? 'omkar-singh-cv.pdf' : 'manish-jangra-cv.pdf';
      
      try {
        // Try to get the existing PDF file from storage
        const { data, error } = await supabaseClient.storage
          .from('cv-files')
          .download(fileName)

        if (error) {
          console.log(`File not found in storage: ${fileName}, generating new PDF...`);
          // Generate PDF if not found
          const pdfBuffer = await generateCVPDF(cvType, supabaseClient);
          
          // Upload the generated PDF to storage for future use
          const { error: uploadError } = await supabaseClient.storage
            .from('cv-files')
            .upload(fileName, pdfBuffer, {
              contentType: 'application/pdf',
              upsert: true
            });

          if (uploadError) {
            console.error('Error uploading PDF:', uploadError);
          }

          return new Response(pdfBuffer, {
            headers: {
              ...corsHeaders,
              'Content-Type': 'application/pdf',
              'Content-Disposition': `attachment; filename="${fileName}"`,
            },
          });
        }

        return new Response(data, {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${fileName}"`
          }
        })

      } catch (downloadError) {
        console.error('Error in download process:', downloadError);
        // Fallback to text version
        const cvContent = generateCVContent(cvType);
        const txtFileName = cvType === 'omkar' ? 'Omkar_Singh_CV.txt' : 'Manish_Jangra_CV.txt';
        return new Response(cvContent, {
          headers: {
            ...corsHeaders,
            'Content-Type': 'text/plain',
            'Content-Disposition': `attachment; filename="${txtFileName}"`
          }
        })
      }
    }

    if (action === 'preview') {
      // Return CV content for preview
      const cvContent = generateCVContent(cvType);
      return new Response(
        JSON.stringify({ content: cvContent }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

async function generateCVPDF(cvType: string, supabaseClient: any): Promise<Uint8Array> {
  try {
    console.log(`Generating PDF for ${cvType} CV...`);
    
    // Get the frontend URL - try multiple possible URLs
    const possibleUrls = [
      'https://6d1f6749-049b-4ded-bd3f-be6b2215c707.lovableproject.com',
      'https://suynbvqdtzuwxqrrgrgn.lovable.app',
      Deno.env.get('FRONTEND_URL')
    ].filter(Boolean);
    
    console.log('Trying possible frontend URLs:', possibleUrls);
    
    // Use the first available URL, fallback to localhost for development
    const frontendUrl = possibleUrls[0] || 'http://localhost:8080';
    const cvUrl = cvType === 'omkar' ? `${frontendUrl}/omkar-cv` : `${frontendUrl}/cv`;
    
    console.log(`CV URL: ${cvUrl}`);

    // First, test if the URL is accessible
    try {
      console.log('Testing URL accessibility...');
      const testResponse = await fetch(cvUrl, { 
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PDF-Generator/1.0)'
        }
      });
      console.log(`URL test response: ${testResponse.status}`);
      
      if (!testResponse.ok) {
        console.warn(`URL ${cvUrl} returned status ${testResponse.status}`);
      }
    } catch (testError) {
      console.error('URL accessibility test failed:', testError);
      throw new Error(`CV page not accessible at ${cvUrl}: ${testError.message}`);
    }

    // Call the convert-to-pdf function to generate high-quality PDF
    console.log('Calling convert-to-pdf function...');
    const { data, error } = await supabaseClient.functions.invoke('convert-to-pdf', {
      body: { 
        url: cvUrl,
        options: {
          format: 'A4',
          printBackground: true,
          preferCSSPageSize: true,
          displayHeaderFooter: false,
          margin: {
            top: '0.4in',
            bottom: '0.4in',
            left: '0.4in',
            right: '0.4in'
          },
          scale: 0.85,
          timeout: 30000,
          waitUntil: 'networkidle0'
        }
      }
    });

    if (error) {
      console.error('PDF generation error:', error);
      throw new Error(`PDF generation failed: ${error.message}`);
    }

    if (data && data.pdf) {
      console.log('PDF generated successfully');
      // Convert base64 to Uint8Array
      const base64Data = data.pdf.replace(/^data:application\/pdf;base64,/, '');
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }

    throw new Error('No PDF data received from conversion service');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

function generateCVContent(cvType: string): string {
  if (cvType === 'omkar') {
    return `
OMKAR SINGH
Cyber Security Specialist
44-B Chander Vihar New Delhi, India | omkarsingh9655@gmail.com | linkedin.com/in/omkar-singh10 | +91 9625547807

SUMMARY
=====================================
CEH-certified Cybersecurity Professional with over 2 years of hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) across web applications, mobile platforms, APIs, and infrastructure. Skilled in identifying and exploiting security vulnerabilities through real-world attack simulations. Certified in CRTP (Certified Red Team Professional) and CRTA (Certified Red Team Analyst), with a strong focus on offensive security techniques, Active Directory exploitation, and post-exploitation tactics. Proven ability to deliver comprehensive, actionable security reports that support regulatory compliance, enhance risk management, and improve overall security posture.

PROFESSIONAL EXPERIENCE
=====================================

VAPT Security Consultant | Digital Track Solutions Private Limited | August 2024 – Present
• Successfully led and executed a comprehensive Vulnerability Assessment and Penetration Testing (VAPT) project for the Tamil Nadu e-Governance Agency (TNeGA), identifying and mitigating critical vulnerabilities across complex IT infrastructure, significantly enhancing overall security and operational resilience.
• Performed in-depth Web Application, API, and Mobile Application Security Testing for TNeGA, uncovering potential exploit vectors and reinforcing their systems against sophisticated cyber threats.
• Delivered a thorough and actionable VAPT assessment for Muthoot Housing Finance, addressing critical security gaps and providing strategic, risk-based remediation recommendations.
• Ensured all assessments adhered to industry-recognized security standards (OWASP, NIST, etc.), supporting clients in maintaining compliance and scalable, future-ready security postures.

Cybersecurity Analyst | Infocus It Solutions Private Limited | 2023–2024
• Conducted end-to-end Vulnerability Assessment and Penetration Testing (VAPT) for Hitachi's Web Applications, REST APIs, and Network Infrastructure in alignment with OWASP Top 10 and SANS 25 standards.
• Identified and exploited critical vulnerabilities including authentication bypass, improper input validation, and insecure API endpoints, helping strengthen overall security posture.
• Performed deep packet inspection, port scanning, and configuration auditing on Hitachi's internal and external-facing network components.
• Prepared and delivered comprehensive VAPT reports with actionable remediation steps, directly contributing to enhanced compliance and risk mitigation.
• Collaborated with development and IT teams to verify patching and validate fixes through re-testing activities.

KEY PROJECTS
=====================================

PhillipCapital (India) Private Limited
Web Application VAPT | API Security Testing | Network Penetration Testing
• Conducted comprehensive Web and API Vulnerability Assessments, identifying critical flaws and delivering precise remediation strategies to mitigate exploitation risks.
• Strengthened the organization's security posture by aligning findings with OWASP Top 10 and CWE standards, ensuring actionable and compliant security recommendations.

Muthoot Housing Finance Company Limited
Web Application VAPT | API Security Testing | Network Penetration Testing
• Executed full-scope Vulnerability Assessment and Penetration Testing (VAPT) covering web applications, APIs, and internal network architecture.
• Mapped vulnerabilities to industry standards such as OWASP, SANS, and NIST, helping the organization bolster compliance and governance.

TECHNICAL SKILLS
=====================================

Penetration Testing:
• Web Application Pentesting (Automated, Manual)
• API Pentesting
• OWASP Top 10
• Secure Code Review
• Network Pentesting
• Python Scripting

Web Application & Web Services Penetration Testing Tools:
• Burp Suite Professional
• Nikto
• Dirbuster
• Ffuf
• Nuclei
• OWASP Zap
• WpScan

Infrastructure & Network Penetration Testing Tools:
• Nmap
• Metasploit
• Nessus
• Kali Linux OS

Red Teaming Tools:
• Hashcat
• Mimikatz
• Windows Privesc
• Linux Privesc
• Linpeas
• Winpeas

EDUCATION
=====================================
Graduate from Delhi University (DU) | 2020-2023

CERTIFICATIONS
=====================================
• C|EH Certified Ethical Hacker (EC Council)
• CRTP (Certified Red Team Professional)
• CRTA (Certified Red Team Analyst)

ADDITIONAL INFORMATION
=====================================
Languages: English, Hindi, Punjabi
Interests & Hobbies: Capture the Flag (CTF), Threat Hunting, Reading Books
`;
  }

  // Default Manish CV content
  return `
MANISH JANGRA
Web Application Pentester & Developer

Contact Information:
Email: manish.jangra@email.com
Phone: +91 XXXXX XXXXX
Location: Gurgaon, Haryana, India
Portfolio: https://your-portfolio-url.com

PROFESSIONAL SUMMARY
=====================================
Elite cybersecurity specialist with 6+ months of advanced penetration testing experience. 
Certified in CEH (Certified Ethical Hacker), CRTA (Certified Red Team Analyst), and BSCP 
(Burp Suite Certified Practitioner). Proven expertise in web application security assessment, 
vulnerability research, and secure development practices.

CERTIFICATIONS
=====================================
• Certified Ethical Hacker (CEH) - 2024
• Certified Red Team Analyst (CRTA) - 2024  
• Burp Suite Certified Practitioner (BSCP) - 2024

EXPERIENCE
=====================================
Web Application Penetration Tester | Freelance / Security Research | 6+ Months
• Conducted comprehensive security assessments on web applications
• Identified and documented critical vulnerabilities including OWASP Top 10
• Performed manual and automated penetration testing
• Created detailed security reports with remediation strategies
• Specialized in SQL injection, XSS, CSRF, and authentication bypass vulnerabilities

TECHNICAL SKILLS
=====================================
Security Tools:
• Burp Suite Professional
• OWASP ZAP
• Nmap
• Metasploit
• Wireshark
• Nessus
• SQLMap

Programming & Development:
• JavaScript/TypeScript
• React.js
• Node.js
• Python
• SQL
• HTML/CSS
• Git/GitHub

Security Frameworks:
• OWASP Top 10
• NIST Cybersecurity Framework
• PTES (Penetration Testing Execution Standard)

KEY PROJECTS
=====================================
Portfolio Website Security Analysis
• Comprehensive security assessment of personal portfolio
• Implemented secure coding practices
• Vulnerability research and documentation

Web Application Vulnerability Research
• Ongoing research in web application security
• Focus on emerging threats and zero-day vulnerabilities
• Documentation of findings and remediation strategies

E-commerce Security Assessment
• Full-scale penetration testing of e-commerce platform
• Identified critical payment processing vulnerabilities
• Provided detailed remediation roadmap

EDUCATION
=====================================
Self-taught Cybersecurity Professional
• Continuous learning through practical labs and certifications
• Active participation in bug bounty programs
• Regular attendance at cybersecurity conferences and workshops

LANGUAGES
=====================================
• English: Professional
• Hindi: Native

ACHIEVEMENTS
=====================================
• Successfully identified 15+ critical vulnerabilities in various web applications
• Maintained 100% client satisfaction rate for security assessments
• Active contributor to cybersecurity community forums
• Published security research findings on personal blog

REFERENCES
=====================================
Available upon request

REFERENCES
=====================================
Available upon request
`
}