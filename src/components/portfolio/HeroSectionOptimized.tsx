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

      {/* Content - Mobile-first responsive layout */}
      <div className="relative z-10 text-center w-full px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Mobile-optimized main heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cyber-text leading-tight tracking-tight break-words">
            MANISH JANGRA
          </h1>
          
          {/* Mobile-optimized typing effect subtitle */}
          <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium px-2">
            <span className="border-r-2 border-primary animate-pulse break-words">
              {typedText}
            </span>
          </div>

          {/* Mobile-optimized description */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2 max-w-full sm:max-w-2xl mx-auto">
            Elite cybersecurity specialist with <span className="text-primary font-semibold">6+ months</span> of advanced penetration testing experience. 
            Certified in <span className="text-primary font-semibold">CEH, CRTA, and BSCP</span>.
          </p>

          {/* Mobile-optimized stats cards */}
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto mt-8 sm:mt-12 px-2">
            <button 
              className="p-2 xs:p-3 sm:p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02] min-h-[70px] xs:min-h-[80px] sm:min-h-[90px]"
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary">3+</div>
              <div className="text-xs xs:text-xs sm:text-sm text-muted-foreground leading-tight">Certs</div>
            </button>
            <button 
              className="p-2 xs:p-3 sm:p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02] min-h-[70px] xs:min-h-[80px] sm:min-h-[90px]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary">6+</div>
              <div className="text-xs xs:text-xs sm:text-sm text-muted-foreground leading-tight">Months</div>
            </button>
            <button 
              className="p-2 xs:p-3 sm:p-4 md:p-6 text-center bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-border/50 hover:bg-card/70 transition-all duration-200 hover:scale-[1.02] min-h-[70px] xs:min-h-[80px] sm:min-h-[90px]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary">Multi</div>
              <div className="text-xs xs:text-xs sm:text-sm text-muted-foreground leading-tight">Vulns</div>
            </button>
          </div>

          {/* Mobile-optimized CTA buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-4">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full max-w-xs sm:max-w-sm px-6 sm:px-8 py-3 text-sm sm:text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full max-w-xs sm:max-w-sm px-6 sm:px-8 py-3 text-sm sm:text-base font-medium transition-all duration-200 hover:scale-[1.02]"
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