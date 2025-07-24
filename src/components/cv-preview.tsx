import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPage } from "@/components/CVPage"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { createRoot } from 'react-dom/client'
import React from 'react'

export function CVPreview() {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Backend se CV render ho rahi hai...",
      })

      // First, let's get the CV HTML from our backend
      const response = await fetch('https://suynbvqdtzuwxqrrgrgn.supabase.co/functions/v1/cv-generator', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch CV from backend')
      }

      const cvHTML = await response.text()
      
      // Create a temporary iframe to render the backend CV
      const iframe = document.createElement('iframe')
      iframe.style.position = 'absolute'
      iframe.style.top = '-9999px'
      iframe.style.left = '-9999px'
      iframe.style.width = '794px' // A4 width
      iframe.style.height = '1123px' // A4 height
      iframe.style.border = 'none'
      
      document.body.appendChild(iframe)
      
      // Write the backend HTML to iframe
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (!iframeDoc) {
        throw new Error('Could not access iframe document')
      }
      
      iframeDoc.open()
      iframeDoc.write(cvHTML)
      iframeDoc.close()

      // Wait for the iframe to load completely
      await new Promise(resolve => {
        iframe.onload = resolve
        // Fallback timeout
        setTimeout(resolve, 3000)
      })

      // Wait a bit more for fonts and styles to load
      await new Promise(resolve => setTimeout(resolve, 2000))

      const cvElement = iframeDoc.getElementById('cv-page')
      
      if (!cvElement) {
        throw new Error('CV element not found in backend response')
      }

      toast({
        title: "Creating PDF...",
        description: "Backend se rendered CV ko PDF banaya ja raha hai...",
      })

      // Capture the iframe content with html2canvas
      const canvas = await html2canvas(cvElement as HTMLElement, {
        scale: 3,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: 794, // A4 width at 96 DPI
        height: cvElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: true,
      })

      // Clean up iframe
      document.body.removeChild(iframe)

      // Create PDF with proper A4 dimensions
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgData = canvas.toDataURL('image/jpeg', 0.98)
      
      // A4 dimensions
      const pdfWidth = 210
      const pdfHeight = 297
      const margin = 10
      
      // Calculate scaling to fit A4 with margins
      const contentWidth = pdfWidth - (margin * 2)
      const aspectRatio = canvas.width / canvas.height
      const imgWidth = contentWidth
      const imgHeight = contentWidth / aspectRatio
      
      // Add to PDF
      pdf.addImage(imgData, 'JPEG', margin, margin, imgWidth, Math.min(imgHeight, pdfHeight - margin * 2))
      
      // If content is too long, add additional pages
      if (imgHeight > pdfHeight - margin * 2) {
        let remainingHeight = imgHeight - (pdfHeight - margin * 2)
        let currentPage = 1
        
        while (remainingHeight > 0) {
          pdf.addPage()
          const yOffset = -(currentPage * (pdfHeight - margin * 2))
          const pageHeight = Math.min(remainingHeight, pdfHeight - margin * 2)
          
          pdf.addImage(imgData, 'JPEG', margin, margin + yOffset, imgWidth, imgHeight)
          
          remainingHeight -= pageHeight
          currentPage++
        }
      }
      
      pdf.save('Manish_Jangra_CV.pdf')

      toast({
        title: "CV Successfully Downloaded! ✅",
        description: "Backend se properly rendered aur styled CV download ho gayi!",
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Failed ❌", 
        description: "Backend connection issue. Fallback method use kar rahe hain...",
        variant: "destructive",
      })
      
      // Fallback to local CV if backend fails
      const localCvElement = document.querySelector('#cv-page') as HTMLElement
      if (localCvElement) {
        try {
          const canvas = await html2canvas(localCvElement, {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
          })
          
          const pdf = new jsPDF('p', 'mm', 'a4')
          const imgData = canvas.toDataURL('image/jpeg', 0.95)
          const imgWidth = 190
          const imgHeight = (canvas.height * imgWidth) / canvas.width
          
          pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight)
          pdf.save('Manish_Jangra_CV_Fallback.pdf')
          
          toast({
            title: "Fallback Download Complete",
            description: "Local CV version downloaded successfully.",
          })
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError)
        }
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full relative px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
        >
          <div className="flex items-center justify-center space-x-2">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Preview CV</span>
          </div>
          <div className="absolute inset-0 bg-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="flex items-center justify-between">
            <span>CV Preview - Manish Jangra</span>
            <Button
              onClick={handleDownload}
              size="sm" 
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[calc(95vh-80px)] p-4">
          <div className="cv-content">
            <CVPage className="shadow-lg" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}