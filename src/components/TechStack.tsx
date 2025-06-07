import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      title: "ИИ-навигация",
      description:
        "Интеллектуальная система автономного управления и планирования маршрутов",
      icon: "Navigation",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Сенсорный массив",
      description:
        "Комплекс высокочувствительных датчиков для анализа окружающей среды",
      icon: "Radar",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Vision-rover",
      description: "Открытый исходный код",
      icon: "Eye",
      gradient: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-blue text-center mb-16">
          Технологический стек ровера
        </h2>

        <div className="space-y-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${tech.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className="ml-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <Icon name={tech.icon} size={64} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
