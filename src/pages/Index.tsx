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
      <Separator className="my-8 opacity-30" />
      <AboutSectionOptimized />
      <Separator className="my-8 opacity-30" />
      <SkillsSectionOptimized />
      <Separator className="my-8 opacity-30" />
      <ProjectsSection />
      <Separator className="my-8 opacity-30" />
      <CertificationsSection />
      <Separator className="my-8 opacity-30" />
      <ExperienceSection />
      <Separator className="my-8 opacity-30" />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
