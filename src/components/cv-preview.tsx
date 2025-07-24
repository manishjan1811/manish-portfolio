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

  const renderCVForCapture = async (): Promise<HTMLElement> => {
    // Create a temporary container
    const tempContainer = document.createElement('div')
    tempContainer.style.position = 'absolute'
    tempContainer.style.top = '-9999px'
    tempContainer.style.left = '-9999px'
    tempContainer.style.width = '794px' // A4 width in pixels at 96 DPI
    tempContainer.style.background = 'white'
    tempContainer.style.zIndex = '-1'
    
    document.body.appendChild(tempContainer)
    
    // Create a root and render CVPage
    const root = createRoot(tempContainer)
    
    return new Promise((resolve) => {
      const CVPageComponent = () => {
        React.useEffect(() => {
          // Wait for component to mount and styles to apply
          const timer = setTimeout(() => {
            const cvElement = tempContainer.querySelector('#cv-page') as HTMLElement
            if (cvElement) {
              resolve(cvElement)
            }
          }, 1000)
          
          return () => clearTimeout(timer)
        }, [])
        
        return <CVPage className="w-full" />
      }
      
      root.render(<CVPageComponent />)
    })
  }

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV download.",
      })

      // Try to get CV from dialog first, if not available, render it fresh
      let cvElement = document.querySelector('#cv-page') as HTMLElement
      let tempContainer: HTMLElement | null = null
      
      if (!cvElement) {
        // Render CV fresh for capture
        cvElement = await renderCVForCapture()
        tempContainer = cvElement.parentElement
      }

      // Wait for all resources to load
      await document.fonts.ready
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Capture with maximum quality
      const canvas = await html2canvas(cvElement, {
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
        onclone: (clonedDoc, clonedElement) => {
          // Ensure all Tailwind classes work in cloned document
          const originalHead = document.head
          const clonedHead = clonedDoc.head
          
          // Copy all stylesheets
          Array.from(originalHead.children).forEach(child => {
            if (child.tagName === 'STYLE' || 
                (child.tagName === 'LINK' && (child as HTMLLinkElement).rel === 'stylesheet')) {
              clonedHead.appendChild(child.cloneNode(true))
            }
          })
          
          // Ensure the CV element is visible and styled
          const clonedCvElement = clonedElement.querySelector('#cv-page') as HTMLElement
          if (clonedCvElement) {
            clonedCvElement.style.visibility = 'visible'
            clonedCvElement.style.opacity = '1'
            clonedCvElement.style.transform = 'none'
          }
        }
      })

      // Clean up temporary container if created
      if (tempContainer) {
        document.body.removeChild(tempContainer)
      }

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
        title: "CV Downloaded Successfully!",
        description: "Your professionally styled CV has been saved as PDF.",
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Failed", 
        description: "Could not generate PDF. Try opening CV preview first.",
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