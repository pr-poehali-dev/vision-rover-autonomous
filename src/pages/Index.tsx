import HeroSection from "@/components/HeroSection";
import ScrollCards from "@/components/ScrollCards";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollCards />
      <HowItWorks />
      <TechStack />
      <TeamSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
