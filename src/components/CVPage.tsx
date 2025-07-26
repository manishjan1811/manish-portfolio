import { Mail, Phone, MapPin, Calendar, Award, Code, Shield, Globe, Database, Terminal, ExternalLink, Bug, Search, Download, GraduationCap, Users, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CVPageProps {
  className?: string
}

export function CVPage({ className = "" }: CVPageProps) {
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
        type: 'manish'
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
        a.download = 'Manish_Jangra_CV.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        toast({
          title: "PDF Downloaded Successfully!",
          description: "Your high-resolution CV PDF has been downloaded.",
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
        duration: 5000,
      });
      
      // Small delay to let the toast show, then trigger print
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  };

  return (
    <div className={`bg-white text-black max-w-4xl mx-auto ${className}`} id="cv-page">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95 backdrop-blur-xl">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent"></div>
        </div>
        
        {/* Glassmorphism Container */}
        <div className="relative z-10 bg-white/[0.05] backdrop-blur-sm border border-white/10 mx-4 md:mx-6 my-6 rounded-2xl">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold border border-white/20 shadow-2xl">
                  MJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white/20 shadow-lg"></div>
              </div>
              
              {/* Header Info */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    MANISH JANGRA
                  </h1>
                  <p className="text-lg md:text-xl text-blue-200/90 font-medium">
                    Web Application Pentester & Developer
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
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
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
      <div className="p-6 md:p-8 space-y-8">
        
        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Elite cybersecurity specialist with <strong>6+ months</strong> of advanced penetration testing experience. 
            Certified in <strong>CEH (Certified Ethical Hacker)</strong>, <strong>CRTA (Certified Red Team Analyst)</strong>, 
            and <strong>BSCP (Burp Suite Certified Practitioner)</strong>. Proven expertise in web application security 
            assessment, vulnerability research, and secure development practices. Passionate about identifying and 
            mitigating security vulnerabilities to protect digital assets.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-8">
                
                {/* Current Role */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800">Cyber Security Trainer</h3>
                    <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">Ongoing</span>
                  </div>
                  <p className="text-blue-700 font-semibold mb-4">Cywer Learning | Corporate Training</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Designed advanced security training modules</strong> for professionals and organizations focusing on practical penetration testing skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Mentored junior security professionals</strong> in vulnerability assessment and penetration testing methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Delivered cybersecurity training sessions</strong> and workshops for corporate clients</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Experience */}
                <div className="border-l-4 border-gray-400 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">Security Researcher & Tool Developer</h3>
                    <span className="text-sm text-gray-600 font-medium">6+ Months</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-3">Independent Research | 2024</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Conducted advanced penetration testing with 6+ months of experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Developed custom security tools - Reconbro.sh and Toolsbro.sh for automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Specialized in identifying logic-based and business logic flaws in web applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                KEY PROJECTS & ACHIEVEMENTS
              </h2>
              <div className="space-y-6">
                
                {/* Featured Project - Epic Games */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <Bug className="w-5 h-5 text-red-600" />
                      Epic Games 2FA Bypass Discovery
                    </h3>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Critical CVE</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Discovered and responsibly disclosed a critical two-factor authentication bypass vulnerability in Epic Games platform. 
                    Demonstrates expertise in authentication security and business logic flaw identification through security research.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-bold text-red-600 text-xl">Critical</div>
                      <div className="text-xs text-gray-600">Severity Level</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-bold text-green-600 text-xl">2FA</div>
                      <div className="text-xs text-gray-600">Bypass Found</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-bold text-blue-600 text-xl">Public</div>
                      <div className="text-xs text-gray-600">Program</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Authentication</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">Business Logic</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">Security Research</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Responsible Disclosure</span>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Reconbro.sh */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-600" />
                      Reconbro.sh - Advanced Recon Automation
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Enterprise-grade reconnaissance automation framework designed specifically for web application security testing. 
                      Features intelligent subdomain discovery, comprehensive port scanning, and automated vulnerability detection with 
                      multi-threaded execution for maximum efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">Bash Scripting</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Security Automation</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">OSINT</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">Multi-threading</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> Passive & active reconnaissance, subdomain enumeration with 15+ sources, 
                      intelligent port scanning, directory bruteforcing, technology detection, automated report generation
                    </div>
                  </div>

                  {/* Toolsbro.sh */}
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Download className="w-5 h-5 text-emerald-600" />
                      Toolsbro.sh - Security Tools Manager
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Comprehensive security tools management system that automates installation, configuration, and updates 
                      of 50+ essential penetration testing tools. Features intelligent dependency resolution, version control, 
                      and automated environment setup for Kali Linux and Ubuntu systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">DevOps</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-medium">Package Management</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">System Administration</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">CI/CD</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> 50+ tools support, dependency auto-resolution, version management, 
                      backup/restore functionality, custom tool integration, progress tracking with colored output
                    </div>
                  </div>

                  {/* CheapOTT Store */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-orange-600" />
                      CheapOTT Store - E-commerce Platform
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Full-featured e-commerce platform specializing in digital streaming service subscriptions. Built with 
                      responsive design principles, featuring advanced product filtering, secure payment integration mockups, 
                      user account management, and comprehensive admin dashboard for inventory management.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">HTML5/CSS3</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Responsive Design</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">JavaScript ES6+</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Bootstrap</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> Mobile-first design, product catalog with filtering, shopping cart functionality, 
                      user authentication UI, payment gateway integration, SEO-optimized structure, admin panel interface
                    </div>
                  </div>

                  {/* Trade Flow Universe */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      Trade Flow Universe - Crypto Trading Interface
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Professional cryptocurrency trading platform frontend featuring real-time market data visualization, 
                      advanced charting with technical indicators, portfolio management dashboard, and sophisticated trading 
                      interface. Built with modern React patterns and TypeScript for type safety and maintainability.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">React 18</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">TypeScript</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Chart.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">Material-UI</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> Real-time charts, technical analysis tools, portfolio tracking, 
                      order book visualization, price alerts system, dark/light theme, responsive trading interface
                    </div>
                  </div>

                  {/* Additional Project 1 */}
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-600" />
                      Security Assessment Framework
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Custom web application security assessment framework combining automated scanning with manual testing 
                      methodologies. Features vulnerability classification, risk scoring, and comprehensive reporting system 
                      for professional penetration testing engagements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Python</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">Security Testing</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">OWASP</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> Automated vulnerability scanning, manual testing integration, 
                      detailed reporting, risk assessment, compliance checking
                    </div>
                  </div>

                  {/* Additional Project 2 */}
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-teal-600" />
                      Bug Bounty Automation Suite
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      Comprehensive automation suite for bug bounty hunting activities including target reconnaissance, 
                      vulnerability scanning, and result correlation. Integrates with multiple bug bounty platforms 
                      and provides automated monitoring for new targets and scope changes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full font-medium">Python</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full font-medium">API Integration</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">Bug Bounty</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white/70 p-3 rounded-lg">
                      <strong>Key Features:</strong> Multi-platform integration, automated target monitoring, 
                      vulnerability correlation, notification system, reporting automation
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                CERTIFICATIONS
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Certified Ethical Hacker (CEH)</h3>
                    <p className="text-sm text-gray-600">EC-Council • 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Certified Red Team Analyst (CRTA)</h3>
                    <p className="text-sm text-gray-600">Zero Point Security • 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Burp Suite Certified Practitioner (BSCP)</h3>
                    <p className="text-sm text-gray-600">PortSwigger • 2025</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500" />
                    Security Tools
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "Wireshark", "Nessus"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-green-500" />
                    Programming
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "React"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {["OWASP Top 10", "NIST", "PTES", "OSSTMM"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                LANGUAGES
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">English</span>
                  <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">Native</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Hindi</span>
                  <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">Professional</span>
                </div>
              </div>
            </section>

          </div>
        </div>


      </div>
    </div>
  )
}