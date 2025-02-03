'use client';
import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carrusel.css';
import Image from 'next/image';

// Lista de marcas con rutas de imágenes
const brands = [
  { src: "/images/logo/CISSAC.jpg", alt: "Logo INPE" },
  { src: "/images/logo/CERRO.png", alt: "Logo INPE" },
  { src: "/images/logo/GOBIERNO.jpg", alt: "Logo INPE" },
  { src: "/images/logo/LLAMAGAS.png", alt: "Logo INPE" },
  { src: "/images/logo/logo.png", alt: "Logo INPE" },
  { src: "/images/logo/PLASTIGESA.jpg", alt: "Logo INPE" },
  { src: "/images/logo/PNP.png", alt: "Logo INPE" },
  { src: "/images/logo/Sedapal.jpg", alt: "Logo INPE" },
  { src: "/images/logo/Socosani.png", alt: "Logo INPE" },
  { src: "/images/logo/SPAZIO.png", alt: "Logo INPE" },
  { src: "/images/logo/TISU.jpg", alt: "Logo INPE" },
  { src: "/images/logo/als.png", alt: "Logo INPE" },
  { src: "/images/logo/alsur.png", alt: "Logo INPE" },
  { src: "/images/logo/katya.png", alt: "Logo INPE" }
];

const Carrusel = () => {
  const settings = {
    dots: false,
    infinite: brands.length > 1,
    speed: 500,
    slidesToShow: Math.min(brands.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(brands.length, 3), slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: Math.min(brands.length, 2), slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const whatsappNumber = "998998318";
  const whatsappMessage = encodeURIComponent("¿En qué podemos ayudarte? Somos [Nombre de la Empresa].");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="brand-carousel-container text-center">
      

      <div className="text-center my-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 text-white px-8 py-5 rounded-full shadow-lg hover:bg-emerald-800 transition duration-300 w-full max-w-md block mx-auto font-roboto"
        >
          Solicita una cotización
        </a>
      </div>
      <h2 className="text-6xl font-bold text-green-800 mb-6 mt-4">Nuestros Clientes</h2>

      <div  className='overflow-hidden'>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brand-slide flex items-center justify-center mt-10 mb-10">
            <div className="w-[200px] h-[130px] flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={300}
                height={250}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carrusel;
