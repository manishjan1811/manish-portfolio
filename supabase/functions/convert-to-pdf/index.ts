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
    
    const { url } = await req.json()
    
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
    // Create a simple, clean PDF without any metadata
    const { jsPDF } = await import('https://esm.sh/jspdf@2.5.1');
    const doc = new jsPDF();
    
    // Remove all metadata
    doc.setProperties({
      title: '',
      subject: '',
      author: '',
      creator: '',
      producer: ''
    });
    
    // Header with blue background
    doc.setFillColor(59, 88, 156);
    doc.rect(0, 0, 210, 50, 'F');
    
    // Name and title in white
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text(cvData.name, 20, 25);
    doc.setFontSize(16);
    doc.text(cvData.title, 20, 35);
    
    // Contact info
    doc.setFontSize(10);
    doc.text(`${cvData.email} | ${cvData.phone}`, 20, 42);
    doc.text(`${cvData.location}`, 20, 46);
    
    // Body content in black
    doc.setTextColor(0, 0, 0);
    let yPosition = 70;
    
    // Summary
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('SUMMARY', 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const summaryText = 'CEH-certified Cybersecurity Professional with over 2 years of hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) across web applications, mobile platforms, APIs, and infrastructure.';
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, 20, yPosition);
    yPosition += splitSummary.length * 5 + 15;
    
    // Experience
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
    yPosition += 10;
    
    const currentPoints = [
      '• Led comprehensive VAPT projects for TNeGA',
      '• Performed Web Application and API Security Testing',
      '• Delivered VAPT assessments for Muthoot Housing Finance'
    ];
    
    currentPoints.forEach(point => {
      doc.text(point, 25, yPosition);
      yPosition += 5;
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
    yPosition += 10;
    
    const previousPoints = [
      '• Conducted VAPT for Hitachi applications',
      '• Identified critical vulnerabilities and security gaps'
    ];
    
    previousPoints.forEach(point => {
      doc.text(point, 25, yPosition);
      yPosition += 5;
    });
    
    yPosition += 15;
    
    // Certifications
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('CERTIFICATIONS', 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const certs = [
      '• C|EH Certified Ethical Hacker (EC Council)',
      '• CRTP (Certified Red Team Professional)',
      '• CRTA (Certified Red Team Analyst)'
    ];
    
    certs.forEach(cert => {
      doc.text(cert, 25, yPosition);
      yPosition += 6;
    });
    
    yPosition += 15;
    
    // Education
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('EDUCATION', 20, yPosition);
    yPosition += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Graduate from Delhi University (DU) | 2020-2023', 25, yPosition);
    
    // Return clean PDF with no metadata
    return new Uint8Array(doc.output('arraybuffer'));
    
  } catch (error) {
    console.error('Error creating PDF:', error);
    throw error;
  }
}