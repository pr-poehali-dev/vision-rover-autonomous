import Icon from "@/components/ui/icon";

const TechStack = () => {
  const technologies = [
    "ИИ-навигация",
    "Сенсорный массив",
    "Защищенный корпус",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cosmic-blue mb-16">
          Наш стек
        </h2>

        {/* GitHub Stars Widget */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Icon name="Github" size={24} className="text-cosmic-blue mr-3" />
            <span className="text-cosmic-blue font-semibold mr-2">
              vision-rover
            </span>
            <Icon name="Star" size={16} className="text-yellow-500 mr-1" />
            <span className="text-gray-600 font-medium">2.4k</span>
          </div>
        </div>

        {/* Technologies List */}
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:border-aqua/30 border-2 border-transparent transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-cosmic-blue rounded-lg flex items-center justify-center">
                <Icon name="Cpu" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cosmic-blue">{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
