import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    {
      name: "ИИ-навигация",
      description:
        "Интеллектуальная система автономного управления и планирования маршрутов",
      icon: "Brain",
      color: "bg-[#7B68EE]",
    },
    {
      name: "Сенсорный массив",
      description:
        "Комплекс высокоточных датчиков для анализа окружающей среды",
      icon: "Radar",
      color: "bg-[#EE686A]",
    },
    {
      name: "Vision-rover",
      description: "Открытый исходный код",
      icon: "Github",
      color: "bg-[#000000]",
    },
  ];

  return (
    <section className="px-4 sm:px-6 bg-gray-50 py-8 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 text-center sm:text-left">
          Технологический стек ровера
        </h2>

        <div className="flex flex-col gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`${tech.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={tech.icon}
                    size={20}
                    className="text-white sm:hidden"
                  />
                  <Icon
                    name={tech.icon}
                    size={24}
                    className="text-white hidden sm:block"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold mb-2 text-xl sm:text-2xl">
                    {tech.name}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">
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
