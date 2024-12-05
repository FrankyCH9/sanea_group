'use client'
import { useEffect, useState } from "react";
import { Rat, Bug, SprayCan, Droplets, FlaskRound, Bird, Flower2 } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  // Establecer el estado para indicar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center mb-12">
      {/* Video solo se carga en el cliente */}
      {isClient && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => console.error("Error al cargar el video:", e)}  // Manejo de errores
        >
          <source
            src="/video/1.mp4"  // Verifica que esta ruta sea correcta
            type="video/mp4"
          />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto p-8 text-white">
        <div className="text-center mb-16">
          {/* Título con animación de deslizamiento */}
          <h2 className="text-5xl font-extrabold leading-tight tracking-wide animate-slide-in">
            Aportamos Soluciones con Experiencia Profunda
          </h2>
          <hr className="my-4 border-t-2 border-gray-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 px-0">
          {/* Servicio 1 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Rat className="mx-auto w-14 h-14 text-yellow-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desratización</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Control de roedores a través de captura y monitoreo.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Bug className="mx-auto w-14 h-14 text-green-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinsectación</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Erradicación de insectos voladores y rastreros.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <SprayCan className="mx-auto w-14 h-14 text-blue-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinfección</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Desinfección especializada para la erradicación de virus, hongos y bacterias.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Droplets className="mx-auto w-14 h-14 text-purple-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Limpieza de Reservorios de agua</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Desinfección y limpieza de reservorios de agua.
            </p>
          </div>

          {/* Servicio 5 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <FlaskRound className="mx-auto w-14 h-14 text-red-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Mantenimiento de Reservorios de agua</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Servicios de mantenimiento especializado para reservorios de agua.
            </p>
          </div>

          {/* Servicio 6 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Bird className="mx-auto w-14 h-14 text-orange-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Control aviar</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Programas de gestión y control de aves.
            </p>
          </div>

          {/* Servicio 7 */}
          <div className="bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Flower2 className="mx-auto w-14 h-14 text-teal-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Consultoria en seguridad y medio ambiente</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Servicios de consultoría en seguridad y medio ambiente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
