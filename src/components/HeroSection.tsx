import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cosmic-blue flex items-center justify-center px-4 py-8 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Vision Rover: Автономный разведчик для экстремальных сред
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Преодолевает непроходимые территории без участия человека
          </p>
          <Button className="bg-aqua text-cosmic-blue hover:bg-aqua/90 hover:shadow-aqua/50 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold w-full sm:w-auto">
            Live Demo
          </Button>
        </div>

        {/* Robot Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=600&fit=crop"
              alt="Vision Rover - автономный робот-разведчик"
              className="w-full aspect-square object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
