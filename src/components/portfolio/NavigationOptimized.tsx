import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DownloadCV } from "@/components/download-cv";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/85 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5' 
        : 'bg-gradient-to-b from-background/20 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Enhanced logo with cybersecurity theme */}
          <div className="flex items-center space-x-3 group">
            <div className={`relative p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary/15 shadow-lg shadow-primary/20' 
                : 'bg-primary/10 group-hover:bg-primary/20'
            }`}>
              <Terminal className="w-5 h-5 text-primary" />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                MANISH<span className="text-primary">.DEV</span>
              </span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Security Expert
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={`flex items-center space-x-1 p-1 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-card/30 backdrop-blur-md border border-border/30' 
                : 'bg-card/20 backdrop-blur-sm'
            }`}>
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 group overflow-hidden ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-foreground hover:bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/40'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Interactive Features */}
            <div className="flex items-center space-x-2">
              <DownloadCV />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Interactive Features & Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'hover:bg-primary/10 hover:shadow-lg' 
                  : 'hover:bg-card/30'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="border-t border-primary/10 bg-background/95 backdrop-blur-xl shadow-xl">
              <div className="px-3 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group block w-full text-left px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-primary/5 hover:shadow-md relative overflow-hidden"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {item.name}
                      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors duration-300"></div>
                    </span>
                    {/* Slide in effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;