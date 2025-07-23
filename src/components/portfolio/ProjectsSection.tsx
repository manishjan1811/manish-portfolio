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
    <section id="projects" ref={sectionRef} className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg font-bold cyber-text mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-responsive-sm text-muted-foreground max-w-3xl mx-auto">
            Security tools and research that demonstrate advanced cybersecurity expertise
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="cyber-glow card-padding bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`p-2 sm:p-3 rounded-lg bg-${project.color}/10 flex-shrink-0`}>
                        <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 text-${project.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{project.title}</h3>
                          <Badge variant="secondary" className={`bg-${project.color}/10 text-${project.color} border-${project.color}/30 text-xs sm:text-sm mt-1 sm:mt-0 self-start sm:self-center`}>
                            {project.type}
                          </Badge>
                        </div>
                        <p className={`text-sm sm:text-base md:text-lg text-${project.color} font-medium mb-1 sm:mb-2`}>{project.subtitle}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{project.date}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs sm:text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
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
                                : project.title === 'Toolsbro.sh'
                                ? 'https://github.com/manishjan1811/Toolsbro.sh'
                                : 'https://github.com/manishjan1811/webtools.sh'
                              , '_blank'
                            )}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            onClick={() => {
                              if (project.title === 'Reconbro.sh') {
                                window.open('https://asciinema.org/a/demo-reconbro', '_blank');
                              } else if (project.title === 'Toolsbro.sh') {
                                window.open('https://asciinema.org/a/demo-toolsbro', '_blank');
                              } else if (project.title === 'Webtools.sh') {
                                window.open('https://asciinema.org/a/demo-webtools', '_blank');
                              }
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-base sm:text-lg">Key Features</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {project.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                          <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-${project.color} mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                      {project.features.length > 6 && (
                        <p className="text-xs text-muted-foreground italic ml-3 sm:ml-5">...and more</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Work */}
        <Card className="cyber-glow mt-8 sm:mt-12 card-padding bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold cyber-text mb-3 sm:mb-4 md:mb-6">Continuous Security Research</h3>
            <p className="text-responsive-sm text-muted-foreground mb-4 sm:mb-6">
              Actively discovering vulnerabilities in public programs and contributing to the cybersecurity community 
              through responsible disclosure and security awareness.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <Badge variant="secondary" className="cyber-glow bg-primary/10 text-primary border-primary/30 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Bug Bounty Hunter
              </Badge>
              <Badge variant="secondary" className="cyber-glow bg-accent/10 text-accent border-accent/30 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Vulnerability Researcher
              </Badge>
              <Badge variant="secondary" className="cyber-glow bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                Security Trainer
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;