import { useState } from "react";

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const team = [
    {
      name: "Алексей Петров",
      role: "Tech Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote:
        "Автономные разведчики - это будущее исследования космоса. Наши технологии позволят человечеству достичь новых горизонтов.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Мария Смирнова",
      role: "AI Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b105?w=400&h=400&fit=crop&crop=face",
      quote:
        "Искусственный интеллект в космических миссиях должен быть надежным и адаптивным. Мы создаем системы, которые думают как исследователи.",
      gradient: "from-pink-300 to-purple-400",
    },
    {
      name: "Дмитрий Козлов",
      role: "Hardware Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote:
        "Каждый компонент должен выдерживать экстремальные условия космоса. Наша задача - создать технику, которая работает безотказно.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Анна Васильева",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      quote:
        "Успешная космическая миссия начинается с четкого планирования. Мы превращаем смелые идеи в реальные проекты.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Игорь Новиков",
      role: "Systems Architect",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      quote:
        "Архитектура космических систем требует баланса между инновациями и надежностью. Мы строим мосты в будущее.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Елена Кузнецова",
      role: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      quote:
        "Данные из космоса содержат ответы на множество вопросов. Наша задача - научить машины видеть то, что не замечает человеческий глаз.",
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      name: "Сергей Волков",
      role: "Robotics Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      quote:
        "Роботы-исследователи должны быть автономными и умными. Мы создаём машины, которые могут принимать решения в неизвестных условиях.",
      gradient: "from-teal-400 to-cyan-600",
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-blue mb-8 text-left px-4">
          Разработчики
        </h2>

        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            📱 Листайте горизонтально • Всего {team.length} разработчиков
          </p>
        </div>

        <div className="relative">
          <div
            className="flex overflow-x-auto pb-6 gap-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {team.map((member, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-80 h-96 bg-gradient-to-br ${member.gradient} cursor-pointer transition-all duration-300 hover:scale-105 snap-center rounded-2xl ${
                    activeCard === index
                      ? "ring-4 ring-white ring-opacity-50"
                      : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="flex items-end h-full p-6">
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white/20">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-white">
                          <h3 className="text-xl font-bold leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-white/90 text-sm">{member.role}</p>
                        </div>
                      </div>
                    </div>

                    {activeCard === index && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 animate-fade-in">
                        <div className="text-center text-white">
                          <p className="text-lg leading-relaxed mb-4">
                            "{member.quote}"
                          </p>
                          <div className="w-8 h-0.5 bg-white/50 mx-auto"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Нажмите на карточку, чтобы узнать мнение разработчика
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
