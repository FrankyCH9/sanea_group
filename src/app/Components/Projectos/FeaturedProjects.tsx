"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

interface Project {
  title: string
  subtitle: string
  location: string
  service: string
  image: string
}

const projects: Project[] = [
  {
    title: "Las Bambas",
    subtitle: "Lagunas Out Site",
    location: "Apurímac, Perú",
    service: "Batimetría",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Antamina",
    subtitle: "Fotogrametría PPD + Tucush",
    location: "Áncash, Perú",
    service: "Fotogrametría",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Minera San Martín",
    subtitle: "Brazo Cargador 980H",
    location: "Perú",
    service: "Minería",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-orange-500 border-r-[8px] border-r-transparent transform rotate-90" />
            <h2 className="text-3xl font-bold text-[#1a2b5f]">PROYECTOS DESTACADOS</h2>
          </div>
          <p className="text-gray-600">Servicios generales brindados en los diferentes paises.</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white hover:bg-orange-500 hover:text-white border-orange-500 text-orange-500"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`overflow-hidden transition-all duration-500 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-70 scale-95"
            }`}
          >
            <CardContent className="p-0 relative">
              <div className="relative h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-lg mb-4">{project.subtitle}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm opacity-75">Ubicación</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Servicio</p>
                    <p className="font-medium">{project.service}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
