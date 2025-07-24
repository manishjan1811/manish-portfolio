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
                <span>manishjangra1811@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9350545502</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gurgaon, India</span>
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
                    <h3 className="text-xl font-bold text-slate-800">Senior Web Application Penetration Tester</h3>
                    <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">Current</span>
                  </div>
                  <p className="text-blue-700 font-semibold mb-4">Freelance Security Consultant | Jan 2024 - Present</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Led security assessments</strong> for 15+ enterprise web applications, identifying and documenting 200+ vulnerabilities with 95% accuracy rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Specialized in advanced attack vectors</strong> including SQL injection, XSS, CSRF, authentication bypass, and business logic flaws</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Terminal className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Developed custom exploitation tools</strong> and automated security testing scripts using Python and Bash</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Achieved industry certifications</strong> - CEH, CRTA, and BSCP with hands-on practical experience</span>
                    </li>
                  </ul>
                </div>

                {/* Previous Experience */}
                <div className="border-l-4 border-gray-400 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">Junior Security Researcher</h3>
                    <span className="text-sm text-gray-600 font-medium">6 Months</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-3">Independent Research | Jul 2023 - Dec 2023</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Conducted vulnerability research on popular web frameworks and CMS platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Participated in bug bounty programs with successful vulnerability disclosures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Built foundational knowledge in web application security and penetration testing methodologies</span>
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
                
                {/* Featured Project */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Enterprise E-commerce Security Audit
                    </h3>
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Led comprehensive security assessment of a high-traffic e-commerce platform processing 10K+ daily transactions. 
                    Identified critical payment gateway vulnerabilities and session management flaws that could have led to financial losses.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-bold text-red-600 text-xl">47</div>
                      <div className="text-xs text-gray-600">Critical Vulnerabilities</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-bold text-green-600 text-xl">$2M+</div>
                      <div className="text-xs text-gray-600">Potential Loss Prevented</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">SQL Injection</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">Payment Security</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">Session Management</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">OWASP Top 10</span>
                  </div>
                </div>

                {/* Additional Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      Automated Security Scanner
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Developed custom Python-based security scanner for detecting OWASP Top 10 vulnerabilities with 85% accuracy rate. 
                      Reduced manual testing time by 60%.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Automation</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">OWASP</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      Secure Portfolio Development
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Built responsive portfolio with React & TypeScript, implementing security-first development practices and comprehensive security testing.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">TypeScript</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Security</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-600" />
                      API Security Research
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Research project on REST API security vulnerabilities, focusing on authentication flaws and data exposure in modern web APIs.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">API Security</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Research</span>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">REST</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-red-600" />
                      Penetration Testing Lab
                    </h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      Established personal penetration testing lab environment using VirtualBox, Kali Linux, and vulnerable applications for continuous skill development.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Kali Linux</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Penetration Testing</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Lab Setup</span>
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

        {/* Footer */}
        <div className="border-t pt-6 text-center text-gray-600 text-sm">
          <p>This CV was generated on {new Date().toLocaleDateString()}. For the most up-to-date version, please contact directly.</p>
        </div>

      </div>
    </div>
  )
}