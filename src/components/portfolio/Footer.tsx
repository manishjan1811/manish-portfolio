import { Shield, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="cyber-glow p-2 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold cyber-text">Manish Jangra</span>
            </div>
            <p className="text-muted-foreground">
              Web Application Pentester & Cybersecurity Specialist
            </p>
            <p className="text-sm text-muted-foreground">
              Securing the digital world, one vulnerability at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors cyber-underline text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:manishjangra1811@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors cyber-underline text-sm"
              >
                manishjangra1811@gmail.com
              </a>
              <a 
                href="tel:+919350545502"
                className="block text-muted-foreground hover:text-primary transition-colors cyber-underline text-sm"
              >
                +91 93505 45502
              </a>
              <p className="text-muted-foreground text-sm">
                Hisar, Haryana, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Manish Jangra. Built with</span>
              <Heart className="w-4 h-4 text-primary" />
              <span>and</span>
              <Code className="w-4 h-4 text-accent" />
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Powered by React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;