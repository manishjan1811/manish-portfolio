import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Terminal, Download, Shield, Search, Bug, Code, Globe, Lock } from "lucide-react";
import MobileProjectModal from "./MobileProjectModal";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showPrivateDialog, setShowPrivateDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  console.log('Dialog state:', showPrivateDialog);

  const cyberSecurityProjects = [{
    title: "Reconbro.sh",
    subtitle: "Advanced Reconnaissance Tool",
    date: "February 2024",
    description: "Comprehensive reconnaissance automation tool built in bash script. Designed specifically to help beginners in web pentesting by providing powerful yet easy-to-use reconnaissance capabilities.",
    features: ["Full domain reconnaissance automation", "Subdomain enumeration and discovery", "Port scanning and service detection", "Directory and file discovery", "DNS enumeration and analysis", "Custom wordlist support", "Detailed output formatting", "Beginner-friendly interface"],
    technologies: ["Bash", "Linux", "Nmap", "Subfinder", "Httpx", "Gobuster"],
    icon: Search,
    color: "primary",
    type: "Reconnaissance",
    githubUrl: "https://github.com/manishjan1811/Reconbro.sh"
  }, {
    title: "Toolsbro.sh",
    subtitle: "Pentesting Tools Installer",
    date: "March 2024",
    description: "One-click installer for essential web pentesting tools. Streamlines the setup process for security professionals and enthusiasts by automating tool installation and configuration.",
    features: ["One-click tool installation", "Automatic dependency resolution", "Tool verification and testing", "Custom installation paths", "Update management system", "Installation logs and reports", "Easy customization options", "Cross-platform compatibility"],
    technologies: ["Bash", "Shell Scripting", "Package Management", "Git"],
    icon: Download,
    color: "accent",
    type: "Automation",
    githubUrl: "https://github.com/manishjan1811/Toolsbro.sh"
  }, {
    title: "Epic Games 2FA Bypass",
    subtitle: "Critical Security Research",
    date: "2024",
    description: "Discovered and responsibly disclosed a critical two-factor authentication bypass vulnerability in Epic Games platform. Demonstrates expertise in authentication security and business logic flaw identification.",
    features: ["Critical vulnerability discovery", "Authentication bypass technique", "Business logic flaw analysis", "Responsible disclosure process", "Impact assessment and documentation", "Remediation recommendations", "Security research methodology", "Professional reporting"],
    technologies: ["Web Security", "Authentication", "Business Logic", "Research"],
    icon: Bug,
    color: "destructive",
    type: "Security Research"
  }];

  const webDevProjects = [{
    title: "Uber Luxury Home",
    subtitle: "Premium Real Estate Platform for Client",
    date: "2024",
    description: "Full-stack luxury real estate platform built using Lovable's React/TypeScript stack. Features modern design system, responsive layouts, and premium user experience with Supabase backend integration.",
    features: ["Modern React/TypeScript architecture", "Tailwind CSS design system", "Supabase database integration", "Responsive luxury UI/UX", "Component-based architecture", "Modern development workflow", "Optimized performance", "Mobile-first design"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    icon: Globe,
    color: "primary",
    type: "Real Estate",
    liveUrl: "https://red-hamster-862711.hostingersite.com/"
  }, {
    title: "CheapOTT Store",
    subtitle: "E-commerce Platform for Client",
    date: "2024",
    description: "Complete e-commerce solution built for streaming service subscriptions. Frontend-only implementation with responsive design and modern user interface.",
    features: ["Responsive design", "Product catalog display", "Shopping cart functionality", "Modern UI/UX", "SEO optimization", "Mobile-first approach", "Fast loading", "Cross-browser compatibility"],
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    color: "accent",
    type: "E-commerce",
    liveUrl: "https://cheapott.store"
  }, {
    title: "Trade Flow Universe",
    subtitle: "Crypto Trading Frontend",
    date: "2024",
    description: "Advanced cryptocurrency trading interface frontend with modern React architecture. Frontend-only implementation showcasing trading interface design and user experience.",
    features: ["Trading interface design", "Portfolio UI mockups", "Advanced charting display", "Modern UI components", "Responsive design", "Interactive elements", "Performance optimized", "Mobile responsive"],
    technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
    icon: Code,
    color: "accent",
    type: "Fintech",
    githubUrl: "https://github.com/manishjan1811/trade-flow-universe/tree/main"
  }];

  const renderProjects = (projects: any[]) => {
    return (
      <>
        {/* Mobile: Card Stack Design */}
        <div className="block md:hidden">
          <div className="relative">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.title} className="mb-6 animate-on-scroll" style={{
                  animationDelay: `${index * 0.15}s`
                }}>
                  {/* Project Card with Unique Layout */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background/95 to-background/90 border border-border/50 shadow-lg">
                    {/* Top Section with Icon and Type */}
                    <div className={`relative h-24 bg-gradient-to-r ${project.color === 'primary' ? 'from-blue-500/20 to-blue-600/30' : project.color === 'accent' ? 'from-emerald-500/20 to-emerald-600/30' : 'from-red-500/20 to-red-600/30'}`}>
                      <div className="absolute inset-0 bg-black/50 dark:bg-black/20"></div>
                      <div className="relative p-4 flex items-center justify-between">
                        <div className={`p-3 rounded-xl bg-background/90 backdrop-blur-sm shadow-lg`}>
                          <IconComponent className={`w-6 h-6 ${project.color === 'primary' ? 'text-blue-500' : project.color === 'accent' ? 'text-emerald-500' : 'text-red-500'}`} />
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${project.color === 'primary' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : project.color === 'accent' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                          {project.type}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-4">
                      {/* Title and Date */}
                      <div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className={`text-sm font-medium mb-2 ${project.color === 'primary' ? 'text-blue-400' : project.color === 'accent' ? 'text-emerald-400' : 'text-red-400'}`}>
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
                          {project.technologies.map(tech => (
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
                              className={`py-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-center ${project.color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : project.color === 'accent' ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`} 
                              onClick={() => {
                                console.log('Mobile button clicked for:', project.title);
                                if (project.title === 'CheapOTT Store' || project.title === 'Uber Luxury Home') {
                                  console.log('Setting dialog to true');
                                  setSelectedProject(project.title);
                                  setShowPrivateDialog(true);
                                } else {
                                  window.open(project.githubUrl, '_blank');
                                }
                              }}
                            >
                              <Github className="w-3.5 h-3.5 mr-1.5" />
                              {project.title === 'Uber Luxury Home' ? 'Private' : 'View Code'}
                            </button>
                            <button 
                              className="py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-lg border border-border transition-colors text-xs font-medium flex items-center justify-center" 
                              onClick={() => window.open(project.liveUrl || '#', '_blank')}
                            >
                              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                              {project.liveUrl ? 'Live Site' : 'Demo'}
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
        </div>

        {/* Desktop: Perfect Card Design */}
        <div className="hidden md:block">
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={project.title} className="group relative animate-on-scroll" style={{
                  animationDelay: `${index * 0.2}s`
                }}>
                  {/* Animated Background Glow */}
                  <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm ${project.color === 'primary' ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/30' : project.color === 'accent' ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/30' : 'bg-gradient-to-r from-red-500/20 to-red-600/30'}`}></div>
                  
                  {/* Main Card */}
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-background/50 backdrop-blur-sm border border-border/50 group-hover:border-border transition-all duration-300">
                    {/* Header Section */}
                    <div className={`relative p-8 pb-6 bg-gradient-to-r ${project.color === 'primary' ? 'from-blue-500/5 via-blue-600/10 to-transparent' : project.color === 'accent' ? 'from-emerald-500/5 via-emerald-600/10 to-transparent' : 'from-red-500/5 via-red-600/10 to-transparent'}`}>
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div className={`relative p-4 rounded-2xl shadow-lg ${project.color === 'primary' ? 'bg-blue-500/10 border border-blue-500/20' : project.color === 'accent' ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                            <IconComponent className={`w-8 h-8 ${project.color === 'primary' ? 'text-blue-400' : project.color === 'accent' ? 'text-emerald-400' : 'text-red-400'}`} />
                            {/* Subtle glow effect */}
                            <div className={`absolute inset-0 rounded-2xl opacity-30 ${project.color === 'primary' ? 'bg-blue-500/20' : project.color === 'accent' ? 'bg-emerald-500/20' : 'bg-red-500/20'} blur-lg -z-10`}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                              <Badge variant="outline" className={`px-3 py-1 font-medium ${project.color === 'primary' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : project.color === 'accent' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-red-500/30 text-red-400 bg-red-500/10'}`}>
                                {project.type}
                              </Badge>
                            </div>
                            <p className={`text-xl font-semibold mb-3 ${project.color === 'primary' ? 'text-blue-300' : project.color === 'accent' ? 'text-emerald-300' : 'text-red-300'}`}>
                              {project.subtitle}
                            </p>
                            <p className="text-muted-foreground font-medium">{project.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-8">
                      <div className="grid grid-cols-5 gap-6">
                        {/* Left: Description & Technologies */}
                        <div className="col-span-3 space-y-5 px-[11px] py-[12px] mx-0">
                          {/* Description */}
                          <div>
                            <p className="text-base leading-relaxed text-gray-700 dark:text-muted-foreground">
                              {project.description}
                            </p>
                          </div>

                          {/* Technologies - Optimized Grid */}
                          <div>
                            <h4 className="text-base font-semibold mb-3 flex items-center">
                              <Terminal className="w-4 h-4 mr-2 text-primary" />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map(tech => (
                                <div key={tech} className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-300 hover:scale-105 ${project.color === 'primary' ? 'bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40 text-blue-600 dark:text-blue-300' : project.color === 'accent' ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40 text-emerald-600 dark:text-emerald-300' : 'bg-red-500/5 border-red-500/20 hover:border-red-500/40 text-red-600 dark:text-red-300'}`}>
                                  {tech}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons - Optimized Layout */}
                          <div className="flex flex-wrap gap-3 pt-1">
                            {project.title.includes('Epic Games') ? (
                              <Button className="bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300" variant="outline">
                                <Shield className="w-4 h-4 mr-2" />
                                Security Research
                              </Button>
                            ) : (
                              <>
                                <Button 
                                  className={`font-medium transition-all duration-300 hover:scale-105 ${project.color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-blue-500/25' : project.color === 'accent' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-md hover:shadow-emerald-500/25' : 'bg-red-500 hover:bg-red-600 shadow-md hover:shadow-red-500/25'}`} 
                                  onClick={() => {
                                    if (project.title === 'CheapOTT Store' || project.title === 'Uber Luxury Home') {
                                      setSelectedProject(project.title);
                                      setShowPrivateDialog(true);
                                    } else {
                                      window.open('https://github.com/manishjan1811/webtools.sh', '_blank');
                                    }
                                  }}
                                >
                                  <Github className="w-4 h-4 mr-2" />
                                  {project.title === 'Uber Luxury Home' ? 'Private Project' : 'View Source'}
                                </Button>
                                <Button 
                                  variant="outline" 
                                  className={`font-medium transition-all duration-300 hover:scale-105 ${project.color === 'primary' ? 'border-blue-500/30 text-blue-400 bg-blue-500/5 hover:bg-blue-500/15' : project.color === 'accent' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/15' : 'border-red-500/30 text-red-400 bg-red-500/5 hover:bg-red-500/15'}`} 
                                  onClick={() => window.open(project.liveUrl || '#', '_blank')}
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  {project.liveUrl ? 'Live Site' : 'Demo'}
                                </Button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Right: Key Features - Optimized */}
                        <div className="col-span-2 px-0 py-0 my-[20px]">
                          <h4 className="text-base font-semibold mb-3 flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-3 ${project.color === 'primary' ? 'bg-blue-400' : project.color === 'accent' ? 'bg-emerald-400' : 'bg-red-400'}`}></div>
                            Key Features
                          </h4>
                          <div className="space-y-2.5">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className={`group/feature relative p-3 rounded-lg border transition-all duration-300 hover:scale-[1.01] ${project.color === 'primary' ? 'bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30' : project.color === 'accent' ? 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/30' : 'bg-red-500/5 border-red-500/10 hover:border-red-500/30'}`}>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work in cybersecurity research and web development
          </p>
        </div>

        {/* Optimized Tabs for mobile */}
        <Tabs defaultValue="cybersecurity" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
            <TabsTrigger value="cybersecurity" className="flex items-center gap-2 py-3 px-2 text-xs sm:text-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Cybersecurity</span>
              <span className="xs:hidden">Cyber</span>
            </TabsTrigger>
            <TabsTrigger value="webdev" className="flex items-center gap-2 py-3 px-2 text-xs sm:text-sm">
              <Code className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Web Development</span>
              <span className="xs:hidden">Web Dev</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cybersecurity" className="animate-on-scroll">
            {renderProjects(cyberSecurityProjects)}
            
            {/* Research Section for Cybersecurity Tab */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border border-primary/20 md:hidden">
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

            {/* Desktop Research Section */}
            <Card className="cyber-glow mt-12 p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll hidden md:block">
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
          </TabsContent>

          <TabsContent value="webdev" className="animate-on-scroll">
            {renderProjects(webDevProjects)}
            
            {/* Additional Projects Note */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-muted/5 via-muted/10 to-accent/5 border border-muted/30">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">More Projects Available</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Several additional projects are currently in development phase and some cannot be showcased for security and confidentiality reasons.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Desktop & Tablet Dialog */}
        <Dialog open={showPrivateDialog} onOpenChange={setShowPrivateDialog}>
          <DialogContent className="max-w-[90vw] sm:max-w-lg w-full mx-4 sm:mx-auto hidden sm:block">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-center justify-center text-xl">
                <Lock className="w-6 h-6 text-amber-500" />
                {selectedProject === 'Uber Luxury Home' ? 'Premium Real Estate Platform' : 'E-commerce Platform'}
              </DialogTitle>
              <DialogDescription className="pt-4 text-center space-y-4">
                {selectedProject === 'Uber Luxury Home' ? (
                  <div className="space-y-3">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🏡 Uber Luxury Home</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        This is a premium real estate platform built using Lovable's modern tech stack (React, TypeScript, Tailwind CSS, Supabase). 
                        The project showcases luxury property listings with advanced features and premium UI/UX design.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>🔒 Privacy Notice:</strong> Source code is private as this is a commercial project with proprietary business logic and design systems.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">TypeScript</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">Supabase</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Tailwind CSS</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🛒 CheapOTT Store</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        A complete e-commerce platform for streaming service subscriptions. Built for a client with custom business requirements 
                        and integrated payment systems.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <p className="text-sm text-red-700 dark:text-red-300">
                        <strong>🔒 Client Confidentiality:</strong> This project belongs to the client and contains sensitive business logic, 
                        payment integrations, and proprietary features that cannot be made public.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-3">
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">HTML5</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">CSS3</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">JavaScript</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">E-commerce</span>
                    </div>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center pt-6">
              <Button onClick={() => setShowPrivateDialog(false)} className="w-full max-w-xs">
                Got it, Thanks!
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile-Specific Modal */}
        <MobileProjectModal 
          isOpen={showPrivateDialog}
          onClose={() => setShowPrivateDialog(false)}
          title={selectedProject}
          selectedProject={selectedProject}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;