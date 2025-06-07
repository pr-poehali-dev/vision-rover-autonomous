import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative py-[93px] px-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/0c0e0981-2198-4b60-81a1-fbeb6b20fcfa.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 text-6xl">
            Vision Rover: Автономный разведчик
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Для экстремальных сред. Преодолевает непроходимые территории без
            участия человека
          </p>
          <Button className="bg-white/20 text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold">
            Посмотреть
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://cdn.poehali.dev/files/8bfe3c1b-ebf7-49fc-81c9-c8501760f369.png"
            alt="AI робот с символом искусственного интеллекта"
            className="max-w-full h-auto max-h-96 object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
