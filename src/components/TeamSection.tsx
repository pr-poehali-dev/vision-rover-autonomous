import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  gradient: string;
  experience: string;
  achievements: string[];
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
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
      quote:
        "Автономные разведчики - это будущее исследования космоса. Наши технологии позволят человечеству достичь новых горизонтов.",
      gradient: "from-yellow-400 to-orange-500",
      experience: "8+ лет в космических технологиях",
      achievements: [
        "Руководитель 15+ проектов",
        "Эксперт по ИИ в космосе",
        "Спикер международных конференций",
      ],
      skills: ["Python", "Machine Learning", "Системная архитектура"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "alexey@space.com",
      },
    },
    {
      name: "Мария Смирнова",
      role: "AI Engineer",
      image:
        "https://cdn.poehali.dev/files/30c54906-f552-41f5-a8f8-ab31c30c0683.jpg",
      quote:
        "Искусственный интеллект в космических миссиях должен быть надежным и адаптивным. Мы создаем системы, которые думают как исследователи.",
      gradient: "from-pink-300 to-purple-400",
      experience: "6+ лет в области ИИ",
      achievements: [
        "PhD в Computer Science",
        "Автор 20+ научных статей",
        "Разработчик автономных систем",
      ],
      skills: ["TensorFlow", "Deep Learning", "Computer Vision"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "maria@space.com",
      },
    },
    {
      name: "Дмитрий Козлов",
      role: "Hardware Engineer",
      image:
        "https://cdn.poehali.dev/files/2cda610a-ae2e-4a21-9567-3976b38456b5.jpg",
      quote:
        "Каждый компонент должен выдерживать экстремальные условия космоса. Наша задача - создать технику, которая работает безотказно.",
      gradient: "from-blue-400 to-cyan-500",
      experience: "10+ лет в аэрокосмической отрасли",
      achievements: [
        "Инженер года 2023",
        "Патенты на космические технологии",
        "Сертификат NASA",
      ],
      skills: ["Embedded Systems", "FPGA", "Космические стандарты"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "dmitry@space.com",
      },
    },
    {
      name: "Анна Васильева",
      role: "Product Manager",
      image:
        "https://cdn.poehali.dev/files/b78145f3-138a-471c-83b2-ce7cf0573471.jpg",
      quote:
        "Успешная космическая миссия начинается с четкого планирования. Мы превращаем смелые идеи в реальные проекты.",
      gradient: "from-orange-400 to-red-500",
      experience: "7+ лет в продуктовом менеджменте",
      achievements: [
        "Запуск 10+ продуктов",
        "Сертификат Agile",
        "Эксперт по космическим миссиям",
      ],
      skills: ["Product Strategy", "Agile", "Stakeholder Management"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "anna@space.com",
      },
    },
    {
      name: "Игорь Новиков",
      role: "Systems Architect",
      image:
        "https://cdn.poehali.dev/files/34e9adea-c0db-484a-b3c6-c249d47b73b5.jpg",
      quote:
        "Архитектура космических систем требует баланса между инновациями и надежностью. Мы строим мосты в будущее.",
      gradient: "from-green-400 to-emerald-500",
      experience: "12+ лет в системной архитектуре",
      achievements: [
        "Архитектор Enterprise решений",
        "Эксперт по масштабируемости",
        "Ментор для 50+ разработчиков",
      ],
      skills: ["Microservices", "Cloud Architecture", "System Design"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "igor@space.com",
      },
    },
    {
      name: "Елена Кузнецова",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      quote:
        "Данные из космоса содержат ответы на множество вопросов. Наша задача - научить машины видеть то, что не замечает человеческий глаз.",
      gradient: "from-indigo-400 to-violet-500",
      experience: "5+ лет в Data Science",
      achievements: [
        "Магистр по статистике",
        "Эксперт по Big Data",
        "Исследователь космических данных",
      ],
      skills: ["Python", "R", "Statistical Analysis"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "elena@space.com",
      },
    },
    {
      name: "Сергей Волков",
      role: "Robotics Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      quote:
        "Роботы-исследователи должны быть автономными и умными. Мы создаём машины, которые могут принимать решения в неизвестных условиях.",
      gradient: "from-teal-400 to-cyan-600",
      experience: "9+ лет в робототехнике",
      achievements: [
        "Инженер-робототехник",
        "Создатель автономных систем",
        "Участник космических миссий",
      ],
      skills: ["ROS", "C++", "Autonomous Systems"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "sergey@space.com",
      },
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
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      activeCard === index ? "scale-105" : "hover:scale-102"
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* Основная карточка */}
                    <div
                      className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${member.image})`,
                      }}
                    >
                      {/* Темный overlay для читаемости текста */}
                      <div className="absolute inset-0 bg-black/60"></div>

                      {/* Фоновый паттерн */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                      </div>

                      {/* Контент карточки */}
                      <div className="relative h-full p-8 flex flex-col justify-between z-10">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg flex items-center justify-center">
                            <Icon
                              name="User"
                              size={32}
                              className="text-white"
                            />
                          </div>
                          <div className="text-white">
                            <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                              {member.name}
                            </h3>
                            <p className="text-white/95 text-lg drop-shadow-md">
                              {member.role}
                            </p>
                            <p className="text-white/85 text-sm mt-1 drop-shadow-md">
                              {member.experience}
                            </p>
                          </div>
                        </div>

                        {/* Социальные ссылки */}
                        <div className="flex gap-3">
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                            >
                              <Icon
                                name="Github"
                                size={20}
                                className="text-white"
                              />
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                            >
                              <Icon
                                name="Linkedin"
                                size={20}
                                className="text-white"
                              />
                            </a>
                          )}
                          {member.social.email && (
                            <a
                              href={`mailto:${member.social.email}`}
                              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                            >
                              <Icon
                                name="Mail"
                                size={20}
                                className="text-white"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Расширенная информация при клике */}
                      {activeCard === index && (
                        <div className="absolute inset-0 bg-black/95 flex items-center justify-center p-8 animate-fade-in">
                          <div className="text-white max-w-md">
                            <div className="text-center mb-6">
                              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/30 mx-auto mb-4">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h3 className="text-xl font-bold mb-2">
                                {member.name}
                              </h3>
                              <p className="text-white/80">{member.role}</p>
                            </div>

                            <div className="space-y-4 text-sm">
                              <div>
                                <p className="italic text-white/90 leading-relaxed mb-3">
                                  "{member.quote}"
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 text-white/90">
                                  Достижения:
                                </h4>
                                <ul className="text-white/80 space-y-1">
                                  {member.achievements.map((achievement, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2"
                                    >
                                      <Icon
                                        name="Star"
                                        size={12}
                                        className="text-yellow-400 mt-1 flex-shrink-0"
                                      />
                                      <span className="text-xs">
                                        {achievement}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 text-white/90">
                                  Технологии:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {member.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-1 bg-white/20 rounded-lg text-xs"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCard(null);
                              }}
                              className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Icon name="X" size={20} className="text-white" />
                            </button>
                          </div>
                        </div>
                      )}
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
