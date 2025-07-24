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

const CertificationsSectionMobile = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const certifications = [
    {
      title: "Certified Ethical Hacker (Practical)",
      acronym: "CEH",
      issuer: "EC-Council",
      description: "Hands-on practical ethical hacking certification demonstrating real-world penetration testing skills and advanced attack techniques in live lab environments.",
      skills: [
        "Practical Penetration Testing",
        "Live Environment Exploitation",
        "Network Security Assessment", 
        "Web Application Security",
        "Malware Analysis",
        "Social Engineering"
      ],
      icon: Shield,
      color: "primary",
      level: "Practical",
      gradient: "from-green-500/20 via-emerald-500/10 to-teal-500/20"
    },
    {
      title: "Certified Red Team Analyst",
      acronym: "CRTA",
      issuer: "SANS/GIAC",
      description: "Advanced red team operations certification focusing on adversary simulation, advanced persistent threats, and sophisticated attack chains.",
      skills: [
        "Red Team Operations",
        "Adversary Simulation",
        "Advanced Threat Emulation",
        "Post-Exploitation Techniques",
        "Command & Control",
        "MITRE ATT&CK Framework"
      ],
      icon: Target,
      color: "destructive",
      level: "Expert",
      gradient: "from-red-500/20 via-rose-500/10 to-pink-500/20"
    },
    {
      title: "Burp Suite Certified Practitioner",
      acronym: "BSCP",
      issuer: "PortSwigger",
      description: "Specialized web application security testing certification demonstrating expert-level proficiency with Burp Suite Professional.",
      skills: [
        "Advanced Web App Testing",
        "Burp Suite Mastery",
        "Custom Extension Development",
        "Automated Security Testing",
        "OWASP Top 10 Exploitation",
        "Business Logic Flaw Detection"
      ],
      icon: Award,
      color: "accent",
      level: "Specialist",
      gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20"
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
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Certifications
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Industry-recognized certifications demonstrating advanced cybersecurity expertise
          </p>
        </div>

        {/* Mobile: Fixed Horizontal Scrolling Cards */}
        <div className="block lg:hidden mb-8">
          <div className="relative -mx-4 sm:-mx-6">
            {/* Scroll buttons - Better positioning */}
            <button
              onClick={() => scroll('left')}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-xl transition-all duration-200 ${
                canScrollLeft ? 'opacity-100 hover:scale-110 hover:bg-background' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-xl transition-all duration-200 ${
                canScrollRight ? 'opacity-100 hover:scale-110 hover:bg-background' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Horizontal scrolling container - Fixed */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pl-4 pr-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
            >
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div
                    key={cert.acronym}
                    className="flex-shrink-0 w-72 animate-on-scroll"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      scrollSnapAlign: 'start'
                    }}
                  >
                    {/* 3D Card - Compact for mobile */}
                    <div className="group perspective-1000 h-80">
                      <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 w-full h-full">
                        {/* Front side - Compact layout */}
                        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-to-br ${cert.gradient} backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden`}>
                          <div className="p-5 h-full flex flex-col justify-between">
                            {/* Icon and Title - Compact */}
                            <div className="text-center">
                              <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm mb-3 border border-white/20">
                                <IconComponent className="w-7 h-7 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">{cert.acronym}</h3>
                              <Badge 
                                variant="secondary" 
                                className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1 text-sm"
                              >
                                {cert.level}
                              </Badge>
                            </div>

                            {/* Title and Issuer - Compact */}
                            <div className="text-center mb-3">
                              <h4 className="text-base font-semibold text-white/90 mb-1 leading-tight">{cert.title}</h4>
                              <p className="text-white/70 font-medium text-sm">{cert.issuer}</p>
                            </div>

                            {/* Description - Compact */}
                            <div className="flex-grow flex items-center">
                              <p className="text-white/80 text-xs leading-relaxed text-center line-clamp-4">
                                {cert.description}
                              </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="text-center">
                              <p className="text-white/60 text-xs animate-pulse">
                                Tap to see skills →
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Back side - Compact */}
                        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br ${cert.gradient} backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden`}>
                          <div className="p-5 h-full flex flex-col">
                            <h5 className="font-bold text-white mb-4 text-center text-lg">Key Skills</h5>
                            <div className="space-y-2 flex-grow overflow-y-auto">
                              {cert.skills.map((skill, idx) => (
                                <div key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-white/90 leading-tight">{skill}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/20">
                              <button className="w-full flex items-center justify-center space-x-2 text-white/90 hover:text-white transition-colors">
                                <span className="text-sm font-medium">Verify</span>
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={cert.acronym} className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-${cert.color}/10 mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${cert.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.acronym}</h3>
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className={`text-${cert.color} font-medium mb-2`}>{cert.issuer}</p>
                  <Badge variant="secondary" className={`bg-${cert.color}/10 text-${cert.color} border-${cert.color}/30`}>
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
                        <CheckCircle className={`w-3 h-3 text-${cert.color} flex-shrink-0`} />
                        <span className="text-xs text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className={`w-full flex items-center justify-center space-x-2 text-${cert.color} hover:text-${cert.color}/80 transition-colors`}>
                    <span className="text-sm font-medium">Verify Certification</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Development - Responsive */}
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

        {/* Certification Impact */}
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

export default CertificationsSectionMobile;