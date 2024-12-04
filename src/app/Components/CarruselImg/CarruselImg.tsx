'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselImage {
  url: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Mountain landscape'
  },
  {
    url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
    alt: 'Ocean sunset'
  },
  {
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    alt: 'Forest path'
  }
];

const CarouselImg: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Cambia la imagen cada 5 segundos
    }
    return () => clearInterval(interval); 
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[650px] group">
      <div
        className="relative h-full overflow-hidden "
        onMouseEnter={() => setIsAutoPlaying(false)} 
        onMouseLeave={() => setIsAutoPlaying(true)}  
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full" 
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={prevSlide}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={nextSlide}
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselImg;
