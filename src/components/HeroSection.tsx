import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-[50vh] flex items-center justify-center relative py-[93px] px-0"
      style={{
        backgroundColor: "#78CBB4",
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-[102px] px-0">
        <div className="text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#012F2C" }}
          >
            Vision Rover:
            <br />
            Автономный разведчик
          </h1>
          <p className="mb-6 leading-relaxed text-lg text-[#195f5a]">
            Для экстремальных сред. Преодолевает непроходимые территории без
            участия человека
          </p>
          <Button
            className="text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 rounded-xl font-semibold"
            style={{ backgroundColor: "#195f5a4d" }}
          >
            Посмотреть
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://cdn.poehali.dev/files/76d06438-2d9b-4f4b-a17e-c543a09039fd.png"
            alt="Роботизированные руки держат голографический мозг с надписью AI"
            className="max-w-full h-auto max-h-96 object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
