import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      name: "ИИ-навигация",
      description:
        "Интеллектуальная система автономного управления и планирования маршрутов",
      icon: "Brain",
      color: "bg-purple-600",
    },
    {
      name: "Сенсорный массив",
      description:
        "Комплекс высокоточных датчиков для анализа окружающей среды",
      icon: "Radar",
      color: "bg-blue-600",
    },
    {
      name: "Защищенный корпус",
      description:
        "Усиленная конструкция, устойчивая к экстремальным условиям космоса",
      icon: "Shield",
      color: "bg-[#78CBB4]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#012F2C]">
            Технологический стек ровера
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Передовые решения для исследования космических миссий
          </p>
        </div>

        {/* GitHub Repository Widget */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center bg-white rounded-xl px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <Icon name="Github" size={28} className="text-cosmic-blue mr-4" />
            <div className="text-left">
              <div className="text-cosmic-blue font-bold text-lg">
                vision-rover
              </div>
              <div className="text-gray-500 text-sm">Открытый исходный код</div>
            </div>
            <div className="ml-6 flex items-center">
              <Icon name="Star" size={18} className="text-yellow-500 mr-2" />
              <span className="text-gray-700 font-semibold text-lg">2.4k</span>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative ${tech.color} rounded-2xl p-8 shadow-lg hover:shadow-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base">
                    {tech.description}
                  </p>
                </div>

                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Icon name={tech.icon} size={28} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-cosmic-blue/5 rounded-full">
            <Icon name="Zap" size={20} className="text-cosmic-blue mr-2" />
            <span className="text-cosmic-blue font-medium">
              Готов к развертыванию в космических условиях
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
