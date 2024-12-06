'use client';
import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5'; // Icono de flecha

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-gradient-to-bl from-black/60 to-black/30 z-20">
      <header className="relative z-10 w-full max-w-7xl mx-auto px-8 py-6 text-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <a href="/" className="flex items-center">
              <img src="/images/Logo_SinFondo.png" alt="Logo" className="h-16" />
            </a>
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
            className={`absolute lg:relative lg:flex lg:space-x-12 items-center bg-gray-900 lg:bg-transparent w-full lg:w-auto top-full left-0 lg:top-0 transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}
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
                <div className="absolute left-0 w-48 mt-2 bg-white text-gray-900 shadow-lg rounded-md z-50 opacity-90">
                  <ul className="py-2">
                    <li>
                      <a href="/plaga" className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Desratización
                      </a>
                    </li>
                    <li>
                      <a href="/desinfeccion" className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Desinsectación
                      </a>
                    </li>
                    <li>
                      <a href="/limpieza" className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Limpieza de Reservorios de agua
                      </a>
                    </li>
                    <li>
                      <a href="/reservorio" className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Mantenimiento de Reservorios de agua
                      </a>
                    </li>
                    <li>
                      <a href="/aviar" className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Control aviar
                      </a>
                    </li>
                    <li>
                      <a href="/consultoria
                      " className="block px-4 py-2 hover:bg-emerald-400 hover:text-white">
                        Consultoria en seguridad y medio ambiente
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
    </div>
  );
};

export default Header;
