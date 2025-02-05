import Image from "next/image";
import React from "react";
import { HexagonImage } from "../exagonal/HexagonImage";

const Plagas: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-12 bg-gray-50">
      {/* Imagen horizontal al inicio con animación */}
      <div className="relative mb-12 animate-fade-in-up">
        <img
          src="https://www.ragscorp.com/wp-content/uploads/2018/12/control-de-plagas-fumigacion.jpg"
          alt="Ubicación"
          className="w-full h-64 object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
          <h2 className="text-6xl font-bold text-white">Control de plagas</h2>
        </div>
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


