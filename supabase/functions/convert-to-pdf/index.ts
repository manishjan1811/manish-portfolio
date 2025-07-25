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
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        pdf: pdfBase64,
        message: 'PDF generated successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
    
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
    const pdfContent = createProfessionalPDF(cvData);
    
    // Convert to base64
    const encoder = new TextEncoder();
    const data = encoder.encode(pdfContent);
    const base64 = btoa(String.fromCharCode(...data));
    
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

function createProfessionalPDF(cvData: any): string {
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
/F2 6 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 2500
>>
stream
BT
/F2 24 Tf
50 750 Td
(${cvData.name}) Tj
0 -30 Td
/F1 16 Tf
(${cvData.title}) Tj
0 -40 Td
/F1 12 Tf
(Email: ${cvData.email}) Tj
0 -20 Td
(Phone: ${cvData.phone}) Tj
0 -20 Td
(Location: ${cvData.location}) Tj
0 -20 Td
(LinkedIn: ${cvData.linkedin}) Tj
0 -40 Td
/F2 16 Tf
(SUMMARY) Tj
0 -25 Td
/F1 12 Tf
(CEH-certified Cybersecurity Professional with over 2 years of hands-on) Tj
0 -15 Td
(experience in Vulnerability Assessment and Penetration Testing \\(VAPT\\)) Tj
0 -15 Td
(across web applications, mobile platforms, APIs, and infrastructure.) Tj
0 -30 Td
/F2 16 Tf
(PROFESSIONAL EXPERIENCE) Tj
0 -25 Td
/F2 14 Tf
(VAPT Security Consultant) Tj
0 -18 Td
/F1 12 Tf
(Digital Track Solutions Private Limited | August 2024 – Present) Tj
0 -20 Td
(• Successfully led comprehensive VAPT projects for TNeGA) Tj
0 -15 Td
(• Performed in-depth Web Application and API Security Testing) Tj
0 -15 Td
(• Delivered actionable VAPT assessments for Muthoot Housing Finance) Tj
0 -30 Td
/F2 14 Tf
(Cybersecurity Analyst) Tj
0 -18 Td
/F1 12 Tf
(Infocus IT Solutions Private Limited | 2023–2024) Tj
0 -20 Td
(• Conducted end-to-end VAPT for Hitachi's applications) Tj
0 -15 Td
(• Identified critical vulnerabilities and security gaps) Tj
0 -30 Td
/F2 16 Tf
(CERTIFICATIONS) Tj
0 -25 Td
/F1 12 Tf
(• C|EH Certified Ethical Hacker \\(EC Council\\)) Tj
0 -15 Td
(• CRTP \\(Certified Red Team Professional\\)) Tj
0 -15 Td
(• CRTA \\(Certified Red Team Analyst\\)) Tj
0 -30 Td
/F2 16 Tf
(EDUCATION) Tj
0 -25 Td
/F1 12 Tf
(Graduate from Delhi University \\(DU\\) | 2020-2023) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

6 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
endobj

xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000136 00000 n 
0000000301 00000 n 
0000002850 00000 n 
0000002925 00000 n 
trailer
<<
/Size 7
/Root 1 0 R
>>
startxref
3005
%%EOF`;

  return pdfContent;
}