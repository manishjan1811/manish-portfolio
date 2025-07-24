import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Shield, Users, Target, CheckCircle } from "lucide-react";
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const experiences = [{
    title: "Cyber Security Trainer",
    company: "Cywer Learning",
    type: "Corporate Training",
    duration: "Ongoing",
    description: "Delivering advanced cybersecurity training programs for professionals and organizations, focusing on practical penetration testing skills.",
    achievements: ["Designed advanced security training modules", "Conducted VAPT workshops and seminars", "Mentored junior security professionals", "Created real-world hacking scenarios"],
    icon: GraduationCap,
    color: "accent"
  }];
  const keyAccomplishments = [{
    title: "Critical Vulnerability Discovery",
    description: "2FA bypass in Epic Games platform",
    icon: Target,
    color: "destructive"
  }, {
    title: "Multiple Public Disclosures",
    description: "Responsible vulnerability reporting",
    icon: Shield,
    color: "primary"
  }, {
    title: "Advanced Tool Development",
    description: "Created Reconbro.sh and Toolsbro.sh",
    icon: CheckCircle,
    color: "accent"
  }, {
    title: "Professional Training",
    description: "6+ months of APT training experience",
    icon: GraduationCap,
    color: "cyber-purple"
  }];
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
  return <section id="experience" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Experience</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in cybersecurity training, vulnerability research, and security consulting
          </p>
        </div>

        {/* Mobile: Unique Timeline Design */}
        <div className="block lg:hidden mb-8">
          {/* Current Role - Hero Style */}
          <Card className="mb-6 p-6 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border-accent/40 border-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full translate-y-8 -translate-x-8"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-accent/20 mr-4">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent">Cyber Security Trainer</h3>
                  <p className="text-sm text-muted-foreground">Cywer Learning • Ongoing</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Delivering advanced cybersecurity training programs for professionals and organizations, 
                focusing on practical penetration testing skills.
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline" className="border-accent/30 text-accent text-xs py-1 justify-center">Training Design</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent text-xs py-1 justify-center">VAPT Workshops</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent text-xs py-1 justify-center">Mentoring</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent text-xs py-1 justify-center">Real Scenarios</Badge>
              </div>
            </div>
          </Card>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {keyAccomplishments.map((accomplishment, index) => {
              const IconComponent = accomplishment.icon;
              return (
                <Card key={accomplishment.title} className="p-4 bg-card/50 backdrop-blur-sm border-l-4 border-l-primary relative">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">{accomplishment.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{accomplishment.description}</p>
                    </div>
                  </div>
                  
                  {/* Achievement Number */}
                  <div className="absolute top-2 right-3 text-xs font-bold text-primary/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats Card */}
          <Card className="p-5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <h3 className="text-center font-bold text-primary mb-4 text-base">Professional Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-primary mb-1">6+</div>
                <p className="text-xs text-muted-foreground">Months Training</p>
              </div>
              <div>
                <div className="text-xl font-bold text-accent mb-1">1</div>
                <p className="text-xs text-muted-foreground">Critical CVE</p>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-1">2</div>
                <p className="text-xs text-muted-foreground">Custom Tools</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden lg:block">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold cyber-text text-center mb-8">Key Accomplishments</h3>
            <div className="grid grid-cols-2 gap-6">
              {keyAccomplishments.map((accomplishment, index) => {
              const IconComponent = accomplishment.icon;
              return <Card key={accomplishment.title} className="cyber-glow p-6 bg-card/30 backdrop-blur-sm border-primary/10 animate-on-scroll" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-${accomplishment.color}/10 flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 text-${accomplishment.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{accomplishment.title}</h4>
                        <p className="text-muted-foreground">{accomplishment.description}</p>
                      </div>
                    </div>
                  </Card>;
            })}
            </div>
          </div>

          <Card className="cyber-glow mt-12 p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-bold cyber-text mb-4">Professional Focus</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Specialized in identifying logic-based and business logic flaws in web applications. 
                Expert in VAPT using OWASP Top 10 methodologies and industry-standard tools.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="cyber-glow p-4 rounded-lg bg-card/20">
                  <h4 className="font-semibold text-primary mb-2">VAPT Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced vulnerability assessment and penetration testing methodologies
                  </p>
                </div>
                <div className="cyber-glow p-4 rounded-lg bg-card/20">
                  <h4 className="font-semibold text-accent mb-2">Business Logic</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized in discovering complex business logic vulnerabilities
                  </p>
                </div>
                <div className="cyber-glow p-4 rounded-lg bg-card/20">
                  <h4 className="font-semibold text-cyber-purple mb-2">Remediation</h4>
                  <p className="text-sm text-muted-foreground">
                    Strategic remediation recommendations using industry best practices
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;