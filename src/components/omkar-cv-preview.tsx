import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OmkarCVPreview = () => {
  const { toast } = useToast();

  const openCVPage = () => {
    window.open('/omkar-cv', '_blank');
  };

  const handleDownloadPDF = async () => {
    try {
      toast({
        title: "Preparing your CV",
        description: "Generating high-quality PDF with all colors and textures...",
      });

      console.log('Starting CV download process...');

      // Create URL with query parameters
      const baseUrl = 'https://suynbvqdtzuwxqrrgrgn.supabase.co/functions/v1/cv-handler';
      const params = new URLSearchParams({
        action: 'download',
        type: 'omkar'
      });
      const functionUrl = `${baseUrl}?${params}`;
      
      console.log('Calling function URL:', functionUrl);

      const response = await fetch(functionUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eW5idnFkdHp1d3hxcnJncmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzA1MjgsImV4cCI6MjA2ODkwNjUyOH0.bBbH0Cc-4Y0FTFnkno6SNIGjggvSj_9S5S7D_Fo_4uw`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Array.from(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      // Get the content type to determine how to handle the response
      const contentType = response.headers.get('content-type');
      console.log('Content type:', contentType);

      if (contentType?.includes('application/pdf')) {
        // Handle PDF response
        const blob = await response.blob();
        console.log('PDF blob size:', blob.size);
        
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Omkar_Singh_CV.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        toast({
          title: "CV Downloaded Successfully!",
          description: "Your high-resolution CV with all colors and textures has been downloaded.",
        });
      } else if (contentType?.includes('text/plain')) {
        // Handle text response (fallback)
        const textContent = await response.text();
        console.log('Text content length:', textContent.length);
        
        const blob = new Blob([textContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Omkar_Singh_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        toast({
          title: "CV Downloaded (Text Format)",
          description: "CV downloaded in text format. PDF generation is being set up.",
        });
      } else {
        // Handle JSON response (might contain error or data)
        const jsonData = await response.json();
        console.log('JSON response:', jsonData);
        
        if (jsonData.error) {
          throw new Error(jsonData.error);
        }
        
        toast({
          title: "Download Initiated",
          description: jsonData.message || "CV download process started.",
        });
      }

      // Also open the CV page for preview
      openCVPage();

    } catch (error: any) {
      console.error('Error downloading CV:', error);
      toast({
        title: "Download Error",
        description: `There was an issue downloading your CV: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center p-6">
      <Button 
        onClick={openCVPage}
        variant="outline" 
        className="flex items-center gap-2 px-6 py-3 hover:bg-blue-50 hover:border-blue-300 transition-colors"
      >
        <Eye className="w-5 h-5" />
        Preview Omkar's CV
      </Button>
      
      <Button 
        onClick={handleDownloadPDF}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all"
      >
        <Download className="w-5 h-5" />
        Download High-Quality PDF
      </Button>
    </div>
  );
};

export default OmkarCVPreview;