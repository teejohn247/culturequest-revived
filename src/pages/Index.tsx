import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ValueSection from "@/components/ValueSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConsultingSection from "@/components/ConsultingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ValueSection />
        <SolutionSection />
        <FeaturesSection />
        <ConsultingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
