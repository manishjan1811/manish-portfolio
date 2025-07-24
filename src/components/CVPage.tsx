import { Mail, Phone, MapPin, Calendar, Award, Code, Shield, Globe, Database, Terminal, ExternalLink } from "lucide-react"

interface CVPageProps {
  className?: string
}

export function CVPage({ className = "" }: CVPageProps) {
  return (
    <div className={`bg-white text-black max-w-4xl mx-auto ${className}`} id="cv-page">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Photo Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full flex items-center justify-center text-white/70 text-4xl font-bold">
            MJ
          </div>
          
          {/* Header Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              MANISH JANGRA
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">
              Web Application Pentester & Developer
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <span>manish.jangra@email.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>India</span>
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
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">Web Application Penetration Tester</h3>
                    <span className="text-sm text-gray-600 font-medium">6+ Months</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">Freelance / Security Research</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Conducted comprehensive security assessments on web applications using industry-standard methodologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Identified and documented critical vulnerabilities including OWASP Top 10 security risks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Performed manual and automated penetration testing using Burp Suite, OWASP ZAP, and custom tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Created detailed security reports with remediation strategies and risk assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Specialized in SQL injection, XSS, CSRF, and authentication bypass vulnerabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                KEY PROJECTS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-slate-800 mb-2">Portfolio Security Analysis</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Comprehensive security assessment of personal portfolio with vulnerability research and secure development practices.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Security</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-slate-800 mb-2">Vulnerability Research</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Ongoing research in web application security, focusing on emerging threats and zero-day vulnerabilities.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Research</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">CVE</span>
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
                    <p className="text-sm text-gray-600">EC-Council • 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Certified Red Team Analyst (CRTA)</h3>
                    <p className="text-sm text-gray-600">Zero Point Security • 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Burp Suite Certified Practitioner (BSCP)</h3>
                    <p className="text-sm text-gray-600">PortSwigger • 2024</p>
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
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">English</span>
                  <span className="text-sm text-gray-600">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hindi</span>
                  <span className="text-sm text-gray-600">Native</span>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-6 text-center text-gray-600 text-sm">
          <p>This CV was generated on {new Date().toLocaleDateString()}. For the most up-to-date version, please contact directly.</p>
        </div>

      </div>
    </div>
  )
}