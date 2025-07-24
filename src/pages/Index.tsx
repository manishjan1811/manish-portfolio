import Navigation from "@/components/portfolio/NavigationOptimized";
import HeroSection from "@/components/portfolio/HeroSectionOptimized";
import { AboutSectionOptimized, SkillsSectionOptimized, ContactSectionOptimized } from "@/components/portfolio/OptimizedSections";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import Footer from "@/components/portfolio/Footer";

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
      <ContactSectionOptimized />
      <Footer />
    </div>
  );
};

export default Index;
