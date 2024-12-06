import Image from "next/image";
import { HexagonImage } from "../exagonal/HexagonImage";

const Limpieza: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans bg-gray-50">
      {/* Imagen principal con animación */}
      <div className="relative w-full h-72 bg-gray-200 overflow-hidden rounded-lg shadow-lg animate-slide-in">
        <Image
          src="/images/Carrousel/1.jpeg" // Reemplaza con la ruta de tu imagen
          alt="Control de plagas"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Título principal con animación */}
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-12 mt-4 animate-fade-in-up">
        Limpieza y Desinfección de Reservorios de Agua
      </h1>

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
          <div className="relative h-64 w-full rounded-lg overflow-hidden animate-slide-in">
            <Image
              src="/images/Servicios-Fotos/tanqueagua2.jpg"
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
              src="/images/Servicios-Fotos/10.jpeg"
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
