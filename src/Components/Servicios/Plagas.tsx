import Image from "next/image";
import React from "react";
import { HexagonImage } from "../exagonal/HexagonImage";

const Plagas: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-12 bg-gray-50">
      {/* Imagen horizontal al inicio con animación */}
      <div className="relative w-full h-72 bg-gray-200 overflow-hidden rounded-lg shadow-lg animate-slide-in">
        <Image
          src="/images/Carrousel/5.png" // Reemplaza con la ruta de tu imagen
          alt="Control de plagas"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-12 animate-fade-in-up">
        {/* Sección de imágenes hexagonales */}
        <div className="md:w-1/2 flex justify-center gap-12 flex-wrap">
          {/* Imagen hexagonal grande */}
          <HexagonImage
            src="/images/Control/1.jpeg"
            alt="Escalera y equipo de control de plagas"
          />

          {/* Segunda imagen hexagonal */}
          <HexagonImage
            src="/images/Control/2.jpeg"
            alt="Técnico aplicando tratamiento"
          />
        </div>

        {/* Sección de texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 animate-fade-in-up">
            Control de plagas
          </h2>
          <p className="mb-6 text-lg text-gray-800 leading-relaxed">
            Utilizamos metodologías y procesos eficientes en la eliminación de todo tipo de
            plagas rasteras o voladoras a niveles aceptables. Nuestros tratamientos son
            efectivos y garantizan un ambiente libre de plagas, manteniendo la seguridad
            de tus espacios.
          </p>
          <p className="mb-6 text-lg text-gray-800 leading-relaxed">
            Relacionamos los niveles poblacionales de las plagas y la efectividad de los
            controles implementados, asegurando un monitoreo constante para mantener
            la calidad de nuestros servicios.
          </p>
          <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>Tratamiento de desinsectación</li>
            <li>Tratamiento de desratización</li>
            <li>Fumigación con fosfina</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plagas;


