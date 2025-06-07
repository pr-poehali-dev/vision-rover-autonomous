import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight px-[7px] py-1 my-0 text-6xl font-bold">
          Vision Rover: Автономный разведчик для экстремальных сред
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"></p>
        <Button className="bg-green-500 text-white hover:bg-green-600 hover:shadow-green-500/30 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold">
          Explore Tools
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
