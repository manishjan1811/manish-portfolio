import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  GraduationCap, 
  Shield, 
  Users, 
  Target,
  CheckCircle
} from "lucide-react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "APT Trainer",
      company: "Online Platform",
      type: "Training & Education",
      duration: "6+ Months",
      description: "Advanced Persistent Threat (APT) training specialist, educating cybersecurity professionals on sophisticated attack techniques and defense strategies.",
      achievements: [
        "Developed comprehensive APT training curriculum",
        "Trained multiple cybersecurity professionals",
        "Created hands-on practical exercises",
        "Specialized in real-world attack simulations"
      ],
      icon: Shield,
      color: "primary"
    },
    {
      title: "Cyber Security Trainer",
      company: "Cywer Learning",
      type: "Corporate Training",
      duration: "Ongoing",
      description: "Delivering advanced cybersecurity training programs for professionals and organizations, focusing on practical penetration testing skills.",
      achievements: [
        "Designed advanced security training modules",
        "Conducted VAPT workshops and seminars",
        "Mentored junior security professionals",
        "Created real-world hacking scenarios"
      ],
      icon: GraduationCap,
      color: "accent"
    },
    {
      title: "Cyber Security Trainer",
      company: "Sunrise Public School",
      type: "Educational Institution",
      duration: "Ongoing",
      description: "Introducing cybersecurity concepts to students and faculty, building security awareness and foundational knowledge.",
      achievements: [
        "Developed age-appropriate security curriculum",
        "Conducted security awareness sessions",
        "Established cybersecurity best practices",
        "Created educational security resources"
      ],
      icon: Users,
      color: "cyber-purple"
    }
  ];

  const keyAccomplishments = [
    {
      title: "Critical Vulnerability Discovery",
      description: "2FA bypass in Epic Games platform",
      icon: Target,
      color: "destructive"
    },
    {
      title: "Multiple Public Disclosures",
      description: "Responsible vulnerability reporting",
      icon: Shield,
      color: "primary"
    },
    {
      title: "Advanced Tool Development",
      description: "Created Reconbro.sh and Toolsbro.sh",
      icon: CheckCircle,
      color: "accent"
    },
    {
      title: "Professional Training",
      description: "6+ months of APT training experience",
      icon: GraduationCap,
      color: "cyber-purple"
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
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg font-bold cyber-text mb-4">Experience</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Professional journey in cybersecurity training, vulnerability research, and security consulting
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={exp.title} className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-${exp.color}/10`}>
                        <IconComponent className={`w-6 h-6 text-${exp.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className={`text-${exp.color} font-medium`}>{exp.company}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/30`}>
                      {exp.type}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">{exp.duration}</p>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key Accomplishments */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold cyber-text text-center mb-8">Key Accomplishments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyAccomplishments.map((accomplishment, index) => {
              const IconComponent = accomplishment.icon;
              return (
                <Card key={accomplishment.title} className="cyber-glow p-6 bg-card/30 backdrop-blur-sm border-primary/10 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-${accomplishment.color}/10 flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${accomplishment.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{accomplishment.title}</h4>
                      <p className="text-muted-foreground">{accomplishment.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Professional Focus */}
        <Card className="cyber-glow mt-12 p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll">
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
    </section>
  );
};

export default ExperienceSection;