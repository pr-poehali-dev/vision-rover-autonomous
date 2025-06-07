import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[50vh] flex items-center justify-center relative py-16 sm:py-20 lg:py-[93px] px-4 sm:px-6"
      style={{
        backgroundColor: "#78CBB4",
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center lg:items-end lg:mx-8 px-0">
        <div className="text-center lg:text-left px-0 my-0 py-0 lg:pr-4 flex flex-col justify-between min-h-full order-2 lg:order-1">
          <div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-0 max-w-none"
              style={{ color: "#012F2C" }}
            >
              Vision Rover:
              <br />
              Автономный разведчик
            </h1>
            <p className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-[#195f5a] max-w-lg mx-auto lg:mx-0">
              Преодолевает непроходимые территории без участия человека.
            </p>
          </div>
          <Button
            className="text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold self-center lg:self-start w-fit"
            style={{ backgroundColor: "#195f5a4d" }}
          >
            Посмотреть
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="https://cdn.poehali.dev/files/76d06438-2d9b-4f4b-a17e-c543a09039fd.png"
            alt="Роботизированные руки держат голографический мозг с надписью AI"
            className="max-w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 object-contain rounded-2xl sm:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
