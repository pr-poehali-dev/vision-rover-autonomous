import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const team: TeamMember[] = [
    {
      name: "Алексей Петров",
      role: "Tech Lead",
      image:
        "https://cdn.poehali.dev/files/d0f70dd4-8f72-4ca6-bf7d-a7b386990989.jpg",
    },
    {
      name: "Мария Смирнова",
      role: "AI Engineer",
      image:
        "https://cdn.poehali.dev/files/30c54906-f552-41f5-a8f8-ab31c30c0683.jpg",
    },
    {
      name: "Дмитрий Козлов",
      role: "Hardware Engineer",
      image:
        "https://cdn.poehali.dev/files/2cda610a-ae2e-4a21-9567-3976b38456b5.jpg",
    },
    {
      name: "Анна Васильева",
      role: "Product Manager",
      image:
        "https://cdn.poehali.dev/files/b78145f3-138a-471c-83b2-ce7cf0573471.jpg",
    },
    {
      name: "Игорь Новиков",
      role: "Systems Architect",
      image:
        "https://cdn.poehali.dev/files/34e9adea-c0db-484a-b3c6-c249d47b73b5.jpg",
    },
    {
      name: "Елена Кузнецова",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Сергей Волков",
      role: "Robotics Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const visibleCards = 3;
  const maxSlide = Math.max(0, team.length - visibleCards);

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxSlide]);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-left text-[#012F2C]">
          Разработчики
        </h2>
        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Талантливые специалисты, создающие будущее космических технологий
          </p>
        </div>

        {/* Карусель команды */}
        <div className="relative">
          {/* Навигационные кнопки */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <Icon name="ChevronLeft" size={24} className="text-cosmic-blue" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <Icon name="ChevronRight" size={24} className="text-cosmic-blue" />
          </button>

          {/* Карточки команды */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
              }}
            >
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-300 hover:scale-102`}
                  >
                    {/* Основная карточка */}
                    <div
                      className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${member.image})`,
                      }}
                    >
                      {/* Темный overlay для читаемости текста */}
                      <div className="absolute inset-0 bg-black/40"></div>

                      {/* Контент карточки */}
                      <div className="relative h-full p-6 flex flex-col justify-end z-10">
                        <div className="text-white text-center">
                          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                            {member.name}
                          </h3>
                          <p className="text-white/90 text-lg drop-shadow-md">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Индикаторы слайдов */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? "bg-cosmic-blue scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Управление автопрокруткой */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              isAutoPlay
                ? "bg-cosmic-blue text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name={isAutoPlay ? "Pause" : "Play"} size={16} />
            <span className="text-sm">
              {isAutoPlay ? "Остановить" : "Автопрокрутка"}
            </span>
          </button>
        </div>

        {/* Подсказка */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Нажмите на карточку разработчика, чтобы узнать больше о его опыте и
            достижениях
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
