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
    <section id="about" ref={sectionRef} className="mobile-section-spacing md:py-20 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16 animate-on-scroll">
          <h2 className="mobile-title md:text-4xl md:font-bold md:cyber-text mb-2 md:mb-4">About Me</h2>
          <p className="text-xs md:text-xl md:text-muted-foreground md:max-w-3xl mx-auto text-primary/70">
            Passionate cybersecurity professional specializing in web application security and penetration testing
          </p>
        </div>

        {/* Mobile: Vertical Stack, Desktop: Grid */}
        <div className="mobile-stack md:grid md:grid-cols-3 md:gap-8">
          {/* Education - Mobile Floating Card */}
          <div className="mobile-neon-card mobile-padding-small md:cyber-glow md:p-8 md:bg-card/50 md:backdrop-blur-sm md:border-primary/20 animate-on-scroll mobile-glow-pulse">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
              <div className="p-2 md:p-3 rounded-xl md:rounded-lg bg-primary/20 md:bg-primary/10">
                <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="mobile-title md:text-xl md:font-semibold">Education</h3>
            </div>
            
            <div className="mobile-space-ultra md:space-y-6">
              <div>
                <h4 className="font-bold text-sm md:text-lg md:font-semibold">BCA 3rd Year</h4>
                <p className="text-xs md:text-base text-accent">Om University, Hisar</p>
                <p className="text-xs md:text-sm text-muted-foreground">May 2023 – Present</p>
                <p className="text-xs md:text-sm mt-1 md:mt-2">Studying Cyber Security and more.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm md:text-lg md:font-semibold">Cyber Security</h4>
                <p className="text-xs md:text-base text-accent">Craw Cyber Security, Delhi</p>
                <p className="text-xs md:text-sm text-muted-foreground">July 2023 – Present</p>
                <p className="text-xs md:text-sm mt-1 md:mt-2">
                  Deep knowledge of cybersecurity and ethical hacking techniques.
                  VAPT using advanced tools and methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications - Mobile Glass Card */}
          <div className="mobile-glass-card mobile-padding-small md:cyber-glow md:p-8 md:bg-card/50 md:backdrop-blur-sm md:border-accent/20 animate-on-scroll mobile-glow-pulse">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
              <div className="p-2 md:p-3 rounded-xl md:rounded-lg bg-accent/20 md:bg-accent/10">
                <Award className="w-4 h-4 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="mobile-title md:text-xl md:font-semibold">Certifications</h3>
            </div>
            
            <div className="mobile-space-ultra md:space-y-4">
              <Badge variant="secondary" className="mobile-neon-card text-xs w-full justify-center py-1 md:cyber-glow md:bg-primary/10 md:text-primary md:border-primary/30 md:px-3 md:py-1 md:w-auto">
                CEH - Certified Ethical Hacker
              </Badge>
              <Badge variant="secondary" className="mobile-neon-card text-xs w-full justify-center py-1 md:cyber-glow md:bg-accent/10 md:text-accent md:border-accent/30 md:px-3 md:py-1 md:w-auto">
                CRTA - Certified Red Team Analyst
              </Badge>
              <Badge variant="secondary" className="mobile-neon-card text-xs w-full justify-center py-1 md:cyber-glow md:bg-cyber-purple/10 md:text-cyber-purple md:border-cyber-purple/30 md:px-3 md:py-1 md:w-auto">
                BSCP - Burp Suite Certified Practitioner
              </Badge>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-4">
              Industry-recognized certifications demonstrating expertise in ethical hacking, 
              red team operations, and web application security testing.
            </p>
          </div>

          {/* Specializations - Mobile Neon Card */}
          <div className="mobile-neon-card mobile-padding-small md:cyber-glow md:p-8 md:bg-card/50 md:backdrop-blur-sm md:border-cyber-purple/20 animate-on-scroll mobile-bounce">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
              <div className="p-2 md:p-3 rounded-xl md:rounded-lg bg-cyber-purple/20 md:bg-cyber-purple/10">
                <Target className="w-4 h-4 md:w-6 md:h-6 text-cyber-purple" />
              </div>
              <h3 className="mobile-title md:text-xl md:font-semibold">Specializations</h3>
            </div>
            
            <div className="mobile-space-ultra md:space-y-4">
              <div>
                <h4 className="font-bold text-sm md:font-semibold md:text-base text-primary">Web Application Security</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  OWASP Top 10, business logic flaws, authentication bypasses
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm md:font-semibold md:text-base text-accent">Penetration Testing</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  SQLi, XSS, LFI, and advanced exploitation techniques
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm md:font-semibold md:text-base text-cyber-purple">Security Research</h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Critical vulnerability discovery and responsible disclosure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notable Achievement - Mobile Hero Card */}
        <div className="mobile-hero-card mobile-padding-small mobile-margin-tight md:cyber-glow md:mt-12 md:p-8 md:bg-gradient-cyber/10 md:backdrop-blur-sm md:border-primary/20 animate-on-scroll mobile-glow-pulse">
          <div className="text-center">
            <h3 className="mobile-title md:text-2xl md:font-bold md:cyber-text mb-2 md:mb-4">Notable Achievement</h3>
            <p className="text-xs md:text-lg md:text-muted-foreground leading-relaxed">
              Discovered and reported a <span className="text-primary font-bold md:font-semibold">critical 2FA bypass vulnerability</span> in 
              <span className="text-accent font-bold md:font-semibold"> Epic Games</span>, demonstrating expertise in 
              authentication security and responsible disclosure practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;