import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Database, Shield, Globe, Mail, MapPin, Calendar, ExternalLink, Award, Briefcase, GraduationCap, Target, Trophy } from "lucide-react";

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
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id={id} ref={sectionRef} className={`py-8 sm:py-12 md:py-16 lg:py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>;
};

// Clean heading component
const SectionHeading = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => <div className="text-center mb-8 sm:mb-12 md:mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
      {title}
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
      {description}
    </p>
  </div>;

// About Section with Separate Mobile/Desktop Designs
export const AboutSectionOptimized = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`py-8 md:py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate cybersecurity professional dedicated to securing digital environments
          </p>
        </div>

        {/* Mobile Design: Vertical Cards Stack */}
        <div className="block md:hidden space-y-4">
          {/* Personal Info Card - Mobile */}
          <Card className="group bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Cybersecurity Expert</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                With <span className="text-primary font-semibold">6+ months</span> of hands-on penetration testing experience, 
                I specialize in web application security and vulnerability assessment.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                  Penetration Testing
                </Badge>
                <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
                  Web Security
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Education Cards - Mobile */}
          <div className="grid grid-cols-1 gap-3">
            <Card className="bg-gradient-to-r from-accent/5 to-purple-500/5 border-accent/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-sm">BCA 3rd Year</h4>
                </div>
                <p className="text-xs text-accent font-medium">Om University, Hisar</p>
                <p className="text-xs text-muted-foreground">May 2023 – Present</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-purple-500/5 to-primary/5 border-purple-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <h4 className="font-semibold text-sm">Cybersecurity Training</h4>
                </div>
                <p className="text-xs text-purple-400 font-medium">Craw Cyber Security, Delhi</p>
                <p className="text-xs text-muted-foreground">July 2023 – Present</p>
              </CardContent>
            </Card>
          </div>

          {/* Certifications - Mobile */}
          <Card className="bg-gradient-to-r from-emerald-500/5 to-blue-500/5 border-emerald-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-emerald-500" />
                <h3 className="font-semibold">Certifications</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: "CEH", full: "Certified Ethical Hacker", color: "emerald" },
                  { name: "CRTA", full: "Certified Red Team Analyst", color: "blue" },
                  { name: "BSCP", full: "Burp Suite Certified", color: "purple" }
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-background/50">
                    <span className="text-sm font-medium">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.full}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievement Highlight - Mobile */}
          <Card className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-orange-500/20">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Notable Achievement</h3>
              <p className="text-sm text-muted-foreground">
                Discovered a <span className="text-orange-500 font-semibold">critical 2FA bypass</span> in 
                <span className="text-red-500 font-semibold"> Epic Games</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Design: Professional Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Info Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Cybersecurity Professional</h3>
                      <p className="text-muted-foreground">Penetration Testing & Web Security Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
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

                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                      Web Application Security
                    </Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                      Penetration Testing
                    </Badge>
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20">
                      VAPT
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Education Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <GraduationCap className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Education</h4>
                        <p className="text-sm text-muted-foreground">Academic Background</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-2 border-accent/30 pl-4">
                        <h5 className="font-medium">BCA 3rd Year</h5>
                        <p className="text-sm text-accent">Om University, Hisar</p>
                        <p className="text-xs text-muted-foreground">May 2023 – Present</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-purple-500/20 bg-gradient-to-br from-background to-purple-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <Target className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Training</h4>
                        <p className="text-sm text-muted-foreground">Professional Development</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-2 border-purple-500/30 pl-4">
                        <h5 className="font-medium">Cybersecurity</h5>
                        <p className="text-sm text-purple-400">Craw Cyber Security, Delhi</p>
                        <p className="text-xs text-muted-foreground">July 2023 – Present</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stats & Certifications Column */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="hover:shadow-lg transition-all duration-300 border-emerald-500/20 bg-gradient-to-br from-background to-emerald-500/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-500" />
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Experience", value: "6+ Months", icon: Briefcase },
                      { label: "Certifications", value: "3 Active", icon: Award },
                      { label: "Specialization", value: "Web Security", icon: Shield },
                      { label: "Projects", value: "Multiple", icon: Globe }
                    ].map((stat, index) => (
                      <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-emerald-500/5 transition-colors">
                        <div className="flex items-center gap-2">
                          <stat.icon className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-medium">{stat.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-emerald-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="hover:shadow-lg transition-all duration-300 border-blue-500/20 bg-gradient-to-br from-background to-blue-500/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "CEH", full: "Certified Ethical Hacker", color: "text-blue-500" },
                      { name: "CRTA", full: "Certified Red Team Analyst", color: "text-emerald-500" },
                      { name: "BSCP", full: "Burp Suite Certified Practitioner", color: "text-purple-400" }
                    ].map((cert) => (
                      <div key={cert.name} className="p-3 rounded-lg bg-background/50 hover:bg-blue-500/5 transition-colors border border-border/50">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-semibold ${cert.color}`}>{cert.name}</span>
                          <Award className={`w-4 h-4 ${cert.color}`} />
                        </div>
                        <p className="text-xs text-muted-foreground">{cert.full}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Achievement Highlight - Desktop */}
          <Card className="relative overflow-hidden border-orange-500/30 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 opacity-50"></div>
            <CardContent className="relative p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6">
                <Trophy className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Research Achievement</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Successfully identified and responsibly disclosed a <span className="text-orange-500 font-semibold">critical 2FA bypass vulnerability</span> in 
                <span className="text-red-500 font-semibold"> Epic Games</span>, demonstrating advanced skills in authentication security analysis and ethical disclosure practices.
              </p>
              <div className="mt-6">
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/30 px-4 py-2">
                  Critical Vulnerability Research
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Skills Section
export const SkillsSectionOptimized = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skills = [{
    name: "Web Application Security",
    level: 95,
    category: "Security",
    icon: "🛡️"
  }, {
    name: "Penetration Testing",
    level: 90,
    category: "Security",
    icon: "🎯"
  }, {
    name: "Vulnerability Assessment",
    level: 88,
    category: "Security",
    icon: "🔍"
  }, {
    name: "OWASP Top 10",
    level: 95,
    category: "Security",
    icon: "🔴"
  }, {
    name: "Python",
    level: 85,
    category: "Programming",
    icon: "🐍"
  }, {
    name: "Bash Scripting",
    level: 80,
    category: "Programming",
    icon: "💻"
  }, {
    name: "JavaScript",
    level: 80,
    category: "Programming",
    icon: "⚡"
  }, {
    name: "Linux",
    level: 90,
    category: "Systems",
    icon: "🐧"
  }, {
    name: "Network Security",
    level: 85,
    category: "Systems",
    icon: "🌐"
  }];
  const tools = ["Burp Suite", "Kali Linux", "Nmap", "Metasploit", "Wireshark", "SQLMap", "Hydra", "John the Ripper", "Nessus", "OWASP ZAP", "Nikto", "Gobuster"];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="skills" ref={sectionRef} className="py-6 sm:py-8 md:py-16 lg:py-20">
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
          

          {/* Programming & Systems - Compact Bars */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-emerald-400 flex items-center">
              <span className="mr-2">💻</span>
              Tech Stack
            </h3>
            <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
              <div className="space-y-2">
                {skills.filter(skill => skill.category !== "Security").map((skill, index) => <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-xs font-medium flex items-center">
                      <span className="mr-2">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{
                      width: inView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 300}ms`
                    }} />
                      </div>
                      <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                    </div>
                  </div>)}
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
              {tools.slice(0, 10).map((tool, index) => <span key={tool} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-md border border-purple-500/30 font-medium">
                  {tool}
                </span>)}
            </div>
          </div>

          {/* Certifications */}
          
        </div>

        {/* Desktop: Professional Layout */}
        <div className="hidden lg:block">
          {/* Skills Categories Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {["Security", "Programming", "Systems"].map((category, categoryIndex) => <Card key={category} className="p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                    <span className="mr-3 text-2xl">
                      {category === "Security" ? "🛡️" : category === "Programming" ? "💻" : "⚙️"}
                    </span>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill, index) => <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium flex items-center">
                            <span className="mr-2">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{
                      width: inView ? `${skill.level}%` : '0%',
                      transitionDelay: `${(categoryIndex * 4 + index) * 150}ms`
                    }} />
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Security Tools Grid */}
          <Card className="p-6 bg-card/50 border-border/50 mb-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <span className="mr-3 text-2xl">🛠️</span>
                Security Tools Arsenal
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {tools.map((tool, index) => <div key={tool} className="p-3 rounded-lg bg-muted/20 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 text-center group">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">
                      {tool}
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="grid grid-cols-3 gap-6">
            {[{
            name: "CEH",
            desc: "Certified Ethical Hacker",
            color: "blue"
          }, {
            name: "CRTA",
            desc: "Certified Red Team Analyst",
            color: "green"
          }, {
            name: "BSCP",
            desc: "Burp Suite Certified Practitioner",
            color: "purple"
          }].map((cert, index) => <Card key={cert.name} className="p-6 bg-card/30 border-border/50 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${cert.color}-500/20 flex items-center justify-center`}>
                    <Award className={`w-8 h-8 text-${cert.color}-500`} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};

// Contact Section
export const ContactSectionOptimized = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  return <SectionWrapper id="contact" className="bg-muted/20">
      <SectionHeading title="Get In Touch" description="Ready to discuss cybersecurity projects or collaboration opportunities" />
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
                <Input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="bg-background/50 border-border/50" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="bg-background/50 border-border/50" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="bg-background/50 border-border/50 resize-none" />
              </div>
              <Button type="submit" className="w-full transition-all duration-200 hover:scale-[1.02]">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>;
};
export default {
  SectionWrapper,
  SectionHeading,
  AboutSectionOptimized,
  SkillsSectionOptimized,
  ContactSectionOptimized
};