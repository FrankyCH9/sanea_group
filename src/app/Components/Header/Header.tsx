'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5'; // Icono de flecha
import { Rat, Bug, SprayCan, Droplets, FlaskRound, Bird, Flower2 } from 'lucide-react';

const HeaderAbout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Establecer el estado para indicar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat">
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
      <header className="relative z-10 w-full max-w-7xl mx-auto px-8 py-6 text-white">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center space-x-6">
      <img src="/images/logog.png" alt="Logo" className="h-16" />
    </div>

    {/* Menú hamburguesa */}
    <div className="lg:hidden flex items-center space-x-6">
      <button
        className="text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '×' : '≡'}
      </button>
    </div>

    {/* Navegación */}
    <nav
      className={`absolute lg:relative lg:flex lg:space-x-12 items-center bg-gray-900 lg:bg-transparent w-full lg:w-auto top-full left-0 lg:top-0 transition-transform duration-300 ${
        menuOpen ? 'block' : 'hidden'
      }`}
    >
      <a href="#" className="block lg:inline-block text-lg px-4 py-2 lg:py-0 relative group">
        Inicio
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
      </a>

      <a href="#about" className="block lg:inline-block text-lg px-4 py-2 lg:py-0 relative group">
        Sobre Nosotros
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
      </a>

      {/* Dropdown de Servicios */}
      <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-lg text-white hover:text-emerald-400 flex items-center transition-all"
              >
                Servicios
                <IoChevronDown
                  className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 w-48 mt-2 bg-white text-gray-900 shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-emerald-400"
                      >
                        <span>Servicio 1</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-emerald-400"
                      >
                        <span>Servicio 2</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-emerald-400"
                      >
                        <span>Servicio 3</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

      <a href="#contact" className="block lg:inline-block text-lg px-4 py-2 lg:py-0 relative group">
        Contáctanos
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
      </a>
    </nav>
  </div>
</header>


      {/* About Section */}
      <div id="about" className="relative z-10 w-full max-w-7xl mx-auto p-8 text-white min-h-screen">
        <div className="text-center mb-16">
          {/* Título con animación */}
          <h2 className="text-5xl font-extrabold leading-tight tracking-wide animate-slide-in">
            Aportamos Soluciones con Experiencia Profunda
          </h2>
          <hr className="my-4 border-t-2 border-gray-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 px-0">
          {/* Servicio 1 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Rat className="mx-auto w-20 h-20 text-yellow-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desratización</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Control de roedores a través de captura y monitoreo.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Bug className="mx-auto w-20 h-20 text-green-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinsectación</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Erradicación de insectos voladores y rastreros.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <SprayCan className="mx-auto w-20 h-20 text-blue-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Desinfección</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Desinfección especializada para la erradicación de virus, hongos y bacterias.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Droplets className="mx-auto w-20 h-20 text-purple-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Limpieza de Reservorios de agua</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Desinfección y limpieza de reservorios de agua.
            </p>
          </div>

          {/* Servicio 5 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <FlaskRound className="mx-auto w-20 h-20 text-red-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Mantenimiento de Reservorios de agua</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Servicios de mantenimiento especializado para reservorios de agua.
            </p>
          </div>

          {/* Servicio 6 */}
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:bg-white/30 transition-all duration-300">
            <Bird className="mx-auto w-20 h-20 text-orange-400" />
            <h3 className="font-semibold text-xl mt-4 text-center animate-slide-in">Control aviar</h3>
            <p className="text-base mt-2 text-center animate-fade-in">
              Servicios de control y prevención de plagas aviares.
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
};

export default HeaderAbout;

