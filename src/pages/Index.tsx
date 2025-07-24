import Navigation from "@/components/portfolio/NavigationOptimized";
import HeroSection from "@/components/portfolio/HeroSectionOptimized";
import { AboutSectionOptimized, SkillsSectionOptimized } from "@/components/portfolio/OptimizedSections";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSectionNew";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSectionOptimized />
      <SkillsSectionOptimized />
      <ProjectsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
