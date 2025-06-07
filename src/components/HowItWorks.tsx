import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "Radar",
      title: "Сканирование",
      description: "Анализ местности в реальном времени",
    },
    {
      icon: "Map",
      title: "Навигация",
      description: "Автономное построение маршрута",
    },
    {
      icon: "Sensor",
      title: "Исследование",
      description: "Сбор критических данных",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-blue text-center mb-16">
          Принцип работы
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-cosmic-blue rounded-full flex items-center justify-center group-hover:bg-aqua transition-colors duration-300">
                <Icon
                  name={step.icon as any}
                  size={40}
                  className="text-white group-hover:text-cosmic-blue transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-cosmic-blue mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
