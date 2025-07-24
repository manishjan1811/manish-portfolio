import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPage } from "@/components/CVPage"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export function CVPreview() {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV download.",
      })

      // Get the CV page element from the dialog or create a temporary one for better rendering
      let cvElement = document.querySelector('#cv-page') as HTMLElement
      let temporaryElement = false

      if (!cvElement) {
        // Create a temporary CV element for download with proper styling
        const tempContainer = document.createElement('div')
        tempContainer.style.position = 'fixed'
        tempContainer.style.top = '-9999px'
        tempContainer.style.left = '-9999px'
        tempContainer.style.width = '794px' // A4 width in pixels (210mm at 96dpi)
        tempContainer.style.zIndex = '-1'
        tempContainer.innerHTML = `
          <div id="temp-cv-page" class="bg-white text-black max-w-4xl mx-auto">
            ${document.querySelector('.cv-content')?.innerHTML || ''}
          </div>
        `
        document.body.appendChild(tempContainer)
        cvElement = tempContainer.querySelector('#temp-cv-page') as HTMLElement
        temporaryElement = true
      }

      // Wait a bit for styles to be applied
      await new Promise(resolve => setTimeout(resolve, 500))

      // Convert to canvas with enhanced options for better quality
      const canvas = await html2canvas(cvElement, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        onclone: (clonedDoc) => {
          // Ensure all CSS is loaded in the cloned document
          const clonedElement = clonedDoc.querySelector('#cv-page, #temp-cv-page') as HTMLElement
          if (clonedElement) {
            // Force apply inline styles for glassmorphism effects
            const glassmorphElements = clonedElement.querySelectorAll('.bg-white\\/5, .backdrop-blur-sm')
            glassmorphElements.forEach(el => {
              const element = el as HTMLElement
              element.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
              element.style.backdropFilter = 'blur(4px)'
              ;(element.style as any).webkitBackdropFilter = 'blur(4px)'
            })
          }
        }
      })

      // Clean up temporary element
      if (temporaryElement) {
        const tempContainer = cvElement.closest('div')
        if (tempContainer?.parentNode) {
          tempContainer.parentNode.removeChild(tempContainer)
        }
      }

      // Create PDF with better quality settings
      const imgData = canvas.toDataURL('image/png', 1.0)
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const imgWidth = 210 // A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      // If content is too long, split into multiple pages
      if (imgHeight > 297) { // A4 height is 297mm
        const pageHeight = 297
        let yOffset = 0
        
        while (yOffset < imgHeight) {
          if (yOffset > 0) {
            pdf.addPage()
          }
          
          pdf.addImage(imgData, 'PNG', 0, -yOffset, imgWidth, imgHeight)
          yOffset += pageHeight
        }
      } else {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      }
      
      pdf.save('Manish_Jangra_CV.pdf')

      toast({
        title: "CV Downloaded",
        description: "Your CV has been downloaded as PDF successfully!",
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Error", 
        description: "There was an error generating the PDF.",
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