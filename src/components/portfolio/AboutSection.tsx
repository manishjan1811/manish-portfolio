import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="mobile-py-tight mobile-px-tight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-responsive-lg font-bold cyber-text mb-4">About Me</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity professional specializing in web application security and penetration testing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mobile-gap-tight">
          {/* Education */}
          <Card className="cyber-glow mobile-card-padding bg-card/50 backdrop-blur-sm border-primary/20 animate-on-scroll">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="mobile-space-tight">
              <div>
                <h4 className="font-semibold text-lg">BCA 3rd Year</h4>
                <p className="text-accent">Om University, Hisar</p>
                <p className="text-sm text-muted-foreground">May 2023 – Present</p>
                <p className="text-sm mt-2">Studying Cyber Security and more.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg">Cyber Security</h4>
                <p className="text-accent">Craw Cyber Security, Delhi</p>
                <p className="text-sm text-muted-foreground">July 2023 – Present</p>
                <p className="text-sm mt-2">
                  Deep knowledge of cybersecurity and ethical hacking techniques.
                  VAPT using advanced tools and methodologies.
                </p>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="cyber-glow mobile-card-padding bg-card/50 backdrop-blur-sm border-accent/20 animate-on-scroll">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <Badge variant="secondary" className="cyber-glow bg-primary/10 text-primary border-primary/30 px-3 py-1">
                CEH - Certified Ethical Hacker
              </Badge>
              <Badge variant="secondary" className="cyber-glow bg-accent/10 text-accent border-accent/30 px-3 py-1">
                CRTA - Certified Red Team Analyst
              </Badge>
              <Badge variant="secondary" className="cyber-glow bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30 px-3 py-1">
                BSCP - Burp Suite Certified Practitioner
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Industry-recognized certifications demonstrating expertise in ethical hacking, 
              red team operations, and web application security testing.
            </p>
          </Card>

          {/* Specializations */}
          <Card className="cyber-glow mobile-card-padding bg-card/50 backdrop-blur-sm border-cyber-purple/20 animate-on-scroll">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-cyber-purple/10">
                <Target className="w-6 h-6 text-cyber-purple" />
              </div>
              <h3 className="text-xl font-semibold">Specializations</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">Web Application Security</h4>
                <p className="text-sm text-muted-foreground">
                  OWASP Top 10, business logic flaws, authentication bypasses
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-accent">Penetration Testing</h4>
                <p className="text-sm text-muted-foreground">
                  SQLi, XSS, LFI, and advanced exploitation techniques
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-cyber-purple">Security Research</h4>
                <p className="text-sm text-muted-foreground">
                  Critical vulnerability discovery and responsible disclosure
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Notable Achievement */}
        <Card className="cyber-glow mt-6 sm:mt-8 md:mt-12 mobile-card-padding bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 animate-on-scroll">
          <div className="text-center">
            <h3 className="text-2xl font-bold cyber-text mb-4">Notable Achievement</h3>
            <p className="text-lg text-muted-foreground">
              Discovered and reported a <span className="text-primary font-semibold">critical 2FA bypass vulnerability</span> in 
              <span className="text-accent font-semibold"> Epic Games</span>, demonstrating expertise in 
              authentication security and responsible disclosure practices.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;