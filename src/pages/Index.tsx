import Navigation from "@/components/portfolio/NavigationOptimized";
import HeroSection from "@/components/portfolio/HeroSectionOptimized";
import { AboutSectionOptimized, SkillsSectionOptimized } from "@/components/portfolio/OptimizedSections";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSectionNew";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import OmkarCVPreview from "@/components/omkar-cv-preview";
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Omkar Singh's CV
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download Omkar's professional CV in high-quality PDF format with all colors, textures, and formatting preserved.
            </p>
          </div>
          <OmkarCVPreview />
        </div>
      </section>
      <Separator className="my-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
