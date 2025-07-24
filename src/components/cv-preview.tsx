import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPage } from "@/components/CVPage"

export function CVPreview() {
  const { toast } = useToast()

  const openCVPage = () => {
    const currentDomain = window.location.origin
    const cvUrl = `${currentDomain}/cv`
    window.open(cvUrl, '_blank')
  }

  const handleDownloadPDF = async () => {
    try {
      toast({
        title: "Opening CV Page...",
        description: "CV page khul raha hai - aap manual download kar sakte hain",
      })

      openCVPage()

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
      {/* Preview CV Button */}
      <Button
        onClick={openCVPage}
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