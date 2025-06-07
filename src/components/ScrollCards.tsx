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
      title: "Сканирование",
      subtitle: "Анализ местности",
      description:
        "Продвинутые алгоритмы сканирования анализируют окружающую среду в реальном времени, обеспечивая точную навигацию в любых условиях",
      color: "bg-purple-600",
    },
    {
      icon: "Map",
      title: "Навигация",
      subtitle: "Построение маршрута",
      description:
        "Автономная система навигации создает оптимальные маршруты, адаптируясь к изменяющимся условиям и препятствиям на пути",
      color: "bg-blue-600",
    },
    {
      icon: "Sensor",
      title: "Исследование",
      subtitle: "Сбор данных",
      description:
        "Комплексная система датчиков собирает критически важную информацию об окружающей среде для дальнейшего анализа",
      color: "bg-green-600",
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
      className="py-20 pb-16 px-4 min-h-screen flex items-center bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 text-[#012F2C]">
          Принципы работы
        </h2>

        <div className="relative">
          {/* Card container */}
          <div className="relative h-96 perspective-1000">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-800 ease-out transform ${
                  index === currentCard
                    ? "opacity-100 translate-y-0 scale-100 rotate-0"
                    : index < currentCard
                      ? "opacity-40 -translate-y-4 scale-95 -rotate-2"
                      : "opacity-40 translate-y-4 scale-95 rotate-2"
                }`}
                style={{
                  zIndex: index === currentCard ? 30 : 20 - index,
                }}
              >
                <div
                  className="rounded-3xl p-8 md:p-12 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden"
                  style={
                    index === 0
                      ? { backgroundColor: "#F7633D" }
                      : index === 1
                        ? { backgroundColor: "#3843D0" }
                        : index === 2
                          ? { backgroundColor: "#FF80A9" }
                          : {}
                  }
                >
                  {/* Overlay removed since we're using solid colors */}
                  {(index === 0 || index === 1 || index === 2) && (
                    <div className="absolute inset-0 rounded-3xl bg-[#00000000]" />
                  )}

                  {/* Top badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="max-w-md pl-8 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      {card.title}
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute -left-20 -top-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                  index === currentCard ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation hint */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">{isInSection ? "" : ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
