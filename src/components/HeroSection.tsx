import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cosmic-blue flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Vision Rover: Автономный разведчик для экстремальных сред
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Преодолевает непроходимые территории без участия человека
          </p>
          <Button className="bg-aqua text-cosmic-blue hover:bg-aqua/90 hover:shadow-aqua/50 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 font-semibold">
            Live Demo
          </Button>
        </div>

        {/* Robot Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=600&fit=crop"
              alt="Vision Rover - автономный робот-разведчик"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
