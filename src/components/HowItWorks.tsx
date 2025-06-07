import { useState } from "react";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <h3 className="text-xl font-semibold text-cosmic-blue mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeStep ? "bg-cosmic-blue" : "bg-gray-300"
              }`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
