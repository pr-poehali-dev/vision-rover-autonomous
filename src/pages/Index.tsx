import HeroSection from "@/components/HeroSection";
import ScrollCards from "@/components/ScrollCards";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ScrollCards />
      <TeamSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
