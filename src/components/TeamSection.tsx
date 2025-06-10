import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const team: TeamMember[] = [
    {
      name: "Алексей Петров",
      role: "Технический директор",
      image:
        "https://cdn.poehali.dev/files/d0f70dd4-8f72-4ca6-bf7d-a7b386990989.jpg",
      quote:
        "Автономный разведчик — это не просто дрон, это искусственный интеллект, способный принимать решения в экстремальных условиях космоса.",
    },
    {
      name: "Мария Смирнова",
      role: "Инженер ИИ",
      image:
        "https://cdn.poehali.dev/files/30c54906-f552-41f5-a8f8-ab31c30c0683.jpg",
      quote:
        "Нейросети разведчика обучены на миллионах космических сценариев. Он может адаптироваться к любой неизвестной ситуации.",
    },
    {
      name: "Дмитрий Козлов",
      role: "Инженер аппаратуры",
      image:
        "https://cdn.poehali.dev/files/2cda610a-ae2e-4a21-9567-3976b38456b5.jpg",
      quote:
        "Каждая деталь разведчика проектировалась для работы в вакууме. Он выдержит температуры от -270°C до +120°C.",
    },
    {
      name: "Анна Васильева",
      role: "Менеджер продукта",
      image:
        "https://cdn.poehali.dev/files/b78145f3-138a-471c-83b2-ce7cf0573471.jpg",
      quote:
        "Автономный разведчик откроет новую эру исследований. Он сможет работать годами без связи с Землей.",
    },
    {
      name: "Игорь Новиков",
      role: "Системный архитектор",
      image:
        "https://cdn.poehali.dev/files/34e9adea-c0db-484a-b3c6-c249d47b73b5.jpg",
      quote:
        "Архитектура разведчика позволяет ему самостоятельно ремонтировать себя и адаптировать алгоритмы в реальном времени.",
    },
  ];

  const cardColors = ["#EE686A", "#7B68EE", "#000000", "#EE686A", "#7B68EE"];

  const visibleCards =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
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
    <section className="px-4 sm:px-6 bg-gray-50 py-12 sm:py-16 lg:py-[114px]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center sm:text-left text-black">
          Разработчики
        </h2>

        {/* Карусель команды */}
        <div className="relative">
          {/* Навигационные кнопки */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <Icon
              name="ChevronLeft"
              size={20}
              className="text-cosmic-blue sm:hidden"
            />
            <Icon
              name="ChevronLeft"
              size={24}
              className="text-cosmic-blue hidden sm:block"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <Icon
              name="ChevronRight"
              size={20}
              className="text-cosmic-blue sm:hidden"
            />
            <Icon
              name="ChevronRight"
              size={24}
              className="text-cosmic-blue hidden sm:block"
            />
          </button>

          {/* Карточки команды */}
          <div className="overflow-hidden mx-8 sm:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
              }}
            >
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-1.5 sm:px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div
                    className={`relative group cursor-pointer transition-all duration-300 hover:scale-102`}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Flip Container */}
                    <div
                      className={`relative h-80 sm:h-[400px] transition-transform duration-700 transform-style-preserve-3d ${
                        activeCard === index ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Лицевая сторона карточки */}
                      <div
                        className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${member.image})`,
                        }}
                      >
                        {/* Темный overlay для читаемости текста */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Контент лицевой стороны */}
                        <div className="relative h-full p-4 sm:p-6 flex flex-col justify-start z-10">
                          <div className="text-white text-left">
                            <h3 className="text-lg sm:text-2xl font-bold mb-1 drop-shadow-lg">
                              {member.name}
                            </h3>
                            <p className="text-white/90 text-sm sm:text-lg drop-shadow-md">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Обратная сторона карточки */}
                      <div
                        className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${cardColors[index]}, ${cardColors[index]}dd)`,
                        }}
                      >
                        <div className="h-full p-4 sm:p-6 flex flex-col justify-between">
                          {/* Имя в левом верхнем углу */}
                          <div className="text-left">
                            <cite className="text-white font-bold text-base sm:text-xl">
                              {member.name}
                            </cite>
                          </div>

                          {/* Цитата с левым выравниванием */}
                          <div className="flex-1 flex flex-col justify-center">
                            <Icon
                              name="Quote"
                              size={24}
                              className="text-white/70 mb-3 sm:hidden"
                            />
                            <Icon
                              name="Quote"
                              size={32}
                              className="text-white/70 mb-4 hidden sm:block"
                            />
                            <blockquote className="text-white text-sm sm:text-lg leading-relaxed italic text-left">
                              "{member.quote}"
                            </blockquote>
                          </div>
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
        <div className="flex justify-center space-x-2 mb-4 mt-6">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#012F2C]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Подсказка о кликабельности карточек */}
        <p className="text-center sm:text-left text-xs sm:text-sm text-[#012F2C]">
          Нажмите на карточку, чтобы увидеть цитату
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
