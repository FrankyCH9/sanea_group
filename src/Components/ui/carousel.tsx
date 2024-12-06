// src/components/ui/carousel.tsx
import React from 'react'

export const Carousel = ({ children }: { children: React.ReactNode }) => (
  <div className="carousel-container">{children}</div>
)

export const CarouselContent = ({ children }: { children: React.ReactNode }) => (
  <div className="carousel-content">{children}</div>
)

export const CarouselItem = ({ children }: { children: React.ReactNode }) => (
  <div className="carousel-item">{children}</div>
)

export const CarouselNext = () => <button className="carousel-next">Next</button>
export const CarouselPrevious = () => <button className="carousel-prev">Previous</button>
