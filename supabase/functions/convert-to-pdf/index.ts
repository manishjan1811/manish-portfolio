import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts"

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

    // Use Puppeteer via external service for PDF generation
    try {
      // Try to use browser-based PDF generation
      const pdfResponse = await generatePDFWithPuppeteer(url, options);
      
      if (pdfResponse) {
        return new Response(
          JSON.stringify({ 
            success: true, 
            pdf: pdfResponse,
            message: 'PDF generated successfully'
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    } catch (pdfError) {
      console.error('PDF generation failed, falling back to HTML:', pdfError);
    }

    // Fallback: Fetch the HTML content and return it
    console.log('Fetching HTML content as fallback...');
    const htmlResponse = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    if (!htmlResponse.ok) {
      throw new Error(`Failed to fetch URL: ${htmlResponse.status}`);
    }
    
    const htmlContent = await htmlResponse.text();
    
    // Generate a simple text-based PDF equivalent
    const textContent = extractTextFromHTML(htmlContent);
    const base64PDF = generateSimplePDF(textContent);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        pdf: base64PDF,
        message: 'PDF generated from HTML content',
        fallback: true
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
    
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

async function generatePDFWithPuppeteer(url: string, options: any): Promise<string | null> {
  try {
    // This is a placeholder for actual Puppeteer integration
    // In a real implementation, you would use a service like:
    // - Browserless.io
    // - ScrapingBee
    // - HTMLCSStoImage
    
    console.log('Attempting PDF generation with options:', options);
    
    // For now, return null to trigger fallback
    return null;
  } catch (error) {
    console.error('Puppeteer PDF generation failed:', error);
    return null;
  }
}

function extractTextFromHTML(html: string): string {
  try {
    // Remove script and style tags
    const cleanHTML = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    return cleanHTML;
  } catch (error) {
    console.error('Error extracting text from HTML:', error);
    return 'Error extracting content';
  }
}

function generateSimplePDF(content: string): string {
  try {
    // Create a basic PDF structure (simplified)
    const pdfHeader = `%PDF-1.4
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
>>
>>
>>
endobj

4 0 obj
<<
/Length ${content.length + 100}
>>
stream
BT
/F1 12 Tf
50 750 Td
(${content.slice(0, 1000).replace(/[()\\]/g, '\\$&')}) Tj
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

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000136 00000 n 
0000000301 00000 n 
0000000456 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
553
%%EOF`;

    // Convert to base64
    const encoder = new TextEncoder();
    const data = encoder.encode(pdfHeader);
    const base64 = btoa(String.fromCharCode(...data));
    
    return `data:application/pdf;base64,${base64}`;
  } catch (error) {
    console.error('Error generating simple PDF:', error);
    throw error;
  }
}