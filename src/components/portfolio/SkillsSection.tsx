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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg font-bold cyber-text mb-4">Security Skills</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in cybersecurity, ethical hacking, and web application security
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.key} className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                    <IconComponent className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category.key)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar h-2">
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
              </Card>
            );
          })}
        </div>

        {/* Security Tools Arsenal */}
        <Card className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-lg bg-accent/10">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Security Tools Arsenal</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {securityTools.map((tool, index) => (
              <Badge 
                key={tool} 
                variant="secondary" 
                className="cyber-glow bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Security Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { name: "OWASP", icon: Shield, description: "Web Application Security" },
            { name: "NIST", icon: Lock, description: "Cybersecurity Framework" },
            { name: "ISO 27001", icon: Search, description: "Information Security Management" }
          ].map((framework, index) => {
            const IconComponent = framework.icon;
            return (
              <Card key={framework.name} className="cyber-glow p-6 bg-card/30 backdrop-blur-sm border-primary/10 text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-3 rounded-lg bg-primary/10 inline-block mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">{framework.name}</h4>
                <p className="text-sm text-muted-foreground">{framework.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;