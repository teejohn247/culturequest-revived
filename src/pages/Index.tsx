import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import IntelligentFeaturesSection from "@/components/IntelligentFeaturesSection";
import SkillsSection from "@/components/SkillsSection";
import MobileAppSection from "@/components/MobileAppSection";
import CustomerEngagementSection from "@/components/CustomerEngagementSection";
import TeamCollaborationSection from "@/components/TeamCollaborationSection";
import WorkspacesSection from "@/components/WorkspacesSection";
import PlatformsSection from "@/components/PlatformsSection";
import WorkflowProcessSection from "@/components/WorkflowProcessSection";
import FeatureLinksSection from "@/components/FeatureLinksSection";
import TeamworkSolutionsSection from "@/components/TeamworkSolutionsSection";
import CTABannerSection from "@/components/CTABannerSection";
import ResourcesSection from "@/components/ResourcesSection";
import ShowreelSection from "@/components/ShowreelSection";

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
        <CustomerEngagementSection />
        <FeatureLinksSection />
        <SkillsSection />
        <IntelligentFeaturesSection />
        <TeamworkSolutionsSection />
        <SolutionSection />
        <ShowreelSection />
        <TestimonialsSection />
        <CTABannerSection />
        <ResourcesSection />
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
