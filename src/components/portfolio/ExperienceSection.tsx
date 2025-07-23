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
  return <section id="experience" ref={sectionRef} className="mobile-py-tight mobile-px-tight bg-gradient-matrix pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16 animate-on-scroll">
          <h2 className="mobile-title md:text-4xl md:font-bold md:cyber-text mb-2 md:mb-4">Experience</h2>
          <p className="text-xs md:text-xl md:text-muted-foreground md:max-w-3xl mx-auto text-primary/70">
            Professional journey in cybersecurity training, vulnerability research, and security consulting
          </p>
        </div>


        {/* Key Accomplishments */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold cyber-text text-center mb-8">Key Accomplishments</h3>
          <div className="flex flex-col space-y-3 md:grid md:grid-cols-2 md:space-y-0 mobile-gap-tight">
            {keyAccomplishments.map((accomplishment, index) => {
            const IconComponent = accomplishment.icon;
            return <Card key={accomplishment.title} className="cyber-glow p-3 sm:p-4 lg:p-6 bg-card/30 backdrop-blur-sm border-primary/10 animate-on-scroll rounded-xl md:rounded-lg" style={{
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

        {/* Professional Focus */}
        <Card className="cyber-glow mt-6 sm:mt-8 md:mt-12 p-4 sm:p-6 lg:p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll rounded-xl lg:rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold cyber-text mb-4">Professional Focus</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Specialized in identifying logic-based and business logic flaws in web applications. 
              Expert in VAPT using OWASP Top 10 methodologies and industry-standard tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>;
};
export default ExperienceSection;