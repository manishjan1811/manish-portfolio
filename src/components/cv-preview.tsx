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

      // Create a temporary container with React rendering for perfect styling
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'fixed'
      tempContainer.style.top = '-10000px'
      tempContainer.style.left = '-10000px'
      tempContainer.style.width = '794px' // A4 width in pixels
      tempContainer.style.height = 'auto'
      tempContainer.style.zIndex = '-1000'
      tempContainer.style.background = 'white'
      
      document.body.appendChild(tempContainer)
      
      // Render the CVPage component with React for perfect styling
      const root = createRoot(tempContainer)
      root.render(<CVPage />)
      
      // Wait for React to render and styles to be applied
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const cvElement = tempContainer.querySelector('#cv-page') as HTMLElement
      
      if (!cvElement) {
        throw new Error('Could not render CV component')
      }

      // Convert to canvas with maximum quality settings
      const canvas = await html2canvas(cvElement, {
        scale: 4, // Maximum quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: true,
        onclone: (clonedDoc) => {
          // Ensure all styles are properly applied
          const clonedElement = clonedDoc.querySelector('#cv-page') as HTMLElement
          if (clonedElement) {
            // Add CSS for glassmorphism effects that might not be captured
            const style = clonedDoc.createElement('style')
            style.textContent = `
              .bg-gradient-to-br { 
                background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important;
              }
              .from-slate-900\\/95 { 
                --tw-gradient-from: rgba(15, 23, 42, 0.95) !important;
                --tw-gradient-to: rgba(15, 23, 42, 0) !important;
                --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
              }
              .via-blue-900\\/90 { 
                --tw-gradient-to: rgba(30, 58, 138, 0) !important;
                --tw-gradient-stops: var(--tw-gradient-from), rgba(30, 58, 138, 0.9), var(--tw-gradient-to) !important;
              }
              .to-slate-800\\/95 { 
                --tw-gradient-to: rgba(30, 41, 59, 0.95) !important;
              }
              .backdrop-blur-xl { 
                backdrop-filter: blur(24px) !important;
                -webkit-backdrop-filter: blur(24px) !important;
              }
              .backdrop-blur-sm { 
                backdrop-filter: blur(4px) !important;
                -webkit-backdrop-filter: blur(4px) !important;
              }
              .bg-white\\/\\[0\\.05\\] { 
                background-color: rgba(255, 255, 255, 0.05) !important;
              }
              .bg-white\\/5 { 
                background-color: rgba(255, 255, 255, 0.05) !important;
              }
              .border-white\\/10 { 
                border-color: rgba(255, 255, 255, 0.1) !important;
              }
              .border-white\\/20 { 
                border-color: rgba(255, 255, 255, 0.2) !important;
              }
              .text-white\\/90 { 
                color: rgba(255, 255, 255, 0.9) !important;
              }
              .bg-gradient-to-r { 
                background-image: linear-gradient(to right, var(--tw-gradient-stops)) !important;
              }
              .from-white { 
                --tw-gradient-from: rgb(255, 255, 255) !important;
                --tw-gradient-to: rgba(255, 255, 255, 0) !important;
                --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
              }
              .via-blue-100 { 
                --tw-gradient-to: rgba(219, 234, 254, 0) !important;
                --tw-gradient-stops: var(--tw-gradient-from), rgb(219, 234, 254), var(--tw-gradient-to) !important;
              }
              .to-cyan-200 { 
                --tw-gradient-to: rgb(165, 243, 252) !important;
              }
              .bg-clip-text { 
                background-clip: text !important;
                -webkit-background-clip: text !important;
              }
              .text-transparent { 
                color: transparent !important;
              }
            `
            clonedDoc.head.appendChild(style)
          }
        }
      })

      // Clean up
      root.unmount()
      document.body.removeChild(tempContainer)

      // Create PDF with high quality
      const imgData = canvas.toDataURL('image/png', 1.0)
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const imgWidth = 210 // A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      // Handle multi-page if content is too long
      if (imgHeight > 297) {
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
        description: "Your styled CV has been downloaded successfully!",
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