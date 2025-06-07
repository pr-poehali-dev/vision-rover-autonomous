import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <TechStack />
      <TeamSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
