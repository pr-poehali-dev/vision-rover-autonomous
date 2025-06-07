import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      name: "ИИ-навигация",
      description:
        "Интеллектуальная система автономного управления и планирования маршрутов",
      icon: "Brain",
      color: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
      name: "Сенсорный массив",
      description:
        "Комплекс высокоточных датчиков для анализа окружающей среды",
      icon: "Radar",
      color: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    {
      name: "Vision-rover",
      description: "Открытый исходный код",
      icon: "Github",
      color: "bg-gradient-to-r from-pink-400 to-pink-500",
    },
  ];

  return (
    <section className="pb-20 pt-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#012F2C] mb-12 text-left">
          Технологический стек ровера
        </h2>

        <div className="flex flex-col gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon name={tech.icon} size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold mb-2 text-2xl">{tech.name}</h3>
                  <p className="text-white/90 leading-relaxed text-base">
                    {tech.description}
                  </p>
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
