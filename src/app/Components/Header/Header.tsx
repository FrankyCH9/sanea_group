'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { IoChevronDown } from 'react-icons/io5'; // Using a better arrow icon

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      {/* Fila 1: Información de contacto con fondo oscuro */}
      <div className="bg-[#1c1e2b] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="mailto:comercial@saneagrouperu.com" className="text-sm flex items-center hover:text-gray-400 transition-all">
              <MdEmail className="inline-block mr-2 text-lg" />
              comercial@saneagrouperu.com
            </a>
            <a href="tel:+999899318" className="text-sm flex items-center hover:text-gray-400 transition-all">
              <MdPhone className="inline-block mr-2 text-lg" />
              99899318
            </a>
            <a href="tel:+955914878" className="text-sm flex items-center hover:text-gray-400 transition-all">
              <MdPhone className="inline-block mr-2 text-lg" />
              955914878
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/saneagroup" className="text-gray-300 hover:text-white transition-all text-lg">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sanea_group/" className="text-gray-300 hover:text-white transition-all text-lg">
              <FaInstagram />
            </a>
            <a href="https://x.com/home" className="text-gray-300 hover:text-white transition-all text-lg">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/sanea-group-ingenieria-y-saneamiento-ambiental/" className="text-gray-300 hover:text-white transition-all text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Fila 2: Logo y Navegación con fondo blanco */}
      <div className="bg-white text-gray-900 px-8 py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <img src="/images/logog.png" alt="Logo" className="h-16" />
          </div>

          {/* Navegación */}
          <nav className="flex space-x-12 items-center">
            <a href="#" className="text-lg text-gray-700 hover:text-[#49e685] transition-all">Inicio</a>
            <a href="#" className="text-lg text-gray-700 hover:text-[#4bfd86] transition-all">Sobre Nosotros</a>
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="text-lg text-gray-700 hover:text-[#4bfd86] flex items-center transition-all">
                Servicios
                <IoChevronDown className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 w-48 mt-2 bg-white text-gray-900 shadow-lg rounded-md z-10">
                  <ul className="py-2">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#f1f1f1]">
                        <span>Servicio 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#f1f1f1]">
                        <span>Servicio 2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-[#f1f1f1]">
                        <span>Servicio 3</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="text-lg text-gray-700 hover:text-[#4bfd86] transition-all">Contactanos</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
