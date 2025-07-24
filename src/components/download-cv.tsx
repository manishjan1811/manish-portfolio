import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CVPreview } from "@/components/cv-preview"
import { supabase } from "@/integrations/supabase/client"

export function DownloadCV() {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      toast({
        title: "Downloading CV...",
        description: "Your CV download will start shortly.",
      })

      // Call the edge function to handle download
      const { data, error } = await supabase.functions.invoke('cv-handler', {
        body: { action: 'download' }
      })

      if (error) {
        throw error
      }

      // Create a blob and download
      const blob = new Blob([data.content || data], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Manish_Jangra_CV.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "CV Downloaded",
        description: "Your CV has been downloaded successfully!",
      })

    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download Error",
        description: "There was an error downloading the CV. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex gap-2 w-full">
      {/* Preview CV */}
      <div className="flex-1">
        <CVPreview />
      </div>
      
      {/* Download CV */}
      <Button
        onClick={handleDownload}
        variant="outline"
        size="sm"
        className="flex-1 relative px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden"
        aria-label="Download CV"
      >
        <div className="flex items-center justify-center space-x-2">
          <Download className="w-4 h-4 text-primary group-hover:animate-bounce" />
          <span className="text-sm font-medium text-foreground">Download</span>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </Button>
    </div>
  )
}