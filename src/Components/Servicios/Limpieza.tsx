import Image from "next/image";
import { HexagonImage } from "../exagonal/HexagonImage";

const Limpieza: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-gray-50">
      <div className="relative mb-12 animate-fade-in-up">
        <img
          src="https://www.ragscorp.com/wp-content/uploads/2018/12/control-de-plagas-fumigacion.jpg"
          alt="Ubicación"
          className="w-full h-64 object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
          <h2 className="text-6xl font-bold text-white">Limpieza y Desinfección de Reservorios de Agua</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Sección de Descripción con animaciones */}
        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">CONSISTE EN:</h2>
            <p className="text-gray-700 leading-relaxed">
              Realizamos la limpieza profunda de paredes, pisos y la eliminación de toda
              materia orgánica (bacterias, hongos y sarro) o cuerpo extraño en un tanque,
              cisterna o reservorio a través de equipos mecánicos y eléctricos.
            </p>
          </div>

          {/* Imagen descriptiva con animación */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden animate-slide-in">
            <Image
              src="/images/Reservorios/12.jpeg"
              alt="Limpieza de reservorio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sección de Imágenes Hexagonales */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-blue-700 mb-8">
            Realizamos la limpieza de:
          </h2>

          <div className="grid gap-8">
            {/* Hexagonal images */}
            <HexagonImage
              src="/images/Reservorios/13.jpeg"
              alt="Servicio de limpieza 1"
            />
            <HexagonImage
              src="/images/Servicios-Fotos/Mantenimiento.jpg"
              alt="Servicio de limpieza 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limpieza;
