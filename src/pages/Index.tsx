import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ValueSection from "@/components/ValueSection";
import SolutionSection from "@/components/SolutionSection";
import DashboardShowcase from "@/components/DashboardShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultingSection from "@/components/ConsultingSection";
import Footer from "@/components/Footer";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import AnimatedBannerSection from "@/components/AnimatedBannerSection";
import IntelligentFeaturesSection from "@/components/IntelligentFeaturesSection";
import SkillsSection from "@/components/SkillsSection";
import BentoFeaturesSection from "@/components/BentoFeaturesSection";
import FAQSection from "@/components/FAQSection";
import MobileAppSection from "@/components/MobileAppSection";
import CustomerEngagementSection from "@/components/CustomerEngagementSection";
import TeamCollaborationSection from "@/components/TeamCollaborationSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div className="hidden md:block">
          {/* <DashboardShowcase /> */}
        </div>
        <LogoMarquee />
        <TeamCollaborationSection />
        <CustomerEngagementSection />

        {/* <BentoFeaturesSection /> */}

        <SkillsSection />

        {/* <ValueSection /> */}
        <IntelligentFeaturesSection /> 
        <SolutionSection />
        <TestimonialsSection />
        {/* <LogoMarquee/> */}
        {/* <FAQSection /> */}
        <MobileAppSection />
        {/* <ConsultingSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
