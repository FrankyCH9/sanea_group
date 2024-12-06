// components/HexagonImage.tsx
'use client';

import React from 'react';

interface HexagonImageProps {
  src: string;
  alt: string;
  height?: number; // Hacemos estas propiedades opcionales
  width?: number;  // Hacemos estas propiedades opcionales
}

const HexagonImage: React.FC<HexagonImageProps> = ({ src, alt, height = 300, width = 500 }) => {
  return (
    <div className="hexagon" style={{ width: `${width}px`, height: `${height}px` }}>
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
      <style jsx>{`
        .hexagon {
          position: relative;
          overflow: hidden;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  );
};

export { HexagonImage };
