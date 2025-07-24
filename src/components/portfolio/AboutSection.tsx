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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-12">
          {/* Education Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-primary/5 animate-on-scroll">
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-sm md:text-base">BCA 3rd Year</h4>
                  <p className="text-sm text-accent font-medium">Om University, Hisar</p>
                  <p className="text-xs text-muted-foreground">May 2023 – Present</p>
                  <p className="text-sm mt-2 text-muted-foreground">Specializing in Cyber Security and advanced computing technologies.</p>
                </div>
                
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold text-sm md:text-base">Cyber Security Certification</h4>
                  <p className="text-sm text-accent font-medium">Craw Cyber Security, Delhi</p>
                  <p className="text-xs text-muted-foreground">July 2023 – Present</p>
                  <p className="text-sm mt-2 text-muted-foreground">Advanced cybersecurity training with hands-on VAPT experience.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20 bg-gradient-to-br from-background to-accent/5 animate-on-scroll">
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
                  <p className="font-medium text-sm text-primary">CEH - Certified Ethical Hacker</p>
                  <p className="text-xs text-muted-foreground mt-1">Industry standard for ethical hacking</p>
                </div>
                <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/40 transition-colors">
                  <p className="font-medium text-sm text-accent">CRTA - Certified Red Team Analyst</p>
                  <p className="text-xs text-muted-foreground mt-1">Advanced red team operations</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <p className="font-medium text-sm text-purple-400">BSCP - Burp Suite Certified</p>
                  <p className="text-xs text-muted-foreground mt-1">Web application security testing</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Specializations Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-purple-500/20 bg-gradient-to-br from-background to-purple-500/5 animate-on-scroll md:col-span-2 lg:col-span-1">
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold">Core Expertise</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-primary text-sm">Web Application Security</h4>
                    <p className="text-xs text-muted-foreground">OWASP Top 10, business logic flaws, authentication bypasses</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-accent text-sm">Penetration Testing</h4>
                    <p className="text-xs text-muted-foreground">Advanced SQLi, XSS, LFI exploitation techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-purple-400 text-sm">Security Research</h4>
                    <p className="text-xs text-muted-foreground">Vulnerability discovery and responsible disclosure</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Notable Achievement Highlight */}
        <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-r from-primary/5 via-accent/5 to-purple-500/5 animate-on-scroll">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50"></div>
          <div className="relative p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Security Research Achievement</h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Successfully identified and responsibly disclosed a <span className="text-primary font-semibold">critical 2FA bypass vulnerability</span> in 
              <span className="text-accent font-semibold"> Epic Games</span>, demonstrating advanced skills in authentication security analysis and ethical disclosure practices.
            </p>
            <div className="mt-4 flex justify-center">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                Critical Vulnerability Research
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;