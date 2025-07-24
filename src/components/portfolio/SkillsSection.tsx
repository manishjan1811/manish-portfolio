import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Terminal, 
  Network, 
  Bug, 
  Lock, 
  Code, 
  Search,
  Zap
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const skills: Skill[] = [
    { name: "Web Application Security", level: 95, category: "pentesting" },
    { name: "Burp Suite", level: 90, category: "tools" },
    { name: "OWASP Top 10", level: 95, category: "pentesting" },
    { name: "SQL Injection", level: 90, category: "pentesting" },
    { name: "XSS & CSRF", level: 85, category: "pentesting" },
    { name: "Network Security", level: 80, category: "networking" },
    { name: "Bash Scripting", level: 85, category: "programming" },
    { name: "Python", level: 75, category: "programming" },
    { name: "Kali Linux", level: 90, category: "tools" },
    { name: "Nmap", level: 85, category: "tools" },
    { name: "Metasploit", level: 80, category: "tools" },
    { name: "Wireshark", level: 75, category: "networking" }
  ];

  const categories = [
    { 
      name: "Penetration Testing", 
      key: "pentesting", 
      icon: Shield, 
      color: "primary",
      skills: ["Web Application Security", "OWASP Top 10", "SQL Injection", "XSS & CSRF"]
    },
    { 
      name: "Security Tools", 
      key: "tools", 
      icon: Terminal, 
      color: "accent",
      skills: ["Burp Suite", "Kali Linux", "Nmap", "Metasploit"]
    },
    { 
      name: "Programming", 
      key: "programming", 
      icon: Code, 
      color: "cyber-purple",
      skills: ["Bash Scripting", "Python"]
    },
    { 
      name: "Network Security", 
      key: "networking", 
      icon: Network, 
      color: "cyber-orange",
      skills: ["Network Security", "Wireshark"]
    }
  ];

  const securityTools = [
    "Maltego", "Netcat", "Nessus", "Ettercap", "Acunetix", "Vega", 
    "Netsparker", "Hydra", "Rainbow Crack", "John the Ripper", 
    "SQLMap", "Ghauri", "Fuff", "OWASP ZAP"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-6 sm:py-8 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">💼 Skills & Expertise</h2>
          <p className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            Advanced cybersecurity and penetration testing capabilities
          </p>
        </div>

        {/* Mobile: Ultra Compact Design */}
        <div className="block lg:hidden">
          {/* Skill Meters - Circular Progress */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-blue-400">🎯 Core Skills</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Web Security", level: 95, color: "from-blue-400 to-blue-600" },
                { name: "Burp Suite", level: 90, color: "from-green-400 to-green-600" },
                { name: "OWASP", level: 95, color: "from-purple-400 to-purple-600" },
                { name: "SQL Injection", level: 90, color: "from-red-400 to-red-600" },
                { name: "Bash", level: 85, color: "from-yellow-400 to-yellow-600" },
                { name: "Python", level: 75, color: "from-pink-400 to-pink-600" }
              ].map((skill, index) => (
                <div key={skill.name} className="relative text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                        className="text-muted/20"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray={`${inView ? skill.level : 0}, 100`}
                        strokeLinecap="round"
                        className={`bg-gradient-to-r ${skill.color} stroke-current transition-all duration-1000`}
                        style={{ 
                          stroke: `url(#gradient-${index})`,
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={skill.color.includes('blue') ? '#60a5fa' : 
                                                     skill.color.includes('green') ? '#4ade80' :
                                                     skill.color.includes('purple') ? '#a78bfa' :
                                                     skill.color.includes('red') ? '#f87171' :
                                                     skill.color.includes('yellow') ? '#facc15' : '#f472b6'} />
                          <stop offset="100%" stopColor={skill.color.includes('blue') ? '#2563eb' : 
                                                        skill.color.includes('green') ? '#16a34a' :
                                                        skill.color.includes('purple') ? '#7c3aed' :
                                                        skill.color.includes('red') ? '#dc2626' :
                                                        skill.color.includes('yellow') ? '#eab308' : '#db2777'} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-xs font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Mastery - Compact List */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-emerald-400">🛠️ Security Tools</h3>
            <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {["Kali Linux", "Nmap", "Metasploit", "Wireshark", "SQLMap", "Hydra", "John", "Netcat"].map((tool, index) => (
                  <div key={tool} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise Areas - Icon Grid */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-purple-400">🎓 Expertise Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Penetration Testing", icon: "🎯", desc: "Web App Security" },
                { name: "Vulnerability Research", icon: "🔍", desc: "Zero-day Discovery" },
                { name: "Security Training", icon: "📚", desc: "Education & Awareness" },
                { name: "Tool Development", icon: "⚙️", desc: "Automation Scripts" }
              ].map((area, index) => (
                <div key={area.name} className="p-3 rounded-lg bg-muted/20 border border-border/30 text-center">
                  <div className="text-lg mb-1">{area.icon}</div>
                  <h4 className="text-xs font-bold mb-1">{area.name}</h4>
                  <p className="text-xs text-muted-foreground">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications - Badge Style */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-orange-400">🏆 Frameworks & Standards</h3>
            <div className="flex flex-wrap gap-2">
              {["OWASP Top 10", "NIST Framework", "ISO 27001", "CVE Research", "Bug Bounty"].map((cert, index) => (
                <span 
                  key={cert} 
                  className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Professional Dashboard Style */}
        <div className="hidden lg:block">
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.key} className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-${category.color}/10`}>
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-muted-foreground">Professional Level</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {skills
                      .filter(skill => skill.category === category.key)
                      .map((skill, skillIndex) => (
                        <div key={skill.name} className="group">
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      i < Math.floor(skill.level / 20) ? `bg-${category.color}` : 'bg-muted'
                                    }`}
                                    style={{ transitionDelay: `${(index * 4 + skillIndex) * 100 + i * 50}ms` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/80 rounded-full transition-all duration-1000 group-hover:scale-105`}
                              style={{ 
                                width: inView ? `${skill.level}%` : '0%',
                                transitionDelay: `${(index * 4 + skillIndex) * 150}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <Card className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll mb-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 rounded-xl bg-accent/10">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Security Tools Arsenal</h3>
                <p className="text-muted-foreground">Professional-grade security testing tools</p>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {securityTools.map((tool, index) => (
                <div 
                  key={tool} 
                  className="p-4 rounded-lg bg-muted/20 hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300 cursor-default group"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="font-semibold text-sm group-hover:text-accent transition-colors">
                    {tool}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Frameworks & Standards */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "OWASP", icon: Shield, description: "Web Application Security Testing", color: "primary", expertise: "Expert" },
              { name: "NIST", icon: Lock, description: "Cybersecurity Framework Implementation", color: "accent", expertise: "Advanced" },
              { name: "ISO 27001", icon: Search, description: "Information Security Management", color: "cyber-purple", expertise: "Proficient" }
            ].map((framework, index) => {
              const IconComponent = framework.icon;
              return (
                <Card key={framework.name} className="cyber-glow p-8 bg-card/30 backdrop-blur-sm border-primary/10 animate-on-scroll text-center group hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`p-4 rounded-xl bg-${framework.color}/10 inline-block mb-6 group-hover:bg-${framework.color}/20 transition-colors`}>
                    <IconComponent className={`w-8 h-8 text-${framework.color}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{framework.name}</h4>
                  <p className="text-muted-foreground mb-4">{framework.description}</p>
                  <div className={`inline-block px-3 py-1 rounded-full bg-${framework.color}/10 text-${framework.color} text-sm font-medium`}>
                    {framework.expertise}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;