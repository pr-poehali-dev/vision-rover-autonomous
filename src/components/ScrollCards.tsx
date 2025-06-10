import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const ScrollCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
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

  // Минимальное расстояние свайпа
  const minSwipeDistance = 50;

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !canScroll) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && currentCard < cards.length - 1) {
      setCanScroll(false);
      setCurrentCard((prev) => prev + 1);
      setTimeout(() => setCanScroll(true), 600);
    }

    if (isDownSwipe && currentCard > 0) {
      setCanScroll(false);
      setCurrentCard((prev) => prev - 1);
      setTimeout(() => setCanScroll(true), 600);
    }
  };

  // Intersection Observer для определения когда мы в секции
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection(entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      { threshold: [0, 0.3, 0.5, 1] },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Обработка wheel событий только для десктопа
  useEffect(() => {
    if (!isInSection) return;

    const handleWheel = (e: WheelEvent) => {
      // Проверяем, что это не touch device
      if ("ontouchstart" in window) return;

      if (!canScroll) return;

      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down" && currentCard < cards.length - 1) {
        e.preventDefault();
        setCanScroll(false);
        setCurrentCard((prev) => prev + 1);
        setTimeout(() => setCanScroll(true), 600);
      } else if (direction === "up" && currentCard > 0) {
        e.preventDefault();
        setCanScroll(false);
        setCurrentCard((prev) => prev - 1);
        setTimeout(() => setCanScroll(true), 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isInSection, currentCard, canScroll, cards.length]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black leading-tight">
          Принципы работы
        </h2>

        <div className="relative">
          {/* Card container */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-96 perspective-1000">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  index === currentCard
                    ? "opacity-100 translate-y-0 scale-100 rotate-0"
                    : index < currentCard
                      ? "opacity-30 sm:opacity-40 -translate-y-3 sm:-translate-y-4 scale-90 sm:scale-95 -rotate-1 sm:-rotate-2"
                      : "opacity-30 sm:opacity-40 translate-y-3 sm:translate-y-4 scale-90 sm:scale-95 rotate-1 sm:rotate-2"
                }`}
                style={{
                  zIndex: index === currentCard ? 30 : 20 - index,
                }}
              >
                <div
                  className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden"
                  style={
                    index === 0
                      ? { backgroundColor: "#3E0074" }
                      : index === 1
                        ? { backgroundColor: "#00787C" }
                        : index === 2
                          ? { backgroundColor: "#000000" }
                          : {}
                  }
                >
                  {/* Content with proper z-index */}
                  <div className="relative z-20">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Icon
                          name={card.icon}
                          size={24}
                          className="sm:w-8 sm:h-8"
                        />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="mb-4 sm:mb-6">
                      <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                        {card.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed text-white/90 max-w-2xl">
                      {card.description}
                    </p>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -right-8 sm:-right-16 lg:-right-20 -bottom-8 sm:-bottom-16 lg:-bottom-20 w-16 sm:w-32 lg:w-40 h-16 sm:h-32 lg:h-40 bg-white/10 rounded-full blur-xl sm:blur-2xl lg:blur-3xl" />
                  <div className="absolute -left-8 sm:-left-16 lg:-left-20 -top-8 sm:-top-16 lg:-top-20 w-12 sm:w-24 lg:w-32 h-12 sm:h-24 lg:h-32 bg-white/10 rounded-full blur-lg sm:blur-xl lg:blur-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-500 hover:scale-125 active:scale-110 ${
                  index === currentCard ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation hint for mobile */}
          <div className="text-center mt-4 sm:mt-6 sm:hidden">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              <Icon name="ChevronUp" size={16} />
              Свайпайте вверх/вниз
              <Icon name="ChevronDown" size={16} />
            </p>
          </div>

          {/* Desktop navigation hint */}
          <div className="text-center mt-4 sm:mt-6 hidden sm:block">
            <p className="text-gray-500 text-sm">
              {isInSection && "ontouchstart" in window ? "" : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
