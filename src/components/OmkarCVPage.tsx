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
  Lock
} from 'lucide-react';

interface OmkarCVPageProps {
  className?: string;
}

const OmkarCVPage: React.FC<OmkarCVPageProps> = ({ className = "" }) => {
  return (
    <div className={`max-w-5xl mx-auto bg-white text-gray-900 shadow-2xl ${className}`}>
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
            
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-lg flex items-center justify-center">
              <Shield className="w-16 h-16 text-white" />
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