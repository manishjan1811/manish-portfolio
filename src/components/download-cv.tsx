import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CVPreview } from "@/components/cv-preview"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export function DownloadCV() {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV download.",
      })

      // Get the CV page element
      const cvElement = document.getElementById('cv-page')
      if (!cvElement) {
        // If CV page not found, create a temporary one
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = `
          <div style="width: 210mm; padding: 20mm; font-family: Arial, sans-serif; background: white; color: black;">
            <h1 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">MANISH JANGRA</h1>
            <h2 style="color: #3b82f6; margin-bottom: 20px;">Web Application Pentester & Developer</h2>
            
            <h3 style="color: #1e293b; border-bottom: 1px solid #3b82f6; padding-bottom: 4px;">PROFESSIONAL SUMMARY</h3>
            <p>Elite cybersecurity specialist with 6+ months of advanced penetration testing experience. Certified in CEH, CRTA, and BSCP.</p>
            
            <h3 style="color: #1e293b; border-bottom: 1px solid #3b82f6; padding-bottom: 4px;">CERTIFICATIONS</h3>
            <ul>
              <li>Certified Ethical Hacker (CEH) - 2024</li>
              <li>Certified Red Team Analyst (CRTA) - 2024</li>
              <li>Burp Suite Certified Practitioner (BSCP) - 2024</li>
            </ul>
            
            <h3 style="color: #1e293b; border-bottom: 1px solid #3b82f6; padding-bottom: 4px;">EXPERIENCE</h3>
            <h4>Web Application Penetration Tester | 6+ Months</h4>
            <ul>
              <li>Conducted comprehensive security assessments on web applications</li>
              <li>Identified and documented critical vulnerabilities including OWASP Top 10</li>
              <li>Performed manual and automated penetration testing</li>
            </ul>
            
            <h3 style="color: #1e293b; border-bottom: 1px solid #3b82f6; padding-bottom: 4px;">TECHNICAL SKILLS</h3>
            <p><strong>Security Tools:</strong> Burp Suite, OWASP ZAP, Nmap, Metasploit, Wireshark</p>
            <p><strong>Programming:</strong> JavaScript, TypeScript, Python, SQL, React</p>
            
            <h3 style="color: #1e293b; border-bottom: 1px solid #3b82f6; padding-bottom: 4px;">CONTACT</h3>
            <p>Email: manish.jangra@email.com | Phone: +91 XXXXX XXXXX | Location: India</p>
          </div>
        `
        document.body.appendChild(tempDiv)
        
        const canvas = await html2canvas(tempDiv.firstElementChild as HTMLElement, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        })
        
        document.body.removeChild(tempDiv)
        
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const imgWidth = 210
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
        pdf.save('Manish_Jangra_CV.pdf')
        
        toast({
          title: "CV Downloaded",
          description: "Your CV has been downloaded successfully!",
        })
        return
      }

      // Convert the CV page to canvas
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight
      })

      // Create PDF
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // Calculate dimensions to fit A4
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      
      // Save the PDF
      pdf.save('Manish_Jangra_CV.pdf')

      toast({
        title: "CV Downloaded",
        description: "Your CV has been downloaded as PDF successfully!",
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