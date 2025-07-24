import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
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
    }, 80);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Subtle hero image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={heroImage} 
          alt="Cybersecurity Professional" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content - Apple-style clean layout */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in-up">
          {/* Clean main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold cyber-text leading-tight tracking-tight">
            MANISH JANGRA
          </h1>
          
          {/* Typing effect subtitle */}
          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
            <span className="border-r-2 border-primary animate-pulse">
              {typedText}
            </span>
          </div>

          {/* Clean description */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Elite cybersecurity specialist with <span className="text-primary font-semibold">6+ months</span> of advanced penetration testing experience. 
            Certified in <span className="text-primary font-semibold">CEH, CRTA, and BSCP</span>.
          </p>

          {/* Apple-style stats cards */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-12">
            <button 
              className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </button>
            <button 
              className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Months Exp</div>
            </button>
            <button 
              className="p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">Multi</div>
              <div className="text-sm text-muted-foreground">Vulnerabilities</div>
            </button>
          </div>

          {/* Apple-style CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-3 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
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