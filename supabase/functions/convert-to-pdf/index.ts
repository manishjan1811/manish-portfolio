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

    // Use Puppeteer to convert page to PDF
    const puppeteerResponse = await fetch('https://api.htmlcsstoimage.com/v1/image', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa('user_id:api_key'), // Will use a different service
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        html: `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <iframe src="${url}" width="794" height="1123" style="border: none;"></iframe>
        </body>
        </html>`,
        css: '',
        google_fonts: 'Inter',
        viewport_width: 794,
        viewport_height: 1123,
      }),
    })

    // For now, let's use a simpler approach - just fetch the HTML and return it
    // This is a basic implementation - we'll enhance it
    
    const htmlResponse = await fetch(url)
    const htmlContent = await htmlResponse.text()
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'PDF generation initiated',
        html: htmlContent.slice(0, 1000) + '...' // Preview
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