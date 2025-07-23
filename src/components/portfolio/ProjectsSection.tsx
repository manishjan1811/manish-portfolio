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
      title: "Webtools.sh",
      subtitle: "Web Security Testing Suite",
      date: "2024",
      description: "Comprehensive web security testing toolkit designed for penetration testers and security researchers. Provides automated scanning and manual testing capabilities for web applications.",
      features: [
        "Automated vulnerability scanning",
        "Web application enumeration",
        "Security header analysis",
        "SSL/TLS security testing",
        "Directory brute forcing",
        "Parameter fuzzing capabilities",
        "Custom payload injection",
        "Detailed security reports"
      ],
      technologies: ["Bash", "Web Security", "OWASP", "SSL/TLS", "HTTP"],
      icon: Shield,
      color: "accent",
      type: "Web Security"
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
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg font-bold cyber-text mb-4">Featured Projects</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Security tools and research that demonstrate advanced cybersecurity expertise
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.title} className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
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
                                : project.title === 'Toolsbro.sh'
                                ? 'https://github.com/manishjan1811/Toolsbro.sh'
                                : 'https://github.com/manishjan1811/webtools.sh'
                              , '_blank'
                            )}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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

        {/* Additional Work */}
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
    </section>
  );
};

export default ProjectsSection;