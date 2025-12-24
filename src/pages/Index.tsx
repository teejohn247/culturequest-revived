import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/Footer";
import WorkspacesSection from "@/components/WorkspacesSection";
import PlatformsSection from "@/components/PlatformsSection";
import TeamCollaborationSection from "@/components/TeamCollaborationSection";
import WorkflowProcessSection from "@/components/WorkflowProcessSection";
import FeatureLinksSection from "@/components/FeatureLinksSection";
import TeamworkSolutionsSection from "@/components/TeamworkSolutionsSection";
import CTABannerSection from "@/components/CTABannerSection";
import ResourcesSection from "@/components/ResourcesSection";
import ShowreelSection from "@/components/ShowreelSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <WorkspacesSection />
        <PlatformsSection />
        <TeamCollaborationSection />
        <WorkflowProcessSection />
        <FeatureLinksSection />
        <TeamworkSolutionsSection />
        <ShowreelSection />
        <TestimonialsSection />
        <CTABannerSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;