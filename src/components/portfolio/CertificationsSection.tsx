import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Target, 
  Users, 
  CheckCircle,
  ExternalLink
} from "lucide-react";

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: "Certified Ethical Hacker",
      acronym: "CEH",
      issuer: "EC-Council",
      description: "Comprehensive ethical hacking and penetration testing certification covering advanced attack techniques, tools, and methodologies.",
      skills: [
        "Ethical Hacking Methodologies",
        "Advanced Penetration Testing",
        "Network Security Assessment",
        "Web Application Security",
        "Malware Analysis",
        "Social Engineering"
      ],
      icon: Shield,
      color: "primary",
      level: "Professional"
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
      level: "Expert"
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
      level: "Specialist"
    }
  ];

  const additionalSkills = [
    "Threat Modeling", "Report Writing", "Exploit Development", "Post-Exploitation",
    "Encryption Basics", "Secure Communication", "Risk Assessment", "Compliance Frameworks",
    "Incident Response", "Digital Forensics", "Security Architecture", "Vulnerability Management"
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
    <section id="certifications" ref={sectionRef} className="mobile-py-tight mobile-px-tight pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg md:text-5xl lg:text-6xl font-bold cyber-text mb-4">Certifications</h2>
          <p className="text-responsive-md md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating advanced cybersecurity expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:space-y-0 mobile-gap-tight mb-8 sm:mb-12 md:mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={cert.acronym} className="cyber-glow p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll hover:scale-105 transition-transform duration-300 rounded-xl lg:rounded-lg" style={{ animationDelay: `${index * 0.1}s` }}>
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
                  <button className={`w-full flex items-center justify-center space-x-2 text-${cert.color} hover:text-${cert.color}/80 transition-colors cyber-underline`}>
                    <span className="text-sm font-medium">Verify Certification</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Development */}
        <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0 mobile-gap-tight mb-6 sm:mb-8 md:mb-12">
          <Card className="cyber-glow p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll rounded-xl lg:rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Professional Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="border-accent/30 text-accent hover:bg-accent/10 transition-colors text-xs py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="cyber-glow p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-cyber-purple/20 animate-on-scroll rounded-xl lg:rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-cyber-purple/10">
                <Target className="w-6 h-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Current Focus Areas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced APT Techniques</li>
                  <li>• Cloud Security Assessment</li>
                  <li>• AI/ML Security Testing</li>
                  <li>• Zero-Day Research</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-accent mb-2">Upcoming Certifications</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• OSCP (Offensive Security)</li>
                  <li>• CISSP (Security Architecture)</li>
                  <li>• CISM (Information Security Management)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Certification Value Proposition */}
        <Card className="cyber-glow p-4 sm:p-6 lg:p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll rounded-xl lg:rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold cyber-text mb-6">Certification Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-glow p-6 rounded-lg bg-card/20">
                <div className="text-3xl font-bold cyber-text mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Hands-on Practical</p>
              </div>
              <div className="cyber-glow p-6 rounded-lg bg-card/20">
                <div className="text-3xl font-bold cyber-text mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Industry Certifications</p>
              </div>
              <div className="cyber-glow p-6 rounded-lg bg-card/20">
                <div className="text-3xl font-bold cyber-text mb-2">6+</div>
                <p className="text-sm text-muted-foreground">Months Active Practice</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              These certifications represent not just theoretical knowledge, but proven practical expertise 
              in real-world cybersecurity challenges and advanced threat scenarios.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;