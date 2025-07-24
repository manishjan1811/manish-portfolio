import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Terminal, 
  Download, 
  Shield,
  Search,
  Bug
} from "lucide-react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Reconbro.sh",
      subtitle: "Advanced Reconnaissance Tool",
      date: "February 2024",
      description: "Comprehensive reconnaissance automation tool built in bash script. Designed specifically to help beginners in web pentesting by providing powerful yet easy-to-use reconnaissance capabilities.",
      features: [
        "Full domain reconnaissance automation",
        "Subdomain enumeration and discovery",
        "Port scanning and service detection",
        "Directory and file discovery",
        "DNS enumeration and analysis",
        "Custom wordlist support",
        "Detailed output formatting",
        "Beginner-friendly interface"
      ],
      technologies: ["Bash", "Linux", "Nmap", "Subfinder", "Httpx", "Gobuster"],
      icon: Search,
      color: "primary",
      type: "Reconnaissance"
    },
    {
      title: "Toolsbro.sh",
      subtitle: "Pentesting Tools Installer",
      date: "March 2024",
      description: "One-click installer for essential web pentesting tools. Streamlines the setup process for security professionals and enthusiasts by automating tool installation and configuration.",
      features: [
        "One-click tool installation",
        "Automatic dependency resolution",
        "Tool verification and testing",
        "Custom installation paths",
        "Update management system",
        "Installation logs and reports",
        "Easy customization options",
        "Cross-platform compatibility"
      ],
      technologies: ["Bash", "Shell Scripting", "Package Management", "Git"],
      icon: Download,
      color: "accent",
      type: "Automation"
    },
    {
      title: "Epic Games 2FA Bypass",
      subtitle: "Critical Security Research",
      date: "2024",
      description: "Discovered and responsibly disclosed a critical two-factor authentication bypass vulnerability in Epic Games platform. Demonstrates expertise in authentication security and business logic flaw identification.",
      features: [
        "Critical vulnerability discovery",
        "Authentication bypass technique",
        "Business logic flaw analysis",
        "Responsible disclosure process",
        "Impact assessment and documentation",
        "Remediation recommendations",
        "Security research methodology",
        "Professional reporting"
      ],
      technologies: ["Web Security", "Authentication", "Business Logic", "Research"],
      icon: Bug,
      color: "destructive",
      type: "Security Research"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <section id="projects" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Security tools and research that demonstrate advanced cybersecurity expertise
          </p>
        </div>

        {/* Mobile: Card Stack Design */}
        <div className="block md:hidden">
          <div className="relative">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={project.title} 
                  className="mb-6 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Project Card with Unique Layout */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background/95 to-background/90 border border-border/50 shadow-lg">
                    {/* Top Section with Icon and Type */}
                    <div className={`relative h-24 bg-gradient-to-r ${
                      project.color === 'primary' ? 'from-blue-500/20 to-blue-600/30' :
                      project.color === 'accent' ? 'from-emerald-500/20 to-emerald-600/30' :
                      'from-red-500/20 to-red-600/30'
                    }`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative p-4 flex items-center justify-between">
                        <div className={`p-3 rounded-xl bg-background/90 backdrop-blur-sm shadow-lg`}>
                          <IconComponent className={`w-6 h-6 ${
                            project.color === 'primary' ? 'text-blue-500' :
                            project.color === 'accent' ? 'text-emerald-500' :
                            'text-red-500'
                          }`} />
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                          project.color === 'primary' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          project.color === 'accent' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                          'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {project.type}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-4">
                      {/* Title and Date */}
                      <div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className={`text-sm font-medium mb-2 ${
                          project.color === 'primary' ? 'text-blue-400' :
                          project.color === 'accent' ? 'text-emerald-400' :
                          'text-red-400'
                        }`}>
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-muted-foreground">{project.date}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features - Horizontal Scroll */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex-shrink-0 px-3 py-2 bg-muted/50 rounded-lg border border-border/50">
                              <p className="text-xs text-muted-foreground whitespace-nowrap">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies - Compact Pills */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2">
                        {project.title.includes('Epic Games') ? (
                          <button className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 transition-colors text-sm font-medium flex items-center justify-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Security Research
                          </button>
                        ) : (
                          <div className="grid grid-cols-2 gap-2">
                            <button 
                              className={`py-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-center ${
                                project.color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                                project.color === 'accent' ? 'bg-emerald-500 hover:bg-emerald-600 text-white' :
                                'bg-red-500 hover:bg-red-600 text-white'
                              }`}
                              onClick={() => window.open(
                                project.title === 'Reconbro.sh' 
                                  ? 'https://github.com/manishjan1811/Reconbro.sh'
                                  : 'https://github.com/manishjan1811/Toolsbro.sh'
                                , '_blank'
                              )}
                            >
                              <Github className="w-3.5 h-3.5 mr-1.5" />
                              View Code
                            </button>
                            <button 
                              className="py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-lg border border-border transition-colors text-xs font-medium flex items-center justify-center"
                              onClick={() => {
                                window.open('#', '_blank');
                              }}
                            >
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                              Demo
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Research Section */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border border-primary/20">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Continuous Research</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Actively discovering vulnerabilities and contributing to cybersecurity community
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/30">
                  Bug Bounty Hunter
                </span>
                <span className="px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-full border border-accent/30">
                  Security Researcher
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Enhanced Grid Layout */}
        <div className="hidden md:block">
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.title} className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="grid grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-${project.color}/10 flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 text-${project.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-${project.color}/30`}>
                              {project.type}
                            </Badge>
                          </div>
                          <p className={`text-lg text-${project.color} font-medium mb-2`}>{project.subtitle}</p>
                          <p className="text-sm text-muted-foreground">{project.date}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.title.includes('Epic Games') ? (
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Shield className="w-4 h-4 mr-2" />
                            Security Research
                          </Button>
                        ) : (
                          <>
                            <Button 
                              variant="default" 
                              className="bg-gradient-cyber hover:shadow-cyber"
                              onClick={() => window.open(
                                project.title === 'Reconbro.sh' 
                                  ? 'https://github.com/manishjan1811/Reconbro.sh'
                                  : 'https://github.com/manishjan1811/Toolsbro.sh'
                                , '_blank'
                              )}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              onClick={() => window.open('#', '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Key Features</h4>
                      <div className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${project.color} mt-2 flex-shrink-0`}></div>
                            <p className="text-sm text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Desktop Research Section */}
          <Card className="cyber-glow mt-12 p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-bold cyber-text mb-4">Continuous Security Research</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Actively discovering vulnerabilities in public programs and contributing to the cybersecurity community 
                through responsible disclosure and security awareness.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="cyber-glow bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  Bug Bounty Hunter
                </Badge>
                <Badge variant="secondary" className="cyber-glow bg-accent/10 text-accent border-accent/30 px-4 py-2">
                  Vulnerability Researcher
                </Badge>
                <Badge variant="secondary" className="cyber-glow bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30 px-4 py-2">
                  Security Trainer
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;