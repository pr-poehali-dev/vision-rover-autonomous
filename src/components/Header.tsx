import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#78CBB4] rounded-lg flex items-center justify-center">
              <Icon name="Bot" size={16} className="text-white sm:hidden" />
              <Icon
                name="Bot"
                size={20}
                className="text-white hidden sm:block"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-[#012F2C]">
              Vision Rover
            </span>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-[#012F2C] transition-colors text-sm xl:text-base"
            >
              Принципы работы
            </a>
            <a
              href="#tech"
              className="text-gray-700 hover:text-[#012F2C] transition-colors text-sm xl:text-base"
            >
              Стек
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-[#012F2C] transition-colors text-sm xl:text-base"
            >
              Разработчики
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#012F2C] transition-colors text-sm xl:text-base"
            >
              Контакты
            </a>
          </nav>

          {/* CTA кнопка */}
          <Button className="hidden sm:block bg-[#78CBB4] hover:bg-[#5fb5a0] text-white px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base">
            Демо
          </Button>

          {/* Мобильное меню */}
          <button className="lg:hidden p-1">
            <Icon name="Menu" size={20} className="text-[#012F2C] sm:hidden" />
            <Icon
              name="Menu"
              size={24}
              className="text-[#012F2C] hidden sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
