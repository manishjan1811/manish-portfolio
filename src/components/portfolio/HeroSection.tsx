import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Code, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

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
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 matrix-bg grid-pattern"></div>
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Cybersecurity Professional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Floating elements - SMALLER on mobile */}
      <div className="absolute top-20 left-2 md:left-10 cyber-glow p-2 md:p-4 rounded-lg bg-card/10 backdrop-blur-sm float">
        <Shield className="w-4 h-4 md:w-8 md:h-8 text-primary" />
      </div>
      <div className="absolute top-32 right-2 md:right-20 cyber-glow p-2 md:p-4 rounded-lg bg-card/10 backdrop-blur-sm float" style={{ animationDelay: '1s' }}>
        <Code className="w-4 h-4 md:w-8 md:h-8 text-accent" />
      </div>
      <div className="absolute bottom-32 left-2 md:left-20 cyber-glow p-2 md:p-4 rounded-lg bg-card/10 backdrop-blur-sm float" style={{ animationDelay: '2s' }}>
        <Terminal className="w-4 h-4 md:w-8 md:h-8 text-cyber-purple" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto mobile-px-tight">
        <div className="space-y-6 sm:space-y-6 md:space-y-8 animate-fade-in-up">
          {/* Main heading - HUGE on mobile */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold cyber-text glitch-text leading-tight">
            MANISH JANGRA
          </h1>
          
          {/* Typing effect subtitle - BIG on mobile */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-code">
            <span className="border-r-2 border-primary animate-blink">
              {typedText}
            </span>
          </div>

          {/* Description - SMALLER on mobile */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            Elite cybersecurity specialist with <span className="text-primary font-semibold">6+ months</span> of advanced penetration testing experience. 
            Certified in <span className="text-accent font-semibold">CEH, CRTA, and BSCP</span>. Expert in discovering critical vulnerabilities 
            and securing web applications against sophisticated threats.
          </p>

          {/* Mobile Hero Stats - SMALLER on mobile */}
          <div className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-3 md:gap-8 max-w-4xl mx-auto mt-4 md:mt-12">
            <button 
              className="mobile-hologram-card p-2 md:p-6 text-center mobile-slide-in mobile-glow-pulse cursor-pointer hover:scale-105 transition-transform"
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg md:text-3xl font-bold text-primary">3+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Certs</div>
            </button>
            <button 
              className="mobile-hologram-card p-2 md:p-6 text-center mobile-slide-in mobile-glow-pulse cursor-pointer hover:scale-105 transition-transform" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg md:text-3xl font-bold text-primary">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Months</div>
            </button>
            <button 
              className="mobile-hologram-card p-2 md:p-6 text-center mobile-slide-in mobile-glow-pulse cursor-pointer hover:scale-105 transition-transform" 
              style={{ animationDelay: '0.4s' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg md:text-3xl font-bold text-primary">Multi</div>
              <div className="text-xs md:text-sm text-muted-foreground">Vulns</div>
            </button>
          </div>

          {/* CTA Buttons - BIG on mobile */}
          <div className="flex flex-col gap-3 justify-center items-center mt-8 sm:mt-6 md:mt-12">
            <Button 
              variant="default" 
              size="lg" 
              className="cyber-glow bg-gradient-cyber hover:shadow-cyber w-full max-w-xs px-12 py-6 text-xl md:text-lg font-bold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full max-w-xs px-12 py-6 text-xl md:text-lg font-bold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cyber-glow p-3 rounded-full bg-card/10 backdrop-blur-sm pulse-glow hover:scale-110 transition-transform"
      >
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;