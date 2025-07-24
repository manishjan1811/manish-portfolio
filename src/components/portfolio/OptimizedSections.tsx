import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code2, Database, Shield, Globe, Mail, MapPin, 
  Calendar, ExternalLink, Award, Briefcase 
} from "lucide-react";

// Apple-style section component with intersection observer
const SectionWrapper = ({ 
  children, 
  id, 
  className = "" 
}: { 
  children: React.ReactNode; 
  id: string; 
  className?: string; 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
};

// Clean heading component
const SectionHeading = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string; 
}) => (
  <div className="text-center mb-8 sm:mb-12 md:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
      {title}
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
      {description}
    </p>
  </div>
);

// About Section
export const AboutSectionOptimized = () => (
  <SectionWrapper id="about" className="bg-muted/20">
    <SectionHeading 
      title="About Me"
      description="Passionate cybersecurity professional dedicated to securing digital environments"
    />
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="space-y-4 sm:space-y-6 order-2 sm:order-1">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
          With <span className="text-primary font-semibold">6+ months</span> of hands-on penetration testing experience, 
          I specialize in web application security and vulnerability assessment. My journey in cybersecurity 
          is driven by a passion for protecting digital assets and staying ahead of emerging threats.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
          I hold industry-recognized certifications including <span className="text-primary font-semibold">CEH</span>, 
          <span className="text-primary font-semibold"> CRTA</span>, and <span className="text-primary font-semibold">BSCP</span>, 
          demonstrating my commitment to continuous learning and professional development.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 sm:order-2">
        {[
          { icon: Shield, label: "Security Expert", value: "6+ Months" },
          { icon: Award, label: "Certifications", value: "3 Active" },
          { icon: Code2, label: "Languages", value: "5+" },
          { icon: Globe, label: "Projects", value: "Multiple" }
        ].map((item, index) => (
          <Card key={index} className="p-3 sm:p-4 md:p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-colors duration-200">
            <CardContent className="p-0 text-center">
              <item.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{item.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{item.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// Skills Section
export const SkillsSectionOptimized = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Web Application Security", level: 95, category: "Security", icon: "🛡️" },
    { name: "Penetration Testing", level: 90, category: "Security", icon: "🎯" },
    { name: "Vulnerability Assessment", level: 88, category: "Security", icon: "🔍" },
    { name: "OWASP Top 10", level: 95, category: "Security", icon: "🔴" },
    { name: "Python", level: 85, category: "Programming", icon: "🐍" },
    { name: "Bash Scripting", level: 80, category: "Programming", icon: "💻" },
    { name: "JavaScript", level: 80, category: "Programming", icon: "⚡" },
    { name: "Linux", level: 90, category: "Systems", icon: "🐧" },
    { name: "Network Security", level: 85, category: "Systems", icon: "🌐" }
  ];

  const tools = ["Burp Suite", "Kali Linux", "Nmap", "Metasploit", "Wireshark", "SQLMap", "Hydra", "John the Ripper", "Nessus", "OWASP ZAP", "Nikto", "Gobuster"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-6 sm:py-8 md:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">🚀 Skills & Expertise</h2>
          <p className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            Advanced cybersecurity and penetration testing capabilities
          </p>
        </div>

        {/* Mobile: Ultra Compact Design */}
        <div className="block lg:hidden">
          {/* Core Skills - Circular Progress */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-blue-400 flex items-center">
              <span className="mr-2">🎯</span>
              Core Expertise
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {skills.filter(skill => skill.category === "Security").slice(0, 6).map((skill, index) => (
                <div key={skill.name} className="text-center">
                  <div className="relative w-14 h-14 mx-auto mb-2">
                    <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                        className="text-muted/20"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray={`${inView ? skill.level : 0}, 100`}
                        strokeLinecap="round"
                        className="text-blue-500 transition-all duration-1000"
                        style={{ transitionDelay: `${index * 150}ms` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-xs font-medium truncate">{skill.name.split(' ')[0]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programming & Systems - Compact Bars */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-emerald-400 flex items-center">
              <span className="mr-2">💻</span>
              Tech Stack
            </h3>
            <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
              <div className="space-y-2">
                {skills.filter(skill => skill.category !== "Security").map((skill, index) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-xs font-medium flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                          style={{ 
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100 + 300}ms`
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Tools - Tag Cloud */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-purple-400 flex items-center">
              <span className="mr-2">🛠️</span>
              Security Arsenal
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {tools.slice(0, 10).map((tool, index) => (
                <span 
                  key={tool} 
                  className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-md border border-purple-500/30 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-orange-400 flex items-center">
              <span className="mr-2">🏆</span>
              Certifications
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {["CEH", "CRTA", "BSCP"].map((cert, index) => (
                <div key={cert} className="p-2 text-center rounded-lg bg-orange-500/20 border border-orange-500/30">
                  <div className="text-orange-400 font-bold text-sm">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Professional Layout */}
        <div className="hidden lg:block">
          {/* Skills Categories Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {["Security", "Programming", "Systems"].map((category, categoryIndex) => (
              <Card key={category} className="p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                    <span className="mr-3 text-2xl">
                      {category === "Security" ? "🛡️" : category === "Programming" ? "💻" : "⚙️"}
                    </span>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium flex items-center">
                            <span className="mr-2">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: inView ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 4 + index) * 150}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security Tools Grid */}
          <Card className="p-6 bg-card/50 border-border/50 mb-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <span className="mr-3 text-2xl">🛠️</span>
                Security Tools Arsenal
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={tool} 
                    className="p-3 rounded-lg bg-muted/20 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 text-center group"
                  >
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "CEH", desc: "Certified Ethical Hacker", color: "blue" },
              { name: "CRTA", desc: "Certified Red Team Analyst", color: "green" },
              { name: "BSCP", desc: "Burp Suite Certified Practitioner", color: "purple" }
            ].map((cert, index) => (
              <Card key={cert.name} className="p-6 bg-card/30 border-border/50 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${cert.color}-500/20 flex items-center justify-center`}>
                    <Award className={`w-8 h-8 text-${cert.color}-500`} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
export const ContactSectionOptimized = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <SectionWrapper id="contact" className="bg-muted/20">
      <SectionHeading 
        title="Get In Touch"
        description="Ready to discuss cybersecurity projects or collaboration opportunities"
      />
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-6 sm:space-y-8 order-2 sm:order-1">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Let's Connect</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Whether you need security consulting, penetration testing, or want to collaborate 
              on cybersecurity projects, I'm here to help.
            </p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base text-muted-foreground break-all">jangramanish708@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base text-muted-foreground">Available for remote work</span>
            </div>
          </div>
        </div>

        <Card className="p-4 sm:p-5 md:p-6 bg-card/50 border-border/50 order-1 sm:order-2">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default { SectionWrapper, SectionHeading, AboutSectionOptimized, SkillsSectionOptimized, ContactSectionOptimized };