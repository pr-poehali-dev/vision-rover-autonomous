import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-[#78CBB4]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left">
          Протестируйте возможности робота
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Получите эксклюзивный доступ к демонстрации Vision Rover
        </p>
        <Button
          className="text-white border border-white hover:bg-white/30 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
          style={{ backgroundColor: "#195f5a4d" }}
        >
          Получить демо-доступ
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
