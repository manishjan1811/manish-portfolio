import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Eye, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CVPreview() {
  const { toast } = useToast()

  const handleDownload = () => {
    toast({
      title: "CV Download",
      description: "CV download feature coming soon! Contact me directly for my resume.",
    })
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
              Download PDF
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto pr-2 max-h-[calc(90vh-100px)]">
          {/* CV Content */}
          <div className="bg-background p-8 space-y-6 text-sm">
            
            {/* Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-primary mb-2">MANISH JANGRA</h1>
              <p className="text-lg text-muted-foreground mb-4">Web Application Pentester & Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>manish.jangra@email.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">PROFESSIONAL SUMMARY</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elite cybersecurity specialist with 6+ months of advanced penetration testing experience. 
                Certified in CEH (Certified Ethical Hacker), CRTA (Certified Red Team Analyst), and BSCP 
                (Burp Suite Certified Practitioner). Proven expertise in web application security assessment, 
                vulnerability research, and secure development practices.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">CERTIFICATIONS</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Certified Ethical Hacker (CEH)</span>
                  <span className="text-muted-foreground">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Certified Red Team Analyst (CRTA)</span>
                  <span className="text-muted-foreground">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Burp Suite Certified Practitioner (BSCP)</span>
                  <span className="text-muted-foreground">2024</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">EXPERIENCE</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Web Application Penetration Tester</h3>
                      <p className="text-muted-foreground">Freelance / Security Research</p>
                    </div>
                    <span className="text-muted-foreground text-sm">6+ Months</span>
                  </div>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Conducted comprehensive security assessments on web applications</li>
                    <li>• Identified and documented critical vulnerabilities including OWASP Top 10</li>
                    <li>• Performed manual and automated penetration testing</li>
                    <li>• Created detailed security reports with remediation strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">TECHNICAL SKILLS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Security Tools</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Burp Suite Professional</li>
                    <li>• OWASP ZAP</li>
                    <li>• Nmap</li>
                    <li>• Metasploit</li>
                    <li>• Wireshark</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Development</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• JavaScript/TypeScript</li>
                    <li>• React.js</li>
                    <li>• Node.js</li>
                    <li>• Python</li>
                    <li>• SQL</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">KEY PROJECTS</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Portfolio Website Security Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive security assessment of personal portfolio with vulnerability research and secure development practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Web Application Vulnerability Research</h3>
                  <p className="text-muted-foreground text-sm">
                    Ongoing research in web application security, focusing on emerging threats and zero-day vulnerabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">LANGUAGES</h2>
              <div className="flex gap-6">
                <div>
                  <span className="font-semibold">English</span>
                  <span className="text-muted-foreground ml-2">Professional</span>
                </div>
                <div>
                  <span className="font-semibold">Hindi</span>
                  <span className="text-muted-foreground ml-2">Native</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}