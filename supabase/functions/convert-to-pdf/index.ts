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
    
    const { url, options = {} } = await req.json()
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    console.log('Converting URL to PDF:', url)

    // Fetch the HTML content from the URL
    const htmlResponse = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!htmlResponse.ok) {
      throw new Error(`Failed to fetch URL: ${htmlResponse.status}`);
    }
    
    const htmlContent = await htmlResponse.text();
    console.log('Fetched HTML content, length:', htmlContent.length);

    // Generate a proper PDF from the CV content
    const pdfBase64 = await generateCVPDF(htmlContent);
    const base64Data = pdfBase64.split(',')[1]; // Remove data:application/pdf;base64, prefix
    const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    
    return new Response(binaryData, {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Omkar_Singh_CV.pdf"'
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

async function generateCVPDF(htmlContent: string): Promise<string> {
  try {
    console.log('Generating CV PDF from HTML content...');
    
    // Extract structured data from the CV HTML
    const cvData = extractCVData(htmlContent);
    
    // Create a professional PDF document
    const pdfBytes = await createProfessionalPDF(cvData);
    
    // Convert to base64
    const base64 = btoa(String.fromCharCode(...pdfBytes));
    
    return `data:application/pdf;base64,${base64}`;
  } catch (error) {
    console.error('Error generating CV PDF:', error);
    throw error;
  }
}

function extractCVData(htmlContent: string) {
  // Extract key information from the HTML
  const name = htmlContent.match(/<h1[^>]*>([^<]+)</i)?.[1] || 'OMKAR SINGH';
  const title = htmlContent.match(/Cyber Security Specialist/i)?.[0] || 'Cyber Security Specialist';
  
  return {
    name,
    title,
    email: 'omkarsingh9655@gmail.com',
    phone: '+91 9625547807',
    location: '44-B Chander Vihar New Delhi, India',
    linkedin: 'linkedin.com/in/omkar-singh10'
  };
}

async function createProfessionalPDF(cvData: any): Promise<Uint8Array> {
  try {
    // Use jsPDF library for proper PDF generation
    const { jsPDF } = await import('https://esm.sh/jspdf@2.5.1');
    const doc = new jsPDF();
    
    // Set up fonts and colors
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    
    // Header with blue background
    doc.setFillColor(59, 88, 156); // Blue color
    doc.rect(0, 0, 210, 50, 'F');
    
    // Name and title in white
    doc.setTextColor(255, 255, 255);
    doc.text(cvData.name, 20, 25);
    doc.setFontSize(16);
    doc.text(cvData.title, 20, 35);
    
    // Contact info
    doc.setFontSize(10);
    doc.text(`Email: ${cvData.email}`, 20, 42);
    doc.text(`Phone: ${cvData.phone}`, 20, 46);
    
    // Reset to black for body
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    
    let yPosition = 70;
    
    // Summary section
    doc.text('SUMMARY', 20, yPosition);
    yPosition += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    
    const summaryText = 'CEH-certified Cybersecurity Professional with over 2 years of hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) across web applications, mobile platforms, APIs, and infrastructure.';
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, 20, yPosition);
    yPosition += splitSummary.length * 5 + 10;
    
    // Experience section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPosition);
    yPosition += 15;
    
    // Current role
    doc.setFontSize(12);
    doc.text('VAPT Security Consultant', 20, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Digital Track Solutions Private Limited | August 2024 – Present', 20, yPosition);
    yPosition += 8;
    
    const currentRolePoints = [
      '• Successfully led comprehensive VAPT projects for TNeGA',
      '• Performed in-depth Web Application and API Security Testing',
      '• Delivered actionable VAPT assessments for Muthoot Housing Finance'
    ];
    
    currentRolePoints.forEach(point => {
      const splitPoint = doc.splitTextToSize(point, 170);
      doc.text(splitPoint, 25, yPosition);
      yPosition += splitPoint.length * 4 + 2;
    });
    
    yPosition += 10;
    
    // Previous role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Cybersecurity Analyst', 20, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Infocus IT Solutions Private Limited | 2023–2024', 20, yPosition);
    yPosition += 8;
    
    const previousRolePoints = [
      '• Conducted end-to-end VAPT for Hitachi\'s applications',
      '• Identified critical vulnerabilities and security gaps',
      '• Performed deep packet inspection and port scanning'
    ];
    
    previousRolePoints.forEach(point => {
      const splitPoint = doc.splitTextToSize(point, 170);
      doc.text(splitPoint, 25, yPosition);
      yPosition += splitPoint.length * 4 + 2;
    });
    
    yPosition += 15;
    
    // Certifications
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('CERTIFICATIONS', 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const certifications = [
      '• C|EH Certified Ethical Hacker (EC Council)',
      '• CRTP (Certified Red Team Professional)',
      '• CRTA (Certified Red Team Analyst)'
    ];
    
    certifications.forEach(cert => {
      doc.text(cert, 25, yPosition);
      yPosition += 6;
    });
    
    yPosition += 10;
    
    // Education
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('EDUCATION', 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Graduate from Delhi University (DU) | 2020-2023', 25, yPosition);
    
    // Return the PDF as Uint8Array
    return new Uint8Array(doc.output('arraybuffer'));
    
  } catch (error) {
    console.error('Error creating PDF with jsPDF:', error);
    throw error;
  }
}