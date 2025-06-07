import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#78CBB4]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left text-[#012F2C]">
          Протестируйте возможности робота
        </h2>
        <p className="mb-6 sm:mb-8 leading-relaxed text-[#195f5a] font-light text-base sm:text-lg text-center sm:text-left">
          Получите эксклюзивный доступ к демонстрации Vision Rover
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto sm:mx-0">
          <Input
            type="email"
            placeholder="Введите ваш email"
            className="flex-1 text-base sm:text-lg px-4 py-4 sm:py-6 rounded-xl border-white/30 bg-white/90 text-[#012F2C] placeholder:text-[#012F2C]/60 focus:border-white focus:ring-white/20 focus:bg-white"
          />
          <Button
            className="text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-semibold whitespace-nowrap"
            style={{ backgroundColor: "#195f5a4d" }}
          >
            Получить демо-доступ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
