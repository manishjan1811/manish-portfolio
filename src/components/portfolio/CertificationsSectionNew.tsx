import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Target, 
  Users, 
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CertificationsSectionNew = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const certifications = [
    {
      title: "Certified Ethical Hacker (Practical)",
      acronym: "CEH",
      issuer: "EC-Council",
      description: "Hands-on practical ethical hacking certification demonstrating real-world penetration testing skills.",
      skills: ["Practical Penetration Testing", "Live Environment Exploitation", "Network Security Assessment", "Web Application Security"],
      icon: Shield,
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
      level: "Practical"
    },
    {
      title: "Certified Red Team Analyst",
      acronym: "CRTA", 
      issuer: "SANS/GIAC",
      description: "Advanced red team operations certification focusing on adversary simulation and sophisticated attacks.",
      skills: ["Red Team Operations", "Adversary Simulation", "Advanced Threat Emulation", "Post-Exploitation Techniques"],
      icon: Target,
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30", 
      textColor: "text-red-400",
      level: "Expert"
    },
    {
      title: "Burp Suite Certified Practitioner",
      acronym: "BSCP",
      issuer: "PortSwigger", 
      description: "Specialized web application security testing certification with expert-level Burp Suite proficiency.",
      skills: ["Advanced Web App Testing", "Burp Suite Mastery", "Custom Extension Development", "OWASP Top 10 Exploitation"],
      icon: Award,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400", 
      level: "Specialist"
    }
  ];

  const webPentesterSkills = [
    "Web Application Testing", "OWASP Top 10", "SQL Injection", "XSS Analysis",
    "Authentication Bypass", "API Security Testing", "Session Management", "CSRF Testing"
  ];

  const webDeveloperSkills = [
    "React.js", "Node.js", "JavaScript", "TypeScript", 
    "REST APIs", "Database Security", "Secure Coding", "Git"
  ];

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

  useEffect(() => {
    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();
    
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () => scrollRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Certifications
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating advanced cybersecurity expertise
          </p>
        </div>

        {/* Mobile: Simple Horizontal Cards */}
        <div className="block lg:hidden mb-8">
          <div className="relative">
            {/* Navigation Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border shadow-lg hover:bg-muted transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
              onScroll={updateScrollButtons}
            >
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card
                    key={cert.acronym}
                    className={`flex-shrink-0 w-64 p-4 ${cert.bgColor} ${cert.borderColor} border-2 animate-on-scroll hover:scale-[1.02] transition-transform duration-200`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Header */}
                    <div className="text-center mb-4">
                      <div className={`inline-flex p-3 rounded-full ${cert.bgColor} mb-3`}>
                        <IconComponent className={`w-6 h-6 ${cert.textColor}`} />
                      </div>
                      <h3 className={`text-2xl font-bold ${cert.textColor} mb-2`}>{cert.acronym}</h3>
                      <Badge variant="outline" className={`${cert.borderColor} ${cert.textColor} text-xs`}>
                        {cert.level}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                      </div>

                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h5 className="font-medium text-foreground text-xs mb-2">Key Skills:</h5>
                        <div className="space-y-1">
                          {cert.skills.map((skill, idx) => (
                            <div key={idx} className="flex items-start space-x-1">
                              <CheckCircle className={`w-3 h-3 ${cert.textColor} flex-shrink-0 mt-0.5`} />
                              <span className="text-muted-foreground text-xs leading-tight">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Verify Button */}
                      <div className="pt-3 border-t border-border">
                        <button className={`w-full flex items-center justify-center space-x-1 ${cert.textColor} hover:opacity-80 transition-opacity`}>
                          <span className="text-xs font-medium">Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={cert.acronym} className={`p-8 ${cert.bgColor} ${cert.borderColor} border-2 animate-on-scroll hover:scale-105 transition-transform duration-300`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full ${cert.bgColor} mb-4`}>
                    <IconComponent className={`w-8 h-8 ${cert.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.acronym}</h3>
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className={`${cert.textColor} font-medium mb-2`}>{cert.issuer}</p>
                  <Badge variant="secondary" className={`${cert.bgColor} ${cert.textColor} ${cert.borderColor}`}>
                    {cert.level}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div>
                  <h5 className="font-semibold mb-3">Key Skills Covered</h5>
                  <div className="space-y-2">
                    {cert.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`w-3 h-3 ${cert.textColor} flex-shrink-0`} />
                        <span className="text-xs text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className={`w-full flex items-center justify-center space-x-2 ${cert.textColor} hover:opacity-80 transition-opacity`}>
                    <span className="text-sm font-medium">Verify Certification</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mobile: Unique Stacked Skills Design */}
        <div className="block lg:hidden mb-8 space-y-4">
          {/* Web Pentester - Expandable Card */}
          <Card className="p-5 bg-gradient-to-r from-green-500/20 via-green-500/10 to-transparent border-green-500/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-green-500/20 mr-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-green-700 dark:text-green-400">Web Penetration Tester</h3>
                <p className="text-xs text-gray-600 dark:text-muted-foreground">Security Assessment Specialist</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {webPentesterSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-green-500/20 text-green-700 dark:text-green-300 rounded-full border border-green-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Web Developer - Different Style */}
          <Card className="p-5 bg-gradient-to-l from-blue-500/20 via-blue-500/10 to-transparent border-blue-500/40 relative">
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/10 rounded-full translate-y-10 -translate-x-10"></div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-blue-700 dark:text-blue-400">Web Developer</h3>
                <p className="text-xs text-gray-600 dark:text-muted-foreground">Full-Stack Development</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {webDeveloperSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Learning Path - Timeline Style */}
          <Card className="p-5 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-accent/10 border-purple-500/40 relative">
            <div className="absolute top-0 left-1/2 w-16 h-16 bg-purple-500/10 rounded-full -translate-y-8 -translate-x-8"></div>
            <div className="text-center mb-4">
              <div className="p-3 rounded-full bg-purple-500/20 inline-block mb-2">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base font-bold text-purple-700 dark:text-purple-400">Continuous Learning Journey</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg border-l-4 border-purple-600 dark:border-purple-400">
                <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                <div>
                  <p className="text-xs font-medium text-purple-700 dark:text-purple-300">Current Focus</p>
                  <p className="text-xs text-gray-600 dark:text-muted-foreground">Advanced Web Attacks & Cloud Security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div>
                  <p className="text-xs font-medium text-accent">Next Milestone</p>
                  <p className="text-xs text-gray-600 dark:text-muted-foreground">OSCP & CISSP Certifications</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop: Grid Layout for Skills */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Professional Skills</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-3">Web Pentesting</h4>
                <div className="grid grid-cols-2 gap-2">
                  {webPentesterSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-accent/30 text-accent text-xs py-1 justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3">Web Development</h4>
                <div className="grid grid-cols-2 gap-2">
                  {webDeveloperSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-primary/30 text-primary text-xs py-1 justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Current Focus</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced Web Application Attacks</li>
                  <li>• Cloud Security Testing</li>
                  <li>• Modern Framework Security</li>
                  <li>• API Security Assessment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-accent mb-2">Upcoming Certifications</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• OSCP (Offensive Security)</li>
                  <li>• CISSP (Security Architecture)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSectionNew;