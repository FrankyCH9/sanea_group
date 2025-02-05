import Image from "next/image";
import { HexagonImage } from "../exagonal/HexagonImage";

interface Product {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Desinfeccion: React.FC = () => {
  const productos: Product[] = [
    {
      name: "Desinfectante 1",
      description: "Desinfectante potente a base de Guadinina Polimérica.",
      imageSrc: "/images/Desinfeccion/10.jpeg",
      imageAlt: "Desinfectante 1",
    },
    {
      name: "Desinfectante 2",
      description: "Eliminación de bacterias, virus, hongos y levaduras.",
      imageSrc: "/images/Desinfeccion/11.jpeg",
      imageAlt: "Desinfectante 2",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 font-sans bg-gray-50">
      {/* Imagen principal con animación */}
      <div className="relative mb-12 animate-fade-in-up">
        <img
          src="https://www.ragscorp.com/wp-content/uploads/2018/12/control-de-plagas-fumigacion.jpg"
          alt="Ubicación"
          className="w-full h-64 object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
          <h2 className="text-6xl font-bold text-white">Desinfección de Ambientes</h2>
        </div>
      </div>

     

      <div className="grid md:grid-cols-2 gap-12">
        {/* Sección de Descripción con animaciones */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">CONSISTE EN:</h2>
          <p className="text-lg text-gray-700 mb-8">
            La eliminación de los microorganismos patógenos (bacterias, virus y hongos) en todos los ambientes que puedan resultar nocivos,
            mediante la utilización de agentes fundamentalmente químicos.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">DIAGNÓSTICO E IMPLEMENTACIÓN:</h2>
          <p className="text-lg text-gray-700 mb-8">
            La eliminación de los microorganismos patógenos (bacterias, virus y hongos) mediante la utilización de agentes
            químicos, en ambientes contaminados que puedan resultar nocivos para la salud.
          </p>

          

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">MONITOREO</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>
              El monitoreo se realizará luego de haber realizado la ejecución de la desinfección, y los resultados serán
              reportados en el informe final.
            </li>
          </ul>
        </div>

        {/* Sección de Productos con animaciones */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">NUESTROS PRODUCTOS</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-4 mb-12">
            {productos.map((producto, index) => (
              <li key={index}>{producto.description}</li>
            ))}
          </ul>

          <div className="grid gap-8 md:grid-cols-1">
            {productos.map((producto, index) => (
              <div
                key={index}
              >
                <HexagonImage
                  src={producto.imageSrc}
                  alt={producto.imageAlt}
                />
                {/* Efecto de hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desinfeccion;

