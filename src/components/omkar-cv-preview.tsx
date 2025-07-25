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

      // Call the cv-handler function with type=omkar
      const response = await fetch(
        `https://suynbvqdtzuwxqrrgrgn.supabase.co/functions/v1/cv-handler?action=download&type=omkar`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eW5idnFkdHp1d3hxcnJncmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzA1MjgsImV4cCI6MjA2ODkwNjUyOH0.bBbH0Cc-4Y0FTFnkno6SNIGjggvSj_9S5S7D_Fo_4uw`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the blob from response
      const blob = await response.blob();
      
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

      // Also open the CV page for preview
      openCVPage();
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast({
        title: "Download Error",
        description: "There was an issue downloading your CV. Please try again.",
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