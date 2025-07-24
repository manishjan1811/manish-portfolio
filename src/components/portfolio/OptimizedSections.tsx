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
      className={`py-16 md:py-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
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
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      {title}
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          With <span className="text-primary font-semibold">6+ months</span> of hands-on penetration testing experience, 
          I specialize in web application security and vulnerability assessment. My journey in cybersecurity 
          is driven by a passion for protecting digital assets and staying ahead of emerging threats.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I hold industry-recognized certifications including <span className="text-primary font-semibold">CEH</span>, 
          <span className="text-primary font-semibold"> CRTA</span>, and <span className="text-primary font-semibold">BSCP</span>, 
          demonstrating my commitment to continuous learning and professional development.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: Shield, label: "Security Expert", value: "6+ Months" },
          { icon: Award, label: "Certifications", value: "3 Active" },
          { icon: Code2, label: "Languages", value: "5+" },
          { icon: Globe, label: "Projects", value: "Multiple" }
        ].map((item, index) => (
          <Card key={index} className="p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-colors duration-200">
            <CardContent className="p-0 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// Skills Section
export const SkillsSectionOptimized = () => {
  const skills = [
    { name: "Web Application Security", level: 95, category: "Security" },
    { name: "Penetration Testing", level: 90, category: "Security" },
    { name: "Vulnerability Assessment", level: 88, category: "Security" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "JavaScript", level: 80, category: "Programming" },
    { name: "Linux", level: 90, category: "Systems" },
    { name: "Network Security", level: 85, category: "Security" },
    { name: "OWASP Top 10", level: 95, category: "Security" }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <SectionWrapper id="skills">
      <SectionHeading 
        title="Skills & Expertise"
        description="Technical competencies and areas of specialization"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <Card key={category} className="p-6 bg-card/50 border-border/50">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === category).map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
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
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground">
              Whether you need security consulting, penetration testing, or want to collaborate 
              on cybersecurity projects, I'm here to help.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">jangramanish708@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Available for remote work</span>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-card/50 border-border/50">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
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