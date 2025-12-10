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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DashboardShowcase />
        <LogoMarquee />
        <ValueSection />
        <SolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <LogoMarquee/>

        <ConsultingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
