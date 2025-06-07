import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#78CBB4] rounded-lg flex items-center justify-center">
              <Icon name="Bot" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-[#012F2C]">
              Vision Rover
            </span>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-[#012F2C] transition-colors"
            >
              Принципы работы
            </a>
            <a
              href="#tech"
              className="text-gray-700 hover:text-[#012F2C] transition-colors"
            >
              Стек
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-[#012F2C] transition-colors"
            >
              Разработчики
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#012F2C] transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* CTA кнопка */}
          <Button className="bg-[#78CBB4] hover:bg-[#5fb5a0] text-white px-6 py-2 rounded-lg transition-colors">
            Демо
          </Button>

          {/* Мобильное меню */}
          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-[#012F2C]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
