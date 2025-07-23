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

      {/* Floating elements */}
      <div className="absolute top-20 left-10 cyber-glow p-4 rounded-lg bg-card/10 backdrop-blur-sm float">
        <Shield className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-32 right-20 cyber-glow p-4 rounded-lg bg-card/10 backdrop-blur-sm float" style={{ animationDelay: '1s' }}>
        <Code className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-32 left-20 cyber-glow p-4 rounded-lg bg-card/10 backdrop-blur-sm float" style={{ animationDelay: '2s' }}>
        <Terminal className="w-8 h-8 text-cyber-purple" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-responsive-xl font-bold cyber-text glitch-text">
            MANISH JANGRA
          </h1>
          
          {/* Typing effect subtitle */}
          <div className="text-responsive-lg text-muted-foreground font-code">
            <span className="border-r-2 border-primary animate-blink">
              {typedText}
            </span>
          </div>

          {/* Description */}
          <p className="text-responsive-md max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            Elite cybersecurity specialist with <span className="text-primary font-semibold">6+ months</span> of advanced penetration testing experience. 
            Certified in <span className="text-accent font-semibold">CEH, CRTA, and BSCP</span>. Expert in discovering critical vulnerabilities 
            and securing web applications against sophisticated threats.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="cyber-glow p-6 rounded-lg bg-card/10 backdrop-blur-sm animate-scale-in">
              <div className="text-3xl font-bold cyber-text">3+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="cyber-glow p-6 rounded-lg bg-card/10 backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold cyber-text">6+</div>
              <div className="text-sm text-muted-foreground">Months Experience</div>
            </div>
            <div className="cyber-glow p-6 rounded-lg bg-card/10 backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold cyber-text">Multiple</div>
              <div className="text-sm text-muted-foreground">Critical Vulnerabilities Found</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              variant="default" 
              size="lg" 
              className="cyber-glow bg-gradient-cyber hover:shadow-cyber px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
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