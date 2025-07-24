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
    <section id="skills" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Skills & Expertise 🚀</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in cybersecurity, ethical hacking, and web application security
          </p>
        </div>

        {/* Mobile: Compact Horizontal Scroll Design */}
        <div className="block md:hidden">
          {/* Main Skills - Horizontal Scroll Cards */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-500" />
              Core Expertise
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {categories.slice(0, 2).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.key} className="flex-shrink-0 w-52 p-4 rounded-xl bg-gradient-to-br from-background to-muted/30 border border-border/50 shadow-sm">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`p-2 rounded-lg ${
                        category.color === 'primary' ? 'bg-blue-500/20' :
                        category.color === 'accent' ? 'bg-emerald-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        <IconComponent className={`w-4 h-4 ${
                          category.color === 'primary' ? 'text-blue-500' :
                          category.color === 'accent' ? 'text-emerald-500' :
                          'text-purple-500'
                        }`} />
                      </div>
                      <h4 className="font-semibold text-sm">{category.name}</h4>
                    </div>
                    <div className="space-y-2">
                      {skills
                        .filter(skill => skill.category === category.key)
                        .slice(0, 3)
                        .map((skill) => (
                          <div key={skill.name} className="text-xs">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-1 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  category.color === 'primary' ? 'bg-blue-500' :
                                  category.color === 'accent' ? 'bg-emerald-500' :
                                  'bg-purple-500'
                                }`}
                                style={{ 
                                  width: inView ? `${skill.level}%` : '0%',
                                  transitionDelay: `${index * 200 + 300}ms`
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools Grid - Compact */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2 text-emerald-500" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.slice(2).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.key} className="p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className={`w-4 h-4 ${
                        category.color === 'cyber-purple' ? 'text-purple-500' : 'text-orange-500'
                      }`} />
                      <h4 className="font-medium text-sm">{category.name}</h4>
                    </div>
                    <div className="space-y-1">
                      {skills
                        .filter(skill => skill.category === category.key)
                        .map((skill) => (
                          <div key={skill.name} className="flex justify-between text-xs">
                            <span>{skill.name.split(' ')[0]}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security Tools - Tag Cloud */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Security Arsenal
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {securityTools.slice(0, 12).map((tool, index) => (
                <span 
                  key={tool} 
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks - Minimal Cards */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-red-500" />
              Frameworks
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "OWASP", icon: Shield, color: "blue" },
                { name: "NIST", icon: Lock, color: "green" },
                { name: "ISO 27001", icon: Search, color: "purple" }
              ].map((framework, index) => {
                const IconComponent = framework.icon;
                return (
                  <div key={framework.name} className="p-3 text-center rounded-lg bg-muted/20 border border-border/30">
                    <IconComponent className={`w-5 h-5 mx-auto mb-1 ${
                      framework.color === 'blue' ? 'text-blue-500' :
                      framework.color === 'green' ? 'text-green-500' :
                      'text-purple-500'
                    }`} />
                    <h4 className="font-medium text-xs">{framework.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Enhanced Grid Layout */}
        <div className="hidden md:block">
          {/* Skills Categories */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.key} className="cyber-glow p-6 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
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
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-${category.color} rounded-full transition-all duration-1000`}
                              style={{ 
                                width: inView ? `${skill.level}%` : '0%',
                                transitionDelay: `${index * 100 + 500}ms`
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

          {/* Security Tools */}
          <Card className="cyber-glow p-6 bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll mb-8">
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
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Security Frameworks */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "OWASP", icon: Shield, description: "Web Application Security", color: "primary" },
              { name: "NIST", icon: Lock, description: "Cybersecurity Framework", color: "accent" },
              { name: "ISO 27001", icon: Search, description: "Information Security Management", color: "cyber-purple" }
            ].map((framework, index) => {
              const IconComponent = framework.icon;
              return (
                <Card key={framework.name} className="cyber-glow p-6 bg-card/30 backdrop-blur-sm border-primary/10 animate-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`p-3 rounded-lg bg-${framework.color}/10 inline-block mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${framework.color}`} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{framework.name}</h4>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
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