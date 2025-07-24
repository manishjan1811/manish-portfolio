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
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    if (action === 'upload') {
      // For future implementation - upload CV
      return new Response(
        JSON.stringify({ message: 'Upload functionality ready for PDF file' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    if (action === 'download') {
      // Try to get the CV file from storage
      const { data, error } = await supabaseClient.storage
        .from('cv-files')
        .download('manish-jangra-cv.pdf')

      if (error) {
        console.error('Download error:', error)
        // If file doesn't exist, return a generated CV content
        const cvContent = generateCVContent();
        return new Response(cvContent, {
          headers: {
            ...corsHeaders,
            'Content-Type': 'text/plain',
            'Content-Disposition': 'attachment; filename="Manish_Jangra_CV.txt"'
          }
        })
      }

      return new Response(data, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Manish_Jangra_CV.pdf"'
        }
      })
    }

    if (action === 'preview') {
      // Return CV content for preview
      const cvContent = generateCVContent();
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

function generateCVContent(): string {
  return `
MANISH JANGRA
Web Application Pentester & Developer

Contact Information:
Email: manish.jangra@email.com
Phone: +91 XXXXX XXXXX
Location: India
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

---
Generated on ${new Date().toLocaleDateString()}
This CV was generated automatically. For the most up-to-date version, please contact directly.
`
}