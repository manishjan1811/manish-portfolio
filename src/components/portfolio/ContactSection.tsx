import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  MessageSquare
} from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manishjangra1811@gmail.com",
      href: "mailto:manishjangra1811@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93505 45502",
      href: "tel:+919350545502",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hisar, Haryana, India",
      href: "#",
      color: "cyber-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "accent"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "cyber-purple"
    }
  ];

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
    <section id="contact" ref={sectionRef} className="mobile-py-tight mobile-px-tight bg-gradient-matrix pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16 animate-on-scroll">
          <h2 className="mobile-title md:text-4xl md:font-bold md:cyber-text mb-2 md:mb-4">Get In Touch</h2>
          <p className="text-xs md:text-xl md:text-muted-foreground md:max-w-3xl mx-auto text-primary/70">
            Ready to discuss cybersecurity projects, collaboration opportunities, or security consulting?
          </p>
        </div>

        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0 mobile-gap-tight">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="cyber-glow p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-primary/20 rounded-xl lg:rounded-lg">
              <h3 className="text-2xl font-bold cyber-text mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing cybersecurity challenges, sharing knowledge, 
                and exploring opportunities to make the digital world more secure. Whether you're 
                looking for security consulting, training, or collaboration on research projects, 
                I'd love to hear from you.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center space-x-4 group">
                      <div className={`p-3 rounded-lg bg-${contact.color}/10 group-hover:bg-${contact.color}/20 transition-colors`}>
                        <IconComponent className={`w-5 h-5 text-${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <a 
                          href={contact.href}
                          className={`text-${contact.color} hover:underline font-medium cyber-underline`}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`cyber-glow p-3 rounded-lg bg-${social.color}/10 hover:bg-${social.color}/20 transition-all duration-300 hover:scale-110`}
                        aria-label={social.label}
                      >
                        <IconComponent className={`w-5 h-5 text-${social.color}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Contact Form */}
          <div className="animate-on-scroll">
            <Card className="cyber-glow p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-accent/20 rounded-xl lg:rounded-lg">
              <h3 className="text-2xl font-bold cyber-text mb-6">Quick Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option>Security Consulting</option>
                    <option>Training Inquiry</option>
                    <option>Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full cyber-glow bg-gradient-cyber hover:shadow-cyber py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Professional Services */}
            <Card className="cyber-glow mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 lg:p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20 rounded-xl lg:rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-lg">Professional Services</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-primary mb-1">Security Consulting</h5>
                  <p className="text-muted-foreground">Web application security assessments</p>
                </div>
                <div>
                  <h5 className="font-medium text-accent mb-1">Penetration Testing</h5>
                  <p className="text-muted-foreground">Comprehensive VAPT services</p>
                </div>
                <div>
                  <h5 className="font-medium text-cyber-purple mb-1">Security Training</h5>
                  <p className="text-muted-foreground">Custom cybersecurity education</p>
                </div>
                <div>
                  <h5 className="font-medium text-cyber-orange mb-1">Tool Development</h5>
                  <p className="text-muted-foreground">Custom security automation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;