import HeroSection from "@/components/HeroSection";
import ScrollCards from "@/components/ScrollCards";
import TechStack from "@/components/TechStack";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollCards />
      <TechStack />
      <TeamSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
