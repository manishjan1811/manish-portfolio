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

  const waitForResourcesAndStyles = async () => {
    // Wait for document to be ready
    if (document.readyState !== 'complete') {
      await new Promise(resolve => {
        window.addEventListener('load', resolve, { once: true })
      })
    }

    // Wait for all fonts to load
    await document.fonts.ready

    // Wait for any remaining async operations
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV download.",
      })

      // Ensure all resources are loaded
      await waitForResourcesAndStyles()

      // Find the CV element from the dialog preview
      const cvElement = document.querySelector('#cv-page') as HTMLElement
      
      if (!cvElement) {
        throw new Error('CV preview not found. Please open the preview first.')
      }

      // Force a repaint to ensure all styles are applied
      cvElement.style.transform = 'translateZ(0)'
      await new Promise(resolve => requestAnimationFrame(resolve))
      cvElement.style.transform = ''

      // Get all stylesheets to ensure they're included
      const stylesheets = Array.from(document.styleSheets)
      
      // Capture with enhanced settings for style preservation
      const canvas = await html2canvas(cvElement, {
        scale: 2, // Good balance of quality and performance
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: true,
        imageTimeout: 15000, // Wait longer for images
        onclone: (clonedDoc, clonedElement) => {
          // Ensure the cloned document has all styles
          const clonedCvElement = clonedElement.querySelector('#cv-page') as HTMLElement
          
          if (clonedCvElement) {
            // Force visibility and opacity
            clonedCvElement.style.visibility = 'visible'
            clonedCvElement.style.opacity = '1'
            clonedCvElement.style.position = 'relative'
            clonedCvElement.style.zIndex = '1'
            
            // Copy all computed styles from original to cloned element
            const originalStyles = window.getComputedStyle(cvElement)
            for (let i = 0; i < originalStyles.length; i++) {
              const property = originalStyles[i]
              const value = originalStyles.getPropertyValue(property)
              clonedCvElement.style.setProperty(property, value)
            }
            
            // Ensure all child elements have their styles preserved
            const allElements = clonedCvElement.querySelectorAll('*')
            const allOriginalElements = cvElement.querySelectorAll('*')
            
            allElements.forEach((element, index) => {
              if (allOriginalElements[index]) {
                const originalElementStyles = window.getComputedStyle(allOriginalElements[index])
                const clonedElementStyle = (element as HTMLElement).style
                
                // Copy critical style properties
                const criticalProps = [
                  'background', 'background-color', 'background-image', 'background-gradient',
                  'color', 'font-family', 'font-size', 'font-weight', 'font-style',
                  'border', 'border-radius', 'box-shadow', 'text-shadow',
                  'opacity', 'visibility', 'display', 'position',
                  'margin', 'padding', 'width', 'height',
                  'backdrop-filter', 'filter', 'transform'
                ]
                
                criticalProps.forEach(prop => {
                  const value = originalElementStyles.getPropertyValue(prop)
                  if (value) {
                    clonedElementStyle.setProperty(prop, value)
                  }
                })
              }
            })
            
            // Add all stylesheets to cloned document
            stylesheets.forEach(stylesheet => {
              try {
                if (stylesheet.href) {
                  const link = clonedDoc.createElement('link')
                  link.rel = 'stylesheet'
                  link.href = stylesheet.href
                  clonedDoc.head.appendChild(link)
                } else if (stylesheet.cssRules) {
                  const style = clonedDoc.createElement('style')
                  Array.from(stylesheet.cssRules).forEach(rule => {
                    style.appendChild(clonedDoc.createTextNode(rule.cssText))
                  })
                  clonedDoc.head.appendChild(style)
                }
              } catch (e) {
                console.warn('Could not clone stylesheet:', e)
              }
            })
            
            // Ensure fonts are available
            if (document.fonts) {
              Array.from(document.fonts).forEach(font => {
                if (font.status === 'loaded') {
                  clonedDoc.fonts.add(font)
                }
              })
            }
          }
        },
        ignoreElements: (element) => {
          return element.tagName === 'SCRIPT' || 
                 element.tagName === 'NOSCRIPT' ||
                 element.classList?.contains('exclude-from-pdf')
        }
      })

      // Create high-quality PDF with proper A4 dimensions
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // A4 dimensions with margins
      const pdfWidth = 210
      const pdfHeight = 297
      const margin = 10
      const contentWidth = pdfWidth - (margin * 2)
      const contentHeight = pdfHeight - (margin * 2)
      
      // Calculate dimensions maintaining aspect ratio
      const aspectRatio = canvas.width / canvas.height
      let imgWidth = contentWidth
      let imgHeight = contentWidth / aspectRatio
      
      // If height exceeds page, adjust to fit
      if (imgHeight > contentHeight) {
        imgHeight = contentHeight
        imgWidth = contentHeight * aspectRatio
      }
      
      // Center the content
      const xOffset = (pdfWidth - imgWidth) / 2
      const yOffset = (pdfHeight - imgHeight) / 2
      
      // Convert to high-quality image
      const imgData = canvas.toDataURL('image/jpeg', 0.95)
      
      // Add image to PDF
      pdf.addImage(imgData, 'JPEG', xOffset, yOffset, imgWidth, imgHeight)
      
      // Save the PDF
      pdf.save('Manish_Jangra_CV.pdf')

      toast({
        title: "CV Downloaded Successfully",
        description: "Your pixel-perfect CV has been downloaded as PDF!",
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Error", 
        description: "Failed to generate PDF. Please try again or use browser print (Ctrl+P).",
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