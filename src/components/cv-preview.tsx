import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPage } from "@/components/CVPage"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { createRoot } from 'react-dom/client'

export function CVPreview() {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV download.",
      })

      // Find the CV element from the dialog preview
      const cvElement = document.querySelector('#cv-page') as HTMLElement
      
      if (!cvElement) {
        throw new Error('CV preview not found. Please open the preview first.')
      }

      // Wait for all images and fonts to load
      await new Promise(resolve => {
        const images = cvElement.querySelectorAll('img')
        if (images.length === 0) {
          resolve(true)
          return
        }
        
        let loadedImages = 0
        images.forEach(img => {
          if (img.complete) {
            loadedImages++
          } else {
            img.addEventListener('load', () => {
              loadedImages++
              if (loadedImages === images.length) resolve(true)
            })
            img.addEventListener('error', () => {
              loadedImages++
              if (loadedImages === images.length) resolve(true)
            })
          }
        })
        
        if (loadedImages === images.length) resolve(true)
      })

      // Wait a bit more for CSS animations and transitions to settle
      await new Promise(resolve => setTimeout(resolve, 500))

      // Capture with maximum quality settings
      const canvas = await html2canvas(cvElement, {
        scale: 4, // Higher scale for better quality
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff', // White background for PDF
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: true,
        onclone: (clonedDoc) => {
          // Ensure all styles are applied to the cloned document
          const clonedElement = clonedDoc.querySelector('#cv-page') as HTMLElement
          if (clonedElement) {
            // Force style recomputation
            clonedElement.style.visibility = 'visible'
            clonedElement.style.opacity = '1'
            
            // Ensure fonts are loaded
            const fontFaces = Array.from(document.fonts)
            fontFaces.forEach(font => {
              if (font.status === 'loaded') {
                clonedDoc.fonts.add(font)
              }
            })
          }
        },
        ignoreElements: (element) => {
          // Skip problematic elements
          return element.tagName === 'SCRIPT' || 
                 element.tagName === 'NOSCRIPT' ||
                 element.classList?.contains('exclude-from-pdf')
        }
      })

      // Create high-quality PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.98) // Use JPEG with high quality
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const pdfWidth = 210 // A4 width in mm
      const pdfHeight = 297 // A4 height in mm
      const imgWidth = pdfWidth - 20 // Leave 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      // Center the content with margins
      const xOffset = 10 // 10mm left margin
      let yOffset = 10 // 10mm top margin
      
      // Handle multi-page if content is too long
      if (imgHeight > pdfHeight - 20) { // Account for top and bottom margins
        const pageHeight = pdfHeight - 20 // Account for margins
        let currentY = 0
        
        while (currentY < imgHeight) {
          if (currentY > 0) {
            pdf.addPage()
          }
          
          pdf.addImage(imgData, 'JPEG', xOffset, yOffset - currentY, imgWidth, imgHeight)
          currentY += pageHeight
        }
      } else {
        // Center vertically if content fits on one page
        const verticalCenter = (pdfHeight - imgHeight) / 2
        pdf.addImage(imgData, 'JPEG', xOffset, Math.max(yOffset, verticalCenter), imgWidth, imgHeight)
      }
      
      pdf.save('Manish_Jangra_CV.pdf')

      toast({
        title: "CV Downloaded",
        description: "Your styled CV has been downloaded successfully!",
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Error", 
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      })
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