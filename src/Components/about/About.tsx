'use client';

import React, { useState, useEffect } from 'react';
import { Rat, Bug, SprayCan, Droplets, FlaskRound, Bird, Flower2, Cog } from 'lucide-react';

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="about" className="relative z-10 w-full mx-auto p-8 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Video con fondo que ocupa el 100% del ancho y altura */}
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

      <div className="text-center mb-16 relative z-20">
        {/* Título con animación */}
        <h2 className="text-5xl font-extrabold leading-tight tracking-wide animate-slide-in">
          Aportamos Soluciones con Experiencia Profunda
        </h2>
        <hr className="my-4 border-t-2 border-green-200" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 px-0 relative z-20 justify-center">
        {/* Servicio 1 */}
        <a href="/plaga" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <Rat className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desratización</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Control de roedores a través de captura y monitoreo.
          </p>
        </a>

        {/* Servicio 2 */}
        <a href="/desinfeccion" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <Bug className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinsectación</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Erradicación de insectos voladores y rastreros.
          </p>
        </a>

        {/* Servicio 3 */}
        <a href="/desinfeccion" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <SprayCan className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinfección</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Desinfección especializada para la erradicación de virus, hongos y bacterias.
          </p>
        </a>

        {/* Servicio 4 */}
        <a href="/limpieza" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <Droplets className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Limpieza de Reservorios de agua</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Desinfección y limpieza de reservorios de agua.
          </p>
        </a>

        {/* Servicio 5 */}
        <a href="/reservorio" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <Cog className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Mantenimiento de Reservorios de agua</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Mantenimiento preventivo y correctivo para reservorios de agua.
          </p>
        </a>

        {/* Servicio 6 */}
        <a href="/aviar" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
          <Bird className="mx-auto w-20 h-20 text-green-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Control Aviar</h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Control y manejo de plagas avícolas en edificios y sitios industriales.
          </p>
        </a>

        {/* Servicio 7 */}
        <a href="/consultoria" className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
          <Flower2 className="mx-auto w-20 h-20 text-emerald-400" />
          <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Consultoria en Seguridad y medio ambiente </h3>
          <p className="text-base mt-2 text-center animate-fade-in">
            Asesoría para empresas y particulares sobre normativas medioambientales.
          </p>
        </a>
      </div>
    </div>
  );
};

export default About;
