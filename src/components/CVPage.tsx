import { Mail, Phone, MapPin, Calendar, Award, Code, Shield, Globe, Database, Terminal, ExternalLink, Bug, Search, Download, GraduationCap, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { GitHubProjects } from "./GitHubProjects";
interface CVPageProps {
  className?: string;
}
export function CVPage({
  className = ""
}: CVPageProps) {
  const {
    toast
  } = useToast();
  const handleExportPDF = async () => {
    try {
      console.log('=== PDF Export Process Started ===');
      toast({
        title: "Preparing your CV",
        description: "Generating high-quality PDF with all colors and textures..."
      });
      console.log('Starting CV export process...');

      // Create URL with query parameters
      const baseUrl = 'https://suynbvqdtzuwxqrrgrgn.supabase.co/functions/v1/cv-handler';
      const params = new URLSearchParams({
        action: 'download',
        type: 'manish'
      });
      const functionUrl = `${baseUrl}?${params}`;
      console.log('Calling function URL:', functionUrl);
      const response = await fetch(functionUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eW5idnFkdHp1d3hxcnJncmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzA1MjgsImV4cCI6MjA2ODkwNjUyOH0.bBbH0Cc-4Y0FTFnkno6SNIGjggvSj_9S5S7D_Fo_4uw`,
          'Content-Type': 'application/json'
        }
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
        a.download = 'Manish_Jangra_CV.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        toast({
          title: "PDF Downloaded Successfully!",
          description: "Your high-resolution CV PDF has been downloaded."
        });
      } else {
        // If not PDF, there's an issue - show error
        const responseText = await response.text();
        console.error('Expected PDF but got:', contentType, responseText);
        throw new Error('PDF generation failed. Expected PDF file but received different format.');
      }
    } catch (error: any) {
      console.error('Error exporting CV:', error);

      // Fallback: Use browser print dialog as PDF export
      console.log('Attempting fallback: browser print dialog...');
      toast({
        title: "Using Alternative Method",
        description: "Opening print dialog. Please select 'Save as PDF' from the destination options.",
        duration: 5000
      });

      // Small delay to let the toast show, then trigger print
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  };
  return <div className={`bg-white text-black max-w-4xl mx-auto ${className}`} id="cv-page">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95 backdrop-blur-xl">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-36 translate-x-36 md:-translate-y-48 md:translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-3xl translate-y-30 -translate-x-30 md:translate-y-40 md:-translate-x-40"></div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl"></div>
        </div>
        
        {/* Glassmorphism Container */}
        <div className="relative z-10 bg-white/[0.05] backdrop-blur-sm border border-white/10 mx-2 md:mx-6 my-3 md:my-6 rounded-xl md:rounded-2xl">
          <div className="p-4 md:p-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
              
              {/* Profile Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl md:text-5xl font-bold border border-white/20 shadow-2xl">
                  MJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 bg-emerald-500 rounded-full border-2 border-white/20 shadow-lg"></div>
              </div>
              
              {/* Header Info */}
              <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4 w-full">
                <div>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    MANISH JANGRA
                  </h1>
                   <p className="text-base md:text-xl text-blue-200/90 font-medium">
                     Security Analyst & Risk Assessment Specialist
                   </p>
                </div>
                
                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                    <Mail className="w-3 h-3 text-blue-300 flex-shrink-0" />
                    <span className="text-xs text-white/90 truncate">manishjangra1811@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                    <Phone className="w-3 h-3 text-emerald-300 flex-shrink-0" />
                    <span className="text-xs text-white/90">+91 9350545502</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                    <MapPin className="w-3 h-3 text-purple-300 flex-shrink-0" />
                    <span className="text-xs text-white/90">Gurgaon, India</span>
                  </div>
                </div>
                
                {/* Export PDF Button */}
                <div className="flex justify-center md:justify-start mt-4 print:hidden">
                  <button onClick={handleExportPDF} className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base">
                    <Download className="w-4 h-4" />
                    Export as PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        
        {/* Professional Summary */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
           <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
              <strong>Cybersecurity professional</strong> with hands-on experience in finding and fixing <strong>security vulnerabilities</strong>. 
              I specialize in <strong>security assessments</strong>, <strong>risk management</strong>, and helping organizations protect their digital assets. 
              Skilled in using industry-standard security frameworks like <strong>NIST</strong> and <strong>ISO 27001</strong> to improve security practices. 
              I enjoy building <strong>security tools</strong> and conducting <strong>penetration testing</strong> to make systems safer and more secure.
            </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Experience */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 border-b-2 border-blue-500 pb-2">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-6 md:space-y-8">
                
                 {/* Core Tools & Technologies */}
                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500">
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                     <h3 className="text-lg md:text-xl font-bold text-slate-800">Security Assessment Tools & Frameworks</h3>
                     <span className="text-xs md:text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full mt-2 sm:mt-0">Active</span>
                   </div>
                   <p className="text-blue-700 font-semibold mb-3 md:mb-4 text-sm md:text-base">Specialized Security Analysis Toolkit</p>
                   
                   {/* Security Tools Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <div className="bg-white/50 p-3 rounded-lg border border-blue-200">
                       <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                         <Bug className="w-4 h-4 text-red-500" />
                         Vulnerability Assessment Tools
                       </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Nessus (Vulnerability Scanning)</li>
                          <li>• OpenVAS (Security Scanner)</li>
                          <li>• Nmap (Network Scanning)</li>
                          <li>• Dirb/Gobuster (Directory Fuzzing)</li>
                        </ul>
                     </div>
                     
                     <div className="bg-white/50 p-3 rounded-lg border border-blue-200">
                       <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                         <Shield className="w-4 h-4 text-green-500" />
                         OWASP Testing Tools
                       </h4>
                       <ul className="text-xs text-gray-700 space-y-1">
                         <li>• OWASP ZAP (Web Application Scanner)</li>
                         <li>• Burp Suite Professional (Penetration Testing)</li>
                         <li>• OWASP Dependency-Check (SCA)</li>
                         <li>• Nikto (Web Server Scanner)</li>
                       </ul>
                     </div>
                     
                      <div className="bg-white/50 p-3 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-purple-500" />
                          Risk Management
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Finding security problems before hackers do</li>
                          <li>• Checking how safe systems are</li>
                          <li>• Making plans to fix security issues</li>
                          <li>• Helping teams understand security risks</li>
                        </ul>
                      </div>
                     
                      <div className="bg-white/50 p-3 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-orange-500" />
                          Custom Security Tools
                        </h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• BugBro (AI-assisted Bug Hunting Tool)</li>
                          <li>• ToolsBro (Security Assessment Utilities)</li>
                          <li>• Python (Automation Scripts)</li>
                          <li>• Web Development (Frontend/Backend) using AI</li>
                        </ul>
                      </div>
                   </div>
                   
                   {/* Key Project Implementations */}
                   
                 </div>

                {/* Additional Experience */}
                 
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6 border-b-2 border-blue-500 pb-2">
                KEY PROJECTS & ACHIEVEMENTS
              </h2>
              <div className="space-y-4 md:space-y-6">
                
                 {/* Featured Project - Epic Games Bug Discovery */}
                 <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 md:p-6 rounded-lg md:rounded-xl border border-red-200 shadow-sm">
                   <div className="flex items-start justify-between mb-3">
                     <h3 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2">
                       <Bug className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                       Epic Games Bug Discovery
                     </h3>
                     <span className="px-2 md:px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Bug Hunter</span>
                   </div>
                   <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                     Successfully identified and reported a critical security vulnerability in Epic Games' public bug bounty program. 
                     Discovered an account creation bypass that circumvented both OTP (One-Time Password) and 2FA (Two-Factor Authentication) 
                     security mechanisms, demonstrating practical application of OWASP Top 10 methodologies and authentication testing techniques.
                   </p>
                   <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
                     <div className="text-center p-2 md:p-3 bg-white rounded-lg">
                       <div className="font-bold text-red-600 text-lg md:text-xl">1</div>
                       <div className="text-xs text-gray-600">Bug Found</div>
                     </div>
                     <div className="text-center p-2 md:p-3 bg-white rounded-lg">
                       <div className="font-bold text-green-600 text-lg md:text-xl">✓</div>
                       <div className="text-xs text-gray-600">Accepted</div>
                     </div>
                     <div className="text-center p-2 md:p-3 bg-white rounded-lg">
                       <div className="font-bold text-blue-600 text-lg md:text-xl">Public</div>
                       <div className="text-xs text-gray-600">Program</div>
                     </div>
                   </div>
                   <div className="flex flex-wrap gap-1 md:gap-2">
                     <span className="px-2 md:px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Bug Bounty</span>
                     <span className="px-2 md:px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">Epic Games</span>
                     <span className="px-2 md:px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Ethical Hacking</span>
                     <span className="px-2 md:px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">OWASP Top 10</span>
                   </div>
                 </div>

                {/* GitHub Projects Component */}
                <GitHubProjects />
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Certifications */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                CERTIFICATIONS
              </h2>
               <div className="space-y-3 md:space-y-4">
                 <div className="flex items-start gap-2 md:gap-3">
                   <Award className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold text-slate-800 text-sm md:text-base">Certified Ethical Hacker (CEH)</h3>
                     <p className="text-xs md:text-sm text-gray-600">EC-Council • 2025</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-2 md:gap-3">
                   <Award className="w-4 h-4 md:w-5 md:h-5 text-red-500 mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold text-slate-800 text-sm md:text-base">Certified Red Team Analyst (CRTA)</h3>
                     <p className="text-xs md:text-sm text-gray-600">Zero-Point Security • 2025</p>
                   </div>
                 </div>
               </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                TECHNICAL SKILLS
              </h2>
               <div className="space-y-3 md:space-y-4">
                 <div>
                   <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                     <Shield className="w-4 h-4 text-red-500" />
                     OWASP Top 10 Expertise
                   </h3>
                   <div className="flex flex-wrap gap-1">
                     {["Broken Access Control", "Cryptographic Failures", "Injection", "Insecure Design", "Security Misconfiguration", "Vulnerable Components"].map(skill => <span key={skill} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">{skill}</span>)}
                   </div>
                 </div>
               </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                LANGUAGES
              </h2>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center p-2 md:p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-sm md:text-base">English</span>
                  <span className="text-xs md:text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">Native</span>
                </div>
                <div className="flex justify-between items-center p-2 md:p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold text-sm md:text-base">Hindi</span>
                  <span className="text-xs md:text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">Professional</span>
                </div>
              </div>
            </section>

            {/* Achievements & Awards */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                ACHIEVEMENTS
              </h2>
               <div className="space-y-2 md:space-y-3">
                 <div className="p-2 md:p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                   <div className="flex items-start gap-2">
                     <Bug className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="font-semibold text-slate-800 text-xs md:text-sm">Epic Games Vulnerability Discovery</h3>
                       <p className="text-xs text-gray-600">Account creation bypass - OTP & 2FA circumvention</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-2 md:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                   <div className="flex items-start gap-2">
                     <Terminal className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="font-semibold text-slate-800 text-xs md:text-sm">Security Tools Development</h3>
                       <p className="text-xs text-gray-600">Created BugBro & ToolsBro - AI-assisted security utilities</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-2 md:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                   <div className="flex items-start gap-2">
                     <Globe className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="font-semibold text-slate-800 text-xs md:text-sm">Multi-Website Portfolio</h3>
                       <p className="text-xs text-gray-600">Multiple web applications built individually using AI assistance</p>
                     </div>
                   </div>
                 </div>
               </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                EDUCATION
              </h2>
               <div className="space-y-2">
                 <div className="p-2 md:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                   <div className="flex items-start gap-2">
                     <GraduationCap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                     <div>
                       <h3 className="font-semibold text-slate-800 text-sm md:text-base">Diploma in Cyber Security</h3>
                       <p className="text-xs md:text-sm text-blue-700 font-medium">Craw Cyber Security</p>
                       <p className="text-xs text-gray-600 mt-1">Foundation in cybersecurity principles, ethical hacking, and security frameworks</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-2 bg-gray-50 rounded-lg">
                   <h3 className="font-semibold text-slate-800 text-xs md:text-sm">Self-Directed Learning & Implementation</h3>
                   <p className="text-xs text-gray-600">Advanced security frameworks, OWASP methodologies, and practical security assessment tools through hands-on experience and independent research</p>
                 </div>
               </div>
            </section>

            {/* Professional Interests */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 border-b-2 border-blue-500 pb-2">
                INTERESTS
              </h2>
               <div className="grid grid-cols-2 gap-2">
                 <div className="p-2 bg-blue-50 rounded-lg text-center">
                   <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mx-auto mb-1" />
                   <span className="text-xs font-medium text-slate-800">Making Websites</span>
                 </div>
                 <div className="p-2 bg-green-50 rounded-lg text-center">
                   <Bug className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto mb-1" />
                   <span className="text-xs font-medium text-slate-800">Pentest Websites</span>
                 </div>
                 <div className="p-2 bg-purple-50 rounded-lg text-center">
                   <Terminal className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mx-auto mb-1" />
                   <span className="text-xs font-medium text-slate-800 mx-[7px]">Automation Tools</span>
                 </div>
                 <div className="p-2 bg-orange-50 rounded-lg text-center">
                   <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mx-auto mb-1" />
                   <span className="text-xs font-medium text-slate-800">Team Management</span>
                 </div>
               </div>
            </section>

          </div>
        </div>


      </div>
    </div>;
}