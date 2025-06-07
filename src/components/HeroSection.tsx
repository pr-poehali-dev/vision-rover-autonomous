import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Ultimate AI Tools Resource
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Testing, Reviewing, and Trending AI Innovations
        </p>
        <Button className="bg-green-500 text-white hover:bg-green-600 hover:shadow-green-500/30 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold">
          Explore Tools
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
