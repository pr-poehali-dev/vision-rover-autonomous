import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const ScrollCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const cards = [
    {
      icon: "Radar",
      title: "VISION ROVER",
      subtitle: "Сканирование и анализ местности",
      description:
        "Продвинутые алгоритмы сканирования анализируют окружающую среду в реальном времени",
      color: "#F7633D",
      bgColor: "bg-pink-200",
    },
    {
      icon: "Map",
      title: "NAVIGATION SYSTEM",
      subtitle: "Построение оптимального маршрута",
      description:
        "Автономная система навигации создает маршруты, адаптируясь к условиям",
      color: "#3843D0",
      bgColor: "bg-blue-200",
    },
    {
      icon: "Sensor",
      title: "DATA COLLECTION",
      subtitle: "Комплексный сбор данных",
      description:
        "Система датчиков собирает критически важную информацию об окружающей среде",
      color: "#FF80A9",
      bgColor: "bg-green-200",
    },
  ];

  // Intersection Observer для определения когда мы в секции
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: [0, 0.5, 1] },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Обработка wheel событий только когда мы в секции
  useEffect(() => {
    if (!isInSection) return;

    const handleWheel = (e: WheelEvent) => {
      if (!canScroll) return;

      const direction = e.deltaY > 0 ? "down" : "up";

      // Переключаем карточки только если можем
      if (direction === "down" && currentCard < cards.length - 1) {
        e.preventDefault();
        setCanScroll(false);
        setCurrentCard((prev) => prev + 1);
        setTimeout(() => setCanScroll(true), 800);
      } else if (direction === "up" && currentCard > 0) {
        e.preventDefault();
        setCanScroll(false);
        setCurrentCard((prev) => prev - 1);
        setTimeout(() => setCanScroll(true), 800);
      }
      // Если достигли края карточек - разрешаем обычный скролл
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isInSection, currentCard, canScroll, cards.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-[#012F2C]">
          Принципы работы
        </h2>

        <div className="relative">
          {/* Card container */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ease-out transform ${
                  index === currentCard
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-60 translate-x-4 scale-95"
                }`}
              >
                <div
                  className={`${card.bgColor} rounded-2xl p-8 relative overflow-hidden min-h-[140px] flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Content Section */}
                  <div className="flex-1 pr-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                      {card.description}
                    </p>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: card.color }}
                    >
                      <Icon name={card.icon} size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -right-4 -top-4 w-12 h-12 bg-white/30 rounded-full blur-sm" />
                  <div className="absolute -left-4 -bottom-4 w-8 h-8 bg-white/20 rounded-full blur-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 hover:scale-125 border-2 ${
                  index === currentCard
                    ? "bg-orange-500 border-orange-500 shadow-lg"
                    : "bg-transparent border-gray-400 hover:border-orange-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation hint */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">{isInSection ? "" : ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
