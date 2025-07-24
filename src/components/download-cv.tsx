import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function DownloadCV() {
  const { toast } = useToast()

  const handleDownload = () => {
    // For now, we'll show a toast. In production, you'd have an actual CV file
    toast({
      title: "CV Download",
      description: "CV download feature coming soon! Contact me directly for my resume.",
    })
    
    // Future implementation:
    // const link = document.createElement('a')
    // link.href = '/manish-jangra-cv.pdf'
    // link.download = 'Manish_Jangra_Cybersecurity_Resume.pdf'
    // link.click()
  }

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="w-full relative px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
      aria-label="Download CV"
    >
      <div className="flex items-center justify-center space-x-2">
        <Download className="w-4 h-4 text-primary group-hover:animate-bounce" />
        <span className="text-sm font-medium text-foreground">Download CV</span>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </Button>
  )
}