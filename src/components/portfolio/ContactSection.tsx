import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  MessageSquare,
  Shield,
  Target
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
    <section id="contact" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss cybersecurity projects, collaboration opportunities, or security consulting?
          </p>
        </div>

        {/* Mobile: Redesigned Stacked Layout */}
        <div className="block lg:hidden space-y-6">
          {/* Contact Hero Card */}
          <Card className="p-6 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10 text-center">
              <div className="p-4 rounded-full bg-primary/20 inline-block mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Let's Connect</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Available for cybersecurity consulting, training, and collaboration opportunities.
              </p>
              
              {/* Direct Contact */}
              <div className="space-y-3">
                <a 
                  href="mailto:manishjangra1811@gmail.com"
                  className="flex items-center justify-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">manishjangra1811@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+919350545502"
                  className="flex items-center justify-center space-x-3 p-3 bg-accent/10 rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">+91 93505 45502</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Quick Message Form - Mobile Optimized */}
          <Card className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <div className="text-center mb-4">
              <div className="p-3 rounded-full bg-accent/20 inline-block mb-2">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base font-bold text-accent">Send Message</h3>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // Here we'll add real message authentication
              alert('Message functionality will be connected to a real email service. For now, please use the direct email link above.');
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                  required
                />
              </div>
              
              <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm">
                <option>Security Consulting</option>
                <option>Training Inquiry</option>
                <option>Collaboration</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
                required
              ></textarea>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-background py-3 text-sm font-semibold transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 bg-card/50 border-primary/20 text-center">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <h4 className="text-xs font-semibold text-primary mb-1">VAPT Services</h4>
              <p className="text-xs text-muted-foreground">Web app security testing</p>
            </Card>
            
            <Card className="p-4 bg-card/50 border-accent/20 text-center">
              <Target className="w-6 h-6 text-accent mx-auto mb-2" />
              <h4 className="text-xs font-semibold text-accent mb-1">Security Training</h4>
              <p className="text-xs text-muted-foreground">Custom education programs</p>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="p-4 bg-card/30 border-muted/20">
            <h4 className="text-center font-semibold mb-3 text-sm">Connect on Social</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-lg bg-${social.color}/10 hover:bg-${social.color}/20 transition-all hover:scale-110`}
                    aria-label={social.label}
                  >
                    <IconComponent className={`w-5 h-5 text-${social.color}`} />
                  </a>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Desktop: Original Two-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-bold cyber-text mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing cybersecurity challenges, sharing knowledge, 
                and exploring opportunities to make the digital world more secure. Whether you're 
                looking for security consulting, training, or collaboration on research projects, 
                I'd love to hear from you.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact) => {
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
                  {socialLinks.map((social) => {
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
            <Card className="cyber-glow p-8 bg-card/50 backdrop-blur-sm border-accent/20">
              <h3 className="text-2xl font-bold cyber-text mb-6">Quick Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                // Here we'll add real message authentication
                alert('Message functionality will be connected to a real email service. For now, please use the direct email link.');
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Tell me about your project or inquiry..."
                    required
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
            <Card className="cyber-glow mt-8 p-8 bg-gradient-cyber/10 backdrop-blur-sm border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-lg">Professional Services</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
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