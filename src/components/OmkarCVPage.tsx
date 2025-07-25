import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Calendar, 
  Building, 
  Shield, 
  Users, 
  Award, 
  Code, 
  Globe, 
  Database,
  Server,
  Lock,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface OmkarCVPageProps {
  className?: string;
}

const OmkarCVPage: React.FC<OmkarCVPageProps> = ({ className = "" }) => {
  const { toast } = useToast();

  const handleExportPDF = async () => {
    try {
      console.log('=== PDF Export Process Started ===');
      
      toast({
        title: "Preparing your CV",
        description: "Generating high-quality PDF with all colors and textures...",
      });

      console.log('Starting CV export process...');

      // Create URL with query parameters
      const baseUrl = 'https://suynbvqdtzuwxqrrgrgn.supabase.co/functions/v1/cv-handler';
      const params = new URLSearchParams({
        action: 'download',
        type: 'omkar'
      });
      const functionUrl = `${baseUrl}?${params}`;
      
      console.log('Calling function URL:', functionUrl);

      const response = await fetch(functionUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eW5idnFkdHp1d3hxcnJncmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzA1MjgsImV4cCI6MjA2ODkwNjUyOH0.bBbH0Cc-4Y0FTFnkno6SNIGjggvSj_9S5S7D_Fo_4uw`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      // Get the content type to determine how to handle the response
      const contentType = response.headers.get('content-type');
      console.log('Content type:', contentType);

      if (contentType?.includes('application/pdf')) {
        // Handle PDF response
        const blob = await response.blob();
        console.log('PDF blob size:', blob.size);
        
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Omkar_Singh_CV.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        toast({
          title: "CV Downloaded Successfully!",
          description: "Your high-resolution CV with all colors and textures has been downloaded.",
        });
      } else if (contentType?.includes('text/plain')) {
        // Handle text response (fallback)
        const textContent = await response.text();
        console.log('Text content length:', textContent.length);
        
        const blob = new Blob([textContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Omkar_Singh_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        toast({
          title: "CV Downloaded (Text Format)",
          description: "CV downloaded in text format. PDF generation is being set up.",
        });
      } else {
        // Handle JSON response (might contain error or data)
        const jsonData = await response.json();
        console.log('JSON response:', jsonData);
        
        if (jsonData.error) {
          throw new Error(jsonData.error);
        }
        
        toast({
          title: "Download Initiated",
          description: jsonData.message || "CV download process started.",
        });
      }

    } catch (error: any) {
      console.error('Error exporting CV:', error);
      
      // Fallback: Use browser print dialog as PDF export
      console.log('Attempting fallback: browser print dialog...');
      
      toast({
        title: "Using Alternative Method",
        description: "Opening print dialog. Please select 'Save as PDF' from the destination options.",
        duration: 5000,
      });
      
      // Small delay to let the toast show, then trigger print
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  };

  return (
    <div className={`max-w-5xl mx-auto bg-white text-gray-900 shadow-2xl print:shadow-none print:max-w-none ${className}`}>
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                OMKAR SINGH
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-medium mb-6">
                Cyber Security Specialist
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span>44-B Chander Vihar New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-300" />
                  <span>omkarsingh9655@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span>+91 9625547807</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-300" />
                  <span>linkedin.com/in/omkar-singh10</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Export Button */}
              <Button 
                onClick={handleExportPDF}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 print:hidden"
                variant="outline"
              >
                <Download className="w-5 h-5" />
                Export PDF
              </Button>
              
              {/* Profile Circle */}
              <div className="hidden md:block relative">
                <div className="w-36 h-36 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-600/50 rounded-full blur-md scale-110 opacity-50"></div>
                  {/* Inner highlight */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                  {/* Content area for initials */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white tracking-wider">OS</span>
                  </div>
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-white/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                SUMMARY
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  CEH-certified Cybersecurity Professional with over 2 years of hands-on experience in Vulnerability Assessment and Penetration
                  Testing (VAPT) across web applications, mobile platforms, APIs, and infrastructure. Skilled in identifying and exploiting security
                  vulnerabilities through real-world attack simulations. Certified in CRTP (Certified Red Team Professional) and CRTA (Certified Red
                  Team Analyst), with a strong focus on offensive security techniques, Active Directory exploitation, and post-exploitation tactics.
                  Proven ability to deliver comprehensive, actionable security reports that support regulatory compliance, enhance risk management,
                  and improve overall security posture.
                </p>
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-6">
                {/* Current Role */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">VAPT Security Consultant</h3>
                      <p className="text-blue-600 font-medium">Digital Track Solutions Private Limited</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">August 2024 – Present</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Successfully led and executed a comprehensive Vulnerability Assessment and Penetration Testing (VAPT) project for the Tamil Nadu e-Governance Agency (TNeGA), identifying and mitigating critical vulnerabilities across complex IT infrastructure, significantly enhancing overall security and operational resilience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Performed in-depth Web Application, API, and Mobile Application Security Testing for TNeGA, uncovering potential exploit vectors and reinforcing their systems against sophisticated cyber threats.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delivered a thorough and actionable VAPT assessment for Muthoot Housing Finance, addressing critical security gaps and providing strategic, risk-based remediation recommendations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ensured all assessments adhered to industry-recognized security standards (OWASP, NIST, etc.), supporting clients in maintaining compliance and scalable, future-ready security postures.</span>
                    </li>
                  </ul>
                </div>

                {/* Previous Role */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Cybersecurity Analyst</h3>
                      <p className="text-blue-600 font-medium">Infocus It Solutions Private Limited</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">2023–2024</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducted end-to-end Vulnerability Assessment and Penetration Testing (VAPT) for Hitachi's Web Applications, REST APIs, and Network Infrastructure in alignment with OWASP Top 10 and SANS 25 standards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Identified and exploited critical vulnerabilities including authentication bypass, improper input validation, and insecure API endpoints, helping strengthen overall security posture.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Performed deep packet inspection, port scanning, and configuration auditing on Hitachi's internal and external-facing network components.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Prepared and delivered comprehensive VAPT reports with actionable remediation steps, directly contributing to enhanced compliance and risk mitigation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with development and IT teams to verify patching and validate fixes through re-testing activities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                PROJECTS
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">PhillipCapital (India) Private Limited</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Web Application VAPT</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">API Security Testing</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Network Penetration Testing</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conducted comprehensive Web and API Vulnerability Assessments, identifying critical flaws and delivering precise remediation strategies to mitigate exploitation risks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strengthened the organization's security posture by aligning findings with OWASP Top 10 and CWE standards, ensuring actionable and compliant security recommendations.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Muthoot Housing Finance Company Limited</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Web Application VAPT</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">API Security Testing</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Network Penetration Testing</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Executed full-scope Vulnerability Assessment and Penetration Testing (VAPT) covering web applications, APIs, and internal network architecture.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mapped vulnerabilities to industry standards such as OWASP, SANS, and NIST, helping the organization bolster compliance and governance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                SKILLS
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Penetration Testing
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Web Application Pentesting</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">API Pentesting</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">OWASP Top 10</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Secure Code Review</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Network Pentesting</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Python Scripting</span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-green-600" />
                    Web Application Testing Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Burp Suite Professional</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Nikto</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Dirbuster</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ffuf</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Nuclei</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">OWASP Zap</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">WpScan</span>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Server className="w-5 h-5 text-purple-600" />
                    Infrastructure & Network Testing Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Nmap</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Metasploit</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Nessus</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Kali Linux OS</span>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-red-600" />
                    Red Teaming Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Hashcat</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Mimikatz</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Windows Privesc</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Linux Privesc</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Linpeas</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Winpeas</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                EDUCATION
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Graduate from Delhi University (DU)</h3>
                <p className="text-gray-600">2020-2023</p>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <Award className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">C|EH Certified Ethical Hacker</h3>
                    <p className="text-sm text-gray-600">EC Council</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <Award className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CRTP</h3>
                    <p className="text-sm text-gray-600">Certified Red Team Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <Award className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CRTA</h3>
                    <p className="text-sm text-gray-600">Certified Red Team Analyst</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages & Interests */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                ADDITIONAL INFORMATION
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Hindi</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Punjabi</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Capture the Flag (CTF)</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Threat Hunting</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Reading Books</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-8 py-4 text-center text-gray-600 text-sm border-t">
        <p>CV generated on {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>
    </div>
  );
};

export default OmkarCVPage;