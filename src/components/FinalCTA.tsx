import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-[#78CBB4]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left text-[#012F2C]">
          Протестируйте возможности робота
        </h2>
        <p className="mb-8 leading-relaxed text-[#195f5a] font-light text-lg">
          Получите эксклюзивный доступ к демонстрации Vision Rover
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          <Input
            type="email"
            placeholder="Введите ваш email"
            className="flex-1 text-lg px-4 py-6 rounded-xl border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white/20"
          />
          <Button
            className="text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold whitespace-nowrap"
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
