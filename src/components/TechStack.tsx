import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      name: "Интеллектуальная система автономного управления и планирования маршрутов",
      description:
        "Передовая ИИ-навигация с машинным обучением для оптимального построения траекторий в неизвестной местности",
      icon: "Brain",
      color: "#8B5CF6",
      bgColor: "bg-purple-200",
    },
    {
      name: "Комплекс высокоточных датчиков для анализа окружающей среды",
      description:
        "Многоспектральные сенсоры с лидарным сканированием и тепловизионным анализом для детального картографирования",
      icon: "Radar",
      color: "#06B6D4",
      bgColor: "bg-cyan-200",
    },
    {
      name: "Усиленная конструкция устойчивая к экстремальным космическим условиям",
      description:
        "Защищенный титановый корпус с адаптивной системой терморегуляции для работы в диапазоне от -180°C до +120°C",
      icon: "Shield",
      color: "#10B981",
      bgColor: "bg-emerald-200",
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
            <Icon name="Github" size={28} className="text-[#012F2C] mr-4" />
            <div className="text-left">
              <div className="text-[#012F2C] font-bold text-lg">
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

        {/* Technologies Cards */}
        <div className="space-y-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.bgColor} rounded-2xl p-8 relative overflow-hidden min-h-[140px] flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Content Section */}
              <div className="flex-1 pr-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-wide">
                  {tech.name}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                  {tech.description}
                </p>
              </div>

              {/* Floating Icon */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: tech.color }}
                >
                  <Icon name={tech.icon} size={28} className="text-white" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/30 rounded-full blur-sm" />
              <div className="absolute -left-4 -bottom-4 w-8 h-8 bg-white/20 rounded-full blur-sm" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-[#012F2C]/5 rounded-full">
            <Icon name="Zap" size={20} className="text-[#012F2C] mr-2" />
            <span className="text-[#012F2C] font-medium">
              Готов к развертыванию в космических условиях
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
