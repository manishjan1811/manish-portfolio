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

  const additionalSkills = [
    "Threat Modeling", "Report Writing", "Exploit Development", "Post-Exploitation",
    "Encryption Basics", "Secure Communication", "Risk Assessment", "Compliance Frameworks",
    "Incident Response", "Digital Forensics", "Security Architecture", "Vulnerability Management"
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

        {/* Professional Development Section */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Professional Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-accent/30 text-accent hover:bg-accent/10 transition-colors text-xs py-1 justify-center"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Continuous Learning</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Current Focus Areas</h4>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Advanced APT Techniques</li>
                  <li>• Cloud Security Assessment</li>
                  <li>• AI/ML Security Testing</li>
                  <li>• Zero-Day Research</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Upcoming Certifications</h4>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• OSCP (Offensive Security)</li>
                  <li>• CISSP (Security Architecture)</li>
                  <li>• CISM (Information Security Management)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Impact Stats */}
        <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border-primary/20 animate-on-scroll">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Certification Impact</h3>
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="p-4 sm:p-6 rounded-lg bg-card/20 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Hands-on Practical</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-card/20 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Industry Certifications</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg bg-card/20 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">6+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Months Active Practice</p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-6">
              These certifications represent not just theoretical knowledge, but proven practical expertise 
              in real-world cybersecurity challenges and advanced threat scenarios.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSectionNew;