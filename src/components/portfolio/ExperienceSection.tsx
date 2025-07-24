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

        {/* Mobile: Horizontal Scrolling Experience Cards */}
        <div className="block lg:hidden mb-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2">
            {/* Training Experience Card */}
            <Card className="flex-shrink-0 w-72 p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 border-2">
              <div className="text-center mb-4">
                <div className="p-3 rounded-full bg-accent/10 inline-block mb-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-bold text-accent mb-1">Cyber Security Trainer</h3>
                <p className="text-xs text-muted-foreground">Cywer Learning</p>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-xs text-muted-foreground leading-relaxed">Advanced cybersecurity training programs for professionals and organizations</p>
                <div className="space-y-1">
                  <p className="text-xs text-accent">• VAPT workshops</p>
                  <p className="text-xs text-accent">• Real-world scenarios</p>
                  <p className="text-xs text-accent">• Professional mentoring</p>
                </div>
              </div>
            </Card>

            {/* Key Achievements Card */}
            <Card className="flex-shrink-0 w-72 p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 border-2">
              <div className="text-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-1">Key Achievements</h3>
              </div>
              <div className="space-y-2 text-center">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-primary">Epic Games 2FA Bypass</p>
                  <p className="text-xs text-muted-foreground">Critical vulnerability discovery</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-primary">Tool Development</p>
                  <p className="text-xs text-muted-foreground">Reconbro.sh & Toolsbro.sh</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-primary">Public Disclosures</p>
                  <p className="text-xs text-muted-foreground">Responsible reporting</p>
                </div>
              </div>
            </Card>

            {/* Expertise Focus Card */}
            <Card className="flex-shrink-0 w-72 p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30 border-2">
              <div className="text-center mb-4">
                <div className="p-3 rounded-full bg-green-500/10 inline-block mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-base font-bold text-green-400 mb-1">Expertise Focus</h3>
              </div>
              <div className="space-y-2 text-center">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-green-400">Logic-Based Flaws</p>
                  <p className="text-xs text-muted-foreground">Business logic vulnerabilities</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-green-400">OWASP Top 10</p>
                  <p className="text-xs text-muted-foreground">Industry-standard methodologies</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-green-400">VAPT Expert</p>
                  <p className="text-xs text-muted-foreground">Advanced assessment techniques</p>
                </div>
              </div>
            </Card>
          </div>
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