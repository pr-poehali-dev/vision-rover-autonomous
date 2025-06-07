import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ScrollCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  const cards = [
    {
      icon: "Radar",
      title: "Сканирование",
      subtitle: "Анализ местности",
      description:
        "Продвинутые алгоритмы сканирования анализируют окружающую среду в реальном времени, обеспечивая точную навигацию в любых условиях",
      gradient: "from-purple-600 via-orange-500 to-yellow-400",
    },
    {
      icon: "Map",
      title: "Навигация",
      subtitle: "Построение маршрута",
      description:
        "Автономная система навигации создает оптимальные маршруты, адаптируясь к изменяющимся условиям и препятствиям на пути",
      gradient: "from-blue-600 via-purple-500 to-pink-400",
    },
    {
      icon: "Sensor",
      title: "Исследование",
      subtitle: "Сбор данных",
      description:
        "Комплексная система датчиков собирает критически важную информацию об окружающей среде для дальнейшего анализа",
      gradient: "from-green-600 via-blue-500 to-purple-400",
    },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const direction = currentScrollY > lastScrollY ? "down" : "up";

          if (Math.abs(currentScrollY - lastScrollY) > 50) {
            setScrollDirection(direction);

            if (direction === "down" && currentCard < cards.length - 1) {
              setCurrentCard((prev) => prev + 1);
            } else if (direction === "up" && currentCard > 0) {
              setCurrentCard((prev) => prev - 1);
            }

            lastScrollY = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentCard, cards.length]);

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-blue text-center mb-16">
          Принцип работы
        </h2>

        <div className="relative">
          {/* Progress indicators */}
          <div className="flex justify-center mb-8 space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCard ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Card container */}
          <div className="relative h-96 perspective-1000">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  index === currentCard
                    ? "opacity-100 translate-y-0 scale-100 rotate-0"
                    : index < currentCard
                      ? "opacity-0 -translate-y-8 scale-95 -rotate-3"
                      : "opacity-0 translate-y-8 scale-95 rotate-3"
                }`}
                style={{
                  zIndex:
                    index === currentCard
                      ? 10
                      : cards.length - Math.abs(index - currentCard),
                }}
              >
                <div
                  className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 md:p-12 text-white shadow-2xl h-full flex flex-col justify-center relative overflow-hidden`}
                >
                  {/* Top badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {card.subtitle}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-center space-x-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Icon
                            name={card.icon as any}
                            size={32}
                            className="text-white"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-2">
                            {card.title}
                          </h3>
                          <p className="text-lg opacity-90 leading-relaxed max-w-md">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual element */}
                    <div className="hidden md:block flex-shrink-0">
                      <div className="w-32 h-48 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon
                          name={card.icon as any}
                          size={64}
                          className="text-white/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute -left-20 -top-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation hint */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Прокрутите вниз или вверх для переключения карточек
            </p>
            <Icon
              name={scrollDirection === "down" ? "ChevronDown" : "ChevronUp"}
              size={20}
              className="text-gray-400 mx-auto mt-2 animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
