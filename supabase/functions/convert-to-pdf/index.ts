import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('PDF generation request received')
    
    // Generate PDF directly without fetching HTML
    const pdfBytes = await generateCleanPDF();
    
    return new Response(pdfBytes, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Omkar_Singh_CV.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });
    
  } catch (error) {
    console.error('Error generating PDF:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate PDF', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

async function generateCleanPDF(): Promise<Uint8Array> {
  try {
    // Import jsPDF
    const { jsPDF } = await import('https://esm.sh/jspdf@2.5.1');
    
    // Create new PDF with custom settings to prevent metadata
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
      precision: 2
    });

    // Set specific properties for Omkar Singh
    doc.setProperties({
      title: 'Omkar Singh - Web Pentester',
      subject: 'CV - Omkar Singh',
      author: 'Omkar Singh',
      creator: 'Omkar Singh',
      producer: 'CV Generator',
      keywords: 'CV, Resume, Omkar Singh, Web Pentester, Cybersecurity'
    });

    // Additional PDF settings to control display
    doc.setDisplayMode('fullpage', 'continuous');
    doc.setDocumentProperties({
      title: 'Omkar Singh - Web Pentester',
      author: 'Omkar Singh'
    });

    // Header with blue background
    doc.setFillColor(59, 88, 156);
    doc.rect(0, 0, 210, 50, 'F');
    
    // Name in white
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.text('OMKAR SINGH', 20, 25);
    
    // Title
    doc.setFontSize(16);
    doc.text('Cyber Security Specialist', 20, 35);
    
    // Contact info
    doc.setFontSize(10);
    doc.text('omkarsingh9655@gmail.com | +91 9625547807 | 44-B Chander Vihar New Delhi, India', 20, 42);
    
    // Switch to black for body content
    doc.setTextColor(0, 0, 0);
    let y = 70;
    
    // Summary
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('SUMMARY', 20, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const summary = 'CEH-certified Cybersecurity Professional with over 2 years of hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) across web applications, mobile platforms, APIs, and infrastructure. Skilled in identifying and exploiting security vulnerabilities through real-world attack simulations.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, y);
    y += splitSummary.length * 5 + 15;
    
    // Professional Experience
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PROFESSIONAL EXPERIENCE', 20, y);
    y += 15;
    
    // Current Job
    doc.setFontSize(12);
    doc.text('VAPT Security Consultant', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Digital Track Solutions Private Limited | August 2024 – Present', 20, y);
    y += 8;
    
    const currentPoints = [
      '• Led comprehensive VAPT projects for Tamil Nadu e-Governance Agency (TNeGA)',
      '• Performed Web Application, API, and Mobile Application Security Testing',
      '• Delivered actionable VAPT assessments for Muthoot Housing Finance',
      '• Ensured assessments adhered to OWASP, NIST security standards'
    ];
    
    currentPoints.forEach(point => {
      const splitPoint = doc.splitTextToSize(point, 170);
      doc.text(splitPoint, 25, y);
      y += splitPoint.length * 4 + 2;
    });
    
    y += 10;
    
    // Previous Job
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Cybersecurity Analyst', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Infocus IT Solutions Private Limited | 2023–2024', 20, y);
    y += 8;
    
    const previousPoints = [
      '• Conducted end-to-end VAPT for Hitachi Web Applications and APIs',
      '• Identified critical vulnerabilities including authentication bypass',
      '• Performed network penetration testing and configuration auditing',
      '• Prepared comprehensive VAPT reports with remediation steps'
    ];
    
    previousPoints.forEach(point => {
      const splitPoint = doc.splitTextToSize(point, 170);
      doc.text(splitPoint, 25, y);
      y += splitPoint.length * 4 + 2;
    });
    
    y += 15;
    
    // Key Projects
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('KEY PROJECTS', 20, y);
    y += 10;
    
    doc.setFontSize(11);
    doc.text('PhillipCapital (India) Private Limited', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('• Comprehensive Web and API Vulnerability Assessments', 25, y);
    y += 4;
    doc.text('• Security recommendations aligned with OWASP Top 10', 25, y);
    y += 8;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Muthoot Housing Finance Company Limited', 20, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('• Full-scope VAPT covering web applications and network architecture', 25, y);
    y += 4;
    doc.text('• Vulnerability mapping to OWASP, SANS, and NIST standards', 25, y);
    y += 15;
    
    // Technical Skills
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('TECHNICAL SKILLS', 20, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const skills = [
      'Penetration Testing: Web Applications, APIs, Network Infrastructure',
      'Security Tools: Burp Suite Professional, Metasploit, Nmap, Nessus',
      'Programming: Python Scripting for Security Automation',
      'Standards: OWASP Top 10, SANS 25, NIST Framework'
    ];
    
    skills.forEach(skill => {
      doc.text(`• ${skill}`, 25, y);
      y += 6;
    });
    
    y += 10;
    
    // Certifications
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('CERTIFICATIONS', 20, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const certs = [
      'C|EH Certified Ethical Hacker (EC Council)',
      'CRTP (Certified Red Team Professional)',
      'CRTA (Certified Red Team Analyst)'
    ];
    
    certs.forEach(cert => {
      doc.text(`• ${cert}`, 25, y);
      y += 6;
    });
    
    y += 10;
    
    // Education
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('EDUCATION', 20, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('• Graduate from Delhi University (DU) | 2020-2023', 25, y);
    
    // Return clean PDF bytes
    return new Uint8Array(doc.output('arraybuffer'));
    
  } catch (error) {
    console.error('Error generating clean PDF:', error);
    throw error;
  }
}