import { FaCircle, FaDesktop, FaMobileAlt, FaPaintBrush, FaShapes, FaCogs } from 'react-icons/fa';

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: FaCircle,
    title: "Brand Identity",
    description: "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition"
  },
  {
    icon: FaDesktop,
    title: "Web Design",
    description: "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action."
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Design",
    description: "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless."
  },
  {
    icon: FaPaintBrush,
    title: "Illustration",
    description: "We create visual stories that help explain your mission and vision."
  },
  {
    icon: FaShapes,
    title: "Iconography",
    description: "Icons that support the brand and help simplify your message."
  },
  {
    icon: FaCogs,
    title: "Development",
    description: "Solve any design challenge in Webflow. If you can dream it, we can build it."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-normal text-center mb-16">
        Servicios
      </h2>

      {/* Primera fila de 3 tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg transition-shadow hover:shadow-lg"
            style={{
              animation: `slideInFromLeft 0.8s ease-out forwards`,
              animationDelay: `${index * 0.3}s`, // Delay basado en el índice para un efecto secuencial
            }}
          >
            <div className="transition-all duration-300 transform hover:scale-110">
              <service.icon className="w-12 h-12 mb-4 text-indigo-600" />
            </div>
            <h3 className="text-xl font-normal mb-3 transition-all duration-300 transform hover:translate-x-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Título para la segunda fila de servicios */}
      <h2 className="text-4xl md:text-5xl font-normal text-center mb-16">
        Más Servicios
      </h2>

      {/* Segunda fila de 3 tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(3).map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg transition-shadow hover:shadow-lg"
            style={{
              animation: `slideInFromLeft 0.8s ease-out forwards`,
              animationDelay: `${index * 0.3}s`, // Delay basado en el índice para un efecto secuencial
            }}
          >
            <div className="transition-all duration-300 transform hover:scale-110">
              <service.icon className="w-12 h-12 mb-4 text-indigo-600" />
            </div>
            <h3 className="text-xl font-normal mb-3 transition-all duration-300 transform hover:translate-x-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Título para la tercera fila de un solo servicio */}
      <h2 className="text-4xl md:text-5xl font-normal text-center mb-16">
        Nuestro Servicio Destacado
      </h2>

      {/* Una tarjeta con un solo servicio, centrado y destacado */}
      <div className="flex justify-center mb-16">
        {services.slice(0, 1).map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-10 rounded-xl shadow-xl text-white transition-shadow hover:shadow-2xl"
            style={{
              animation: `slideInFromLeft 0.8s ease-out forwards`,
              animationDelay: `${index * 0.3}s`, // Delay basado en el índice para un efecto secuencial
            }}
          >
            <div className="transition-all duration-300 transform hover:scale-110">
              <service.icon className="w-16 h-16 mb-6 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {service.title}
            </h3>
            <p className="leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

