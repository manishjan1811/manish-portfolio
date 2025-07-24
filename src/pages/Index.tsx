import Navigation from "@/components/portfolio/NavigationOptimized";
import HeroSection from "@/components/portfolio/HeroSectionOptimized";
import { AboutSectionOptimized, SkillsSectionOptimized } from "@/components/portfolio/OptimizedSections";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSectionNew";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <AboutSectionOptimized />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <SkillsSectionOptimized />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ProjectsSection />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <CertificationsSection />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ExperienceSection />
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
