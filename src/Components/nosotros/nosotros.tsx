'use client'
import Image from "next/image";
import { User, TrendingUp } from "lucide-react";

// Imágenes para la galería
const images = [
  "/images/nosotros.jpg", // Ruta de la imagen local
];

export default function Nosotros() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Título principal */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center animate-fade-in-up">
        Nosotros
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Sección de Información */}
        <section className="flex flex-col justify-center animate-slide-in">
          <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-gray-900 pb-3 mb-6">
            Somos una empresa sólida y con objetivos claros.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nuestro proyecto inicio un 3 de mayo del 2019 con la finalidad de ofrecer servicios especializados en Ingeniería, Saneamiento Ambiental y Gestión en Medio Ambiente con el soporte de un grupo humano altamente especializado.
            Desde entonces venimos realizando servicios con altos estándares de calidad, manteniendo la satisfacción de nuestros clientes, la salud y seguridad de nuestros trabajadores y el cuidado del medio ambiente.   
          </p>
          <ul className="mt-6 space-y-4 list-disc pl-5 text-gray-700">
            <li className="text-lg">Experiencia comprobada en el sector.</li>
            <li className="text-lg">Servicios personalizados y especializados.</li>
            <li className="text-lg">Uso de productos seguros y certificados.</li>
            <li className="text-lg">Atención rápida y efectiva.</li>
          </ul>
        </section>

        {/* Sección de Imagen y Galería */}
        <div className="animate-slide-in">
          <Image
            src={images[0]} // Usando la ruta local
            alt="Equipo de trabajo"
            width={700}
            height={500}
            className="rounded-xl shadow-xl object-cover w-full mb-6"
          />
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <div className="py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          
          {/* Sección de Misión */}
          <div className="border-4 border-gray-900 rounded-lg p-8 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-in">
            <div className="mx-auto w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              MISIÓN
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dar soluciones eficientes a nuestros socios, asegurando la calidad y satisfacción en la prestación de nuestros servicios.
            </p>
          </div>

          {/* Sección de Visión */}
          <div className="border-4 border-gray-800 rounded-lg p-8 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-slide-in">
            <div className="mx-auto w-16 h-16 border-4 border-gray-800 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-gray-800" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              VISIÓN
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ser reconocidos a nivel nacional como una empresa lider en la prestación de servicios en Ingeniería, Saneamiento Ambiental y Gestión en medio Ambiente.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
