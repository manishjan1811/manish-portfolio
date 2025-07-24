import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { useState, useEffect } from "react"

export function CVPreview() {
  const { toast } = useToast()
  const [cvContent, setCvContent] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const loadCVContent = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.functions.invoke('cv-handler', {
        body: { action: 'preview' }
      })

      if (error) throw error
      
      if (data?.content) {
        setCvContent(data.content)
      }
    } catch (error) {
      console.error('Error loading CV:', error)
      // Fallback content if backend fails
      setCvContent("CV content loading...")
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      toast({
        title: "Downloading CV...",
        description: "Your CV download will start shortly.",
      })

      const { data, error } = await supabase.functions.invoke('cv-handler', {
        body: { action: 'download' }
      })

      if (error) throw error

      // Create download
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
        description: "There was an error downloading the CV.",
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
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Manish Jangra - CV Preview</span>
            <Button
              onClick={handleDownload}
              size="sm" 
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto pr-2 max-h-[calc(90vh-100px)]">
          {/* Load CV content when dialog opens */}
          <div className="bg-background p-8 space-y-6 text-sm">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="mt-2 text-muted-foreground">Loading CV...</p>
              </div>
            ) : cvContent ? (
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {cvContent}
              </pre>
            ) : (
              <div onClick={loadCVContent} className="cursor-pointer text-center py-8 hover:bg-muted/20 rounded-lg transition-colors">
                <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold mb-2">Click to Load CV Preview</p>
                <p className="text-muted-foreground">View the complete CV content</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}