import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CVPreview } from "@/components/cv-preview";
import cyberMatrix from "@/assets/hero-cyber-matrix.jpg";
import webDevBg from "@/assets/hero-web-dev.jpg";
import circuitBg from "@/assets/circuit-board-bg.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Web Application Pentester & Developer";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 80);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced layered background */}
      <div className="absolute inset-0">
        {/* Primary cybersecurity matrix background */}
        <div className="absolute inset-0">
          <img 
            src={cyberMatrix} 
            alt="Cybersecurity Matrix Background" 
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
        </div>
        
        {/* Web development overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={webDevBg} 
            alt="Web Development Background" 
            className="w-full h-full object-cover object-center mix-blend-overlay"
            loading="eager"
          />
        </div>
        
        {/* Circuit board accent for mobile responsiveness */}
        <div className="absolute inset-0 opacity-15 block md:hidden">
          <img 
            src={circuitBg} 
            alt="Circuit Board Background" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85"></div>
        
        {/* Cyber glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content - Enhanced responsive layout */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="block lg:hidden text-center">
          <div className="space-y-4 animate-fade-in-up">
            {/* Mobile compact heading */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded"></div>
                <span className="text-xs font-bold text-red-500 tracking-widest">CYBERSECURITY</span>
                <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold cyber-text leading-tight">
                MANISH JANGRA
              </h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                <span className="text-xs font-bold text-blue-500 tracking-widest">WEB DEVELOPER</span>
                <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
              </div>
              <div className="text-sm xs:text-base text-muted-foreground font-medium">
                <span className="border-r-2 border-primary animate-pulse">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Mobile hero card */}
            <div className="bg-card/30 backdrop-blur-md rounded-2xl border border-border/50 p-4 xs:p-5 mx-2 mt-6">
              <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed mb-4">
                Elite cybersecurity specialist with <span className="text-primary font-semibold">6+ months</span> of penetration testing experience.
              </p>
              
              {/* Mobile inline stats */}
              <div className="flex justify-between items-center bg-card/50 rounded-xl p-3 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Certs</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">6+</div>
                  <div className="text-xs text-muted-foreground">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">Multi</div>
                  <div className="text-xs text-muted-foreground">Vulns</div>
                </div>
              </div>

              {/* Mobile CTA buttons with Download CV */}
              <div className="flex flex-col gap-2">
                <div className="w-full mb-2">
                  <CVPreview />
                </div>
                <Button 
                  variant="default" 
                  className="w-full py-2.5 text-sm font-medium hover:scale-[1.01] transition-transform"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full py-2.5 text-sm font-medium hover:scale-[1.01] transition-transform"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block text-center">
          <div className="space-y-8 animate-fade-in-up max-w-5xl mx-auto">
            {/* Desktop grand heading */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded"></div>
                <span className="text-sm font-bold text-red-500 tracking-widest">CYBERSECURITY EXPERT</span>
                <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
              </div>
              <h1 className="text-5xl xl:text-7xl font-bold cyber-text leading-tight tracking-tight">
                MANISH JANGRA
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                <span className="text-sm font-bold text-blue-500 tracking-widest">WEB DEVELOPER</span>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
              </div>
              <div className="text-xl xl:text-3xl text-muted-foreground font-medium">
                <span className="border-r-2 border-primary animate-pulse">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Desktop description with enhanced styling */}
            <div className="bg-gradient-to-r from-card/20 via-card/30 to-card/20 backdrop-blur-md rounded-2xl border border-border/50 p-8 mx-8">
              <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Elite cybersecurity specialist with <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">6+ months</span> of advanced penetration testing experience. 
                Certified in <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">CEH, CRTA, and BSCP</span>.
              </p>
            </div>

            {/* Desktop enhanced stats grid */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <button 
                className="group p-8 text-center bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Certifications</div>
              </button>
              <button 
                className="group p-8 text-center bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">6+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Months Experience</div>
              </button>
              <button 
                className="group p-8 text-center bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">Multi</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Vulnerabilities</div>
              </button>
            </div>

            {/* Desktop elegant CTA buttons */}
            <div className="flex gap-6 justify-center items-center mt-12">
              <Button 
                variant="default" 
                size="lg" 
                className="px-10 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 text-base font-medium hover:scale-105 transition-all duration-300 bg-card/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-200"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;