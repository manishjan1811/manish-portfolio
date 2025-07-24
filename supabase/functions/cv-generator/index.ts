import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const CVPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manish Jangra - CV</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: 'rgb(59 130 246)',
                        secondary: 'rgb(107 114 128)',
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        .glassmorphism {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #ffffff, #93c5fd, #67e8f9);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="bg-white text-black">
    <div class="max-w-4xl mx-auto" id="cv-page">
        <!-- Header Section -->
        <div class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[300px]">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl transform -translate-y-48 translate-x-48"></div>
                <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500 opacity-10 rounded-full blur-3xl transform translate-y-40 -translate-x-40"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent"></div>
            </div>
            
            <!-- Glassmorphism Container -->
            <div class="relative z-10 glassmorphism mx-6 my-6 rounded-2xl">
                <div class="p-8">
                    <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                        
                        <!-- Profile Photo -->
                        <div class="relative">
                            <div class="w-36 h-36 glassmorphism rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                                MJ
                            </div>
                            <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white/20 shadow-lg"></div>
                        </div>
                        
                        <!-- Header Info -->
                        <div class="flex-1 text-center md:text-left space-y-4">
                            <div>
                                <h1 class="text-5xl font-bold mb-2 tracking-tight gradient-text">
                                    MANISH JANGRA
                                </h1>
                                <p class="text-xl text-blue-200 font-medium">
                                    Web Application Pentester & Developer
                                </p>
                            </div>
                            
                            <!-- Contact Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div class="flex items-center justify-center md:justify-start gap-2 glassmorphism rounded-lg p-2">
                                    <span class="text-xs text-white/90">📧 manishjangra1811@gmail.com</span>
                                </div>
                                <div class="flex items-center justify-center md:justify-start gap-2 glassmorphism rounded-lg p-2">
                                    <span class="text-xs text-white/90">📱 +91 9350545502</span>
                                </div>
                                <div class="flex items-center justify-center md:justify-start gap-2 glassmorphism rounded-lg p-2">
                                    <span class="text-xs text-white/90">📍 Gurgaon, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="p-8 space-y-8">
            
            <!-- Professional Summary -->
            <section>
                <h2 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                    PROFESSIONAL SUMMARY
                </h2>
                <p class="text-gray-700 leading-relaxed text-justify">
                    Elite cybersecurity specialist with <strong>6+ months</strong> of advanced penetration testing experience. 
                    Certified in <strong>CEH (Certified Ethical Hacker)</strong>, <strong>CRTA (Certified Red Team Analyst)</strong>, 
                    and <strong>BSCP (Burp Suite Certified Practitioner)</strong>. Proven expertise in web application security 
                    assessment, vulnerability research, and secure development practices. Passionate about identifying and 
                    mitigating security vulnerabilities to protect digital assets.
                </p>
            </section>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left Column -->
                <div class="lg:col-span-2 space-y-8">
                    
                    <!-- Experience -->
                    <section>
                        <h2 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            PROFESSIONAL EXPERIENCE
                        </h2>
                        <div class="space-y-8">
                            
                            <!-- Current Role -->
                            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h3 class="text-xl font-bold text-slate-800">Cyber Security Trainer</h3>
                                    <span class="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">Ongoing</span>
                                </div>
                                <p class="text-blue-700 font-semibold mb-4">Cywer Learning | Corporate Training</p>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-start gap-3">
                                        <span class="text-blue-500 mt-0.5">🎓</span>
                                        <span><strong>Designed advanced security training modules</strong> for professionals and organizations focusing on practical penetration testing skills</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-purple-500 mt-0.5">👥</span>
                                        <span><strong>Mentored junior security professionals</strong> in vulnerability assessment and penetration testing methodologies</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-orange-500 mt-0.5">🎯</span>
                                        <span><strong>Delivered cybersecurity training sessions</strong> and workshops for corporate clients</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Additional Experience -->
                            <div class="border-l-4 border-gray-400 pl-6">
                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 class="text-lg font-semibold text-slate-800">Security Researcher & Tool Developer</h3>
                                    <span class="text-sm text-gray-600 font-medium">6+ Months</span>
                                </div>
                                <p class="text-gray-600 font-medium mb-3">Independent Research | 2024</p>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-500 mt-1">•</span>
                                        <span>Conducted advanced penetration testing with 6+ months of experience</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-500 mt-1">•</span>
                                        <span>Developed custom security tools - Reconbro.sh and Toolsbro.sh for automation</span>
                                    </li>
                                    <li class="flex items-start gap-2">
                                        <span class="text-gray-500 mt-1">•</span>
                                        <span>Specialized in identifying logic-based and business logic flaws in web applications</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Projects -->
                    <section>
                        <h2 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
                            KEY PROJECTS & ACHIEVEMENTS
                        </h2>
                        <div class="space-y-6">
                            
                            <!-- Featured Project - Epic Games -->
                            <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-sm">
                                <div class="flex items-start justify-between mb-3">
                                    <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                                        🐛 Epic Games 2FA Bypass Discovery
                                    </h3>
                                    <span class="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">Critical CVE</span>
                                </div>
                                <p class="text-gray-700 mb-4 leading-relaxed">
                                    Discovered and responsibly disclosed a critical two-factor authentication bypass vulnerability in Epic Games platform. 
                                    Demonstrates expertise in authentication security and business logic flaw identification through security research.
                                </p>
                                <div class="grid grid-cols-3 gap-4 mb-4">
                                    <div class="text-center p-3 bg-white rounded-lg">
                                        <div class="font-bold text-red-600 text-xl">Critical</div>
                                        <div class="text-xs text-gray-600">Severity Level</div>
                                    </div>
                                    <div class="text-center p-3 bg-white rounded-lg">
                                        <div class="font-bold text-green-600 text-xl">2FA</div>
                                        <div class="text-xs text-gray-600">Bypass Found</div>
                                    </div>
                                    <div class="text-center p-3 bg-white rounded-lg">
                                        <div class="font-bold text-blue-600 text-xl">Public</div>
                                        <div class="text-xs text-gray-600">Program</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Projects Grid -->
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <!-- Reconbro.sh -->
                                <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                    <h3 class="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                        🔍 Reconbro.sh
                                    </h3>
                                    <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                                        Advanced reconnaissance automation tool built in bash script. Designed for beginners in web pentesting 
                                        with powerful yet easy-to-use reconnaissance capabilities.
                                    </p>
                                    <div class="flex flex-wrap gap-1 mb-3">
                                        <span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Bash</span>
                                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Automation</span>
                                        <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Reconnaissance</span>
                                    </div>
                                </div>

                                <!-- Toolsbro.sh -->
                                <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                    <h3 class="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                        ⬇️ Toolsbro.sh
                                    </h3>
                                    <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                                        One-click installer for essential web pentesting tools. Streamlines setup process for security 
                                        professionals by automating tool installation and configuration.
                                    </p>
                                    <div class="flex flex-wrap gap-1 mb-3">
                                        <span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Bash</span>
                                        <span class="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">Automation</span>
                                        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tool Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <!-- Right Column -->
                <div class="space-y-8">
                    
                    <!-- Certifications -->
                    <section>
                        <h2 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                            CERTIFICATIONS
                        </h2>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <span class="text-blue-500 mt-1">🏆</span>
                                <div>
                                    <h3 class="font-semibold text-slate-800">Certified Ethical Hacker (CEH)</h3>
                                    <p class="text-sm text-gray-600">EC-Council • 2025</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-red-500 mt-1">🏆</span>
                                <div>
                                    <h3 class="font-semibold text-slate-800">Certified Red Team Analyst (CRTA)</h3>
                                    <p class="text-sm text-gray-600">Zero Point Security • 2025</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-orange-500 mt-1">🏆</span>
                                <div>
                                    <h3 class="font-semibold text-slate-800">Burp Suite Certified Practitioner (BSCP)</h3>
                                    <p class="text-sm text-gray-600">PortSwigger • 2025</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Technical Skills -->
                    <section>
                        <h2 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                            TECHNICAL SKILLS
                        </h2>
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    🛡️ Security & Penetration Testing
                                </h3>
                                <div class="flex flex-wrap gap-1">
                                    <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Web App Pentesting</span>
                                    <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Burp Suite</span>
                                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">OWASP Top 10</span>
                                    <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Vulnerability Assessment</span>
                                </div>
                            </div>
                            
                            <div>
                                <h3 class="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    💻 Programming & Development
                                </h3>
                                <div class="flex flex-wrap gap-1">
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JavaScript</span>
                                    <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Python</span>
                                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Bash</span>
                                    <span class="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">React</span>
                                </div>
                            </div>
                            
                            <div>
                                <h3 class="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    🔧 Tools & Technologies
                                </h3>
                                <div class="flex flex-wrap gap-1">
                                    <span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Nmap</span>
                                    <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Metasploit</span>
                                    <span class="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Wireshark</span>
                                    <span class="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded">Git</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Languages -->
                    <section>
                        <h2 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
                            LANGUAGES
                        </h2>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">English</span>
                                <span class="text-sm text-blue-600 font-medium">Professional</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Hindi</span>
                                <span class="text-sm text-blue-600 font-medium">Native</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="text-center py-4 text-sm text-gray-500 border-t">
            CV generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </footer>
    </div>
</body>
</html>
`

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('CV Generator function called')
    
    // For now, return the HTML response
    // In the future, we can use Puppeteer or similar to convert to PDF
    return new Response(CVPageHTML, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
      },
    })
    
  } catch (error) {
    console.error('Error in CV generator:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate CV' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  }
})