import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      name: "ИИ-навигация",
      description:
        "Интеллектуальная система автономного управления и планирования маршрутов",
      icon: "Brain",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      name: "Сенсорный массив",
      description:
        "Комплекс высокоточных датчиков для анализа окружающей среды",
      icon: "Radar",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      name: "Защищенный корпус",
      description:
        "Усиленная конструкция, устойчивая к экстремальным условиям космоса",
      icon: "Shield",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
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
              className="group relative bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 rounded-2xl p-8 shadow-2xl hover:shadow-cosmic-blue/20 border border-slate-700/50 hover:border-cosmic-blue/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue/5 via-purple-500/5 to-cosmic-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cosmic-blue transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base group-hover:text-slate-200 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>

                <div
                  className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 border border-white/10`}
                >
                  <Icon
                    name={tech.icon}
                    size={28}
                    className="text-white drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Subtle shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cosmic-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
