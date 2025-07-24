import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPage } from "@/components/CVPage"

export function CVPreview() {
  const { toast } = useToast()

  const handleDownloadPDF = async () => {
    console.log('Download button clicked!') // Debug log
    
    try {
      toast({
        title: "Opening CV Page...",
        description: "CV page khul raha hai - aap manual download kar sakte hain",
      })

      // Direct approach - open CV page for manual print/download
      const currentDomain = window.location.origin
      const cvUrl = `${currentDomain}/cv`
      
      console.log('Opening CV URL:', cvUrl)
      
      // Open CV page in new tab
      const newWindow = window.open(cvUrl, '_blank')
      
      if (!newWindow) {
        throw new Error('Pop-up blocked! Please allow pop-ups for this site.')
      }

      // Give user instructions
      setTimeout(() => {
        toast({
          title: "✅ CV Page Ready!",
          description: "Press Ctrl+P → Save as PDF → A4 size → Background graphics ON",
        })
      }, 1000)

    } catch (error) {
      console.error('Error opening CV:', error)
      toast({
        title: "❌ Error Opening CV",
        description: "Error: " + (error as Error).message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex gap-2 w-full">
      {/* Preview CV Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 relative px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
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
                onClick={handleDownloadPDF}
                size="sm" 
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Convert to PDF
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

      {/* Direct Download Button */}
      <Button
        onClick={handleDownloadPDF}
        variant="default"
        size="sm"
        className="flex-1 relative px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 group overflow-hidden"
      >
        <div className="flex items-center justify-center space-x-2">
          <Download className="w-4 h-4 text-primary-foreground group-hover:animate-bounce" />
          <span className="text-sm font-medium text-primary-foreground">Download CV</span>
        </div>
        <div className="absolute inset-0 bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </Button>
    </div>
  )
}