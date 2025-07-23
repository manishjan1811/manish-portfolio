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
    <section id="skills" ref={sectionRef} className="mobile-section-spacing md:py-20 md:px-6 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16 animate-on-scroll">
          <h2 className="mobile-title md:text-4xl md:font-bold md:cyber-text mb-2 md:mb-4">Security Skills</h2>
          <p className="text-xs md:text-xl md:text-muted-foreground md:max-w-3xl mx-auto text-primary/70">
            Comprehensive expertise in cybersecurity, ethical hacking, and web application security
          </p>
        </div>

        {/* Mobile: Masonry Layout, Desktop: Grid */}
        <div className="mobile-masonry md:grid md:grid-cols-2 md:gap-8 mb-4 md:mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={category.key} className="mobile-slide-card mobile-padding-small md:cyber-glow md:p-6 md:bg-card/50 md:backdrop-blur-sm md:border-primary/20 animate-on-scroll mobile-glow-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-xl md:rounded-lg bg-${category.color}/20 md:bg-${category.color}/10`}>
                    <IconComponent className={`w-4 h-4 md:w-6 md:h-6 text-${category.color}`} />
                  </div>
                  <h3 className="mobile-title md:text-xl md:font-semibold">{category.name}</h3>
                </div>
                
                <div className="mobile-space-ultra md:space-y-4">
                  {skills
                    .filter(skill => skill.category === category.key)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1 md:mb-2">
                          <span className="text-xs md:text-sm font-bold md:font-medium">{skill.name}</span>
                          <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar h-1 md:h-2">
                          <div 
                            className="skill-progress h-full"
                            style={{ 
                              '--skill-width': inView ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 0.1 + 0.5}s`
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Tools - Mobile Floating Design */}
        <div className="mobile-floating-card mobile-padding-small mobile-margin-tight md:cyber-glow md:p-6 md:bg-card/50 md:backdrop-blur-sm md:border-accent/20 animate-on-scroll mobile-bounce">
          <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
            <div className="p-2 md:p-3 rounded-xl md:rounded-lg bg-accent/20 md:bg-accent/10">
              <Zap className="w-4 h-4 md:w-6 md:h-6 text-accent" />
            </div>
            <h3 className="mobile-title md:text-xl md:font-semibold">Security Tools Arsenal</h3>
          </div>
          
          <div className="flex flex-wrap gap-1 md:gap-3">
            {securityTools.map((tool, index) => (
              <Badge 
                key={tool} 
                variant="secondary" 
                className="mobile-neon-card text-xs px-2 py-1 md:cyber-glow md:bg-muted/50 md:hover:bg-primary/10 md:hover:text-primary md:transition-all md:duration-300 md:cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Security Frameworks - Mobile Card Grid */}
        <div className="mobile-masonry md:grid md:grid-cols-3 md:gap-6 mt-4 md:mt-8">
          {[
            { name: "OWASP", icon: Shield, description: "Web Application Security" },
            { name: "NIST", icon: Lock, description: "Cybersecurity Framework" },
            { name: "ISO 27001", icon: Search, description: "Information Security Management" }
          ].map((framework, index) => {
            const IconComponent = framework.icon;
            return (
              <div key={framework.name} className="mobile-glass-card mobile-padding-small text-center md:cyber-glow md:p-6 md:bg-card/30 md:backdrop-blur-sm md:border-primary/10 animate-on-scroll mobile-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-2 md:p-3 rounded-xl md:rounded-lg bg-primary/20 md:bg-primary/10 inline-block mb-2 md:mb-4">
                  <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <h4 className="font-bold text-sm md:font-semibold md:text-lg">{framework.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{framework.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;