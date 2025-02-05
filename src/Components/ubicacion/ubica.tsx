"use client"

import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react"

export default function Ubica() {
  const handleDirections = () => {
    window.open("https://www.google.com/maps/place/SANEA+GROUP,+Saenz+Pe%C3%B1a+302,+Miraflores+04001/data=!4m2!3m1!1s0x91a953bd0456f7d7:0x5c3be5b1aa6886ae?entry=gps&coh=192189&g_ep=CAESBjI1LjQuMRgAIJ6dCip1LDk0MjI2MDQ0LDk0MjQyNTQ0LDk0MjIzMjk5LDk0MjE2NDEzLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg0MzkzLDk0MjEzMjAwQgJQRQ%3D%3D", "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Sección de la imagen con texto */}
      <div className="relative mb-12 animate-fade-in-up">
        <img 
          src="https://www.lavanguardia.com/andro4all/hero/2024/01/localizar-un-movil-de-forma-legal.jpg?width=768&aspect_ratio=16:9&format=nowebp"  // Asegúrate de usar la ruta correcta de la imagen
          alt="Ubicación"
          className="w-full h-64 object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-3xl">
          <h2 className="text-6xl font-bold text-white">Nuestra Ubicación</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Contenedor de detalles de la ubicación */}
        <div className="bg-white rounded-3xl shadow-lg p-8 h-[400px] flex flex-col justify-between animate-slide-in">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <span className="text-gray-600">Saenz Peña 302, Miraflores 04001</span>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              <div className="space-y-1 text-gray-600">
                <p>Lunes - viernes: 9:00 am  - 9:00 pm </p>
                <p>Sáb: 9:00 am - 7:00 pm</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="tel:+51234567" className="text-gray-600 hover:text-gray-800 transition-colors duration-500">
                +51 998998318
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <a href="mailto:info@dulcesmonadas.com" className="text-gray-600 hover:text-gray-800 transition-colors duration-500">
              comercial@saneagroupperu.com
              </a>
            </div>
          </div>

          <button 
            onClick={handleDirections} 
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Cómo llegar
          </button>
        </div>

        {/* Mapa actualizado con el nuevo enlace de ubicación */}
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg animate-slide-in">
          <a 
            href="https://www.google.com/maps/place/SANEA+GROUP,+Saenz+Pe%C3%B1a+302,+Miraflores+04001/data=!4m2!3m1!1s0x91a953bd0456f7d7:0x5c3be5b1aa6886ae?entry=gps&coh=192189&g_ep=CAESBjI1LjQuMRgAIJ6dCip1LDk0MjI2MDQ0LDk0MjQyNTQ0LDk0MjIzMjk5LDk0MjE2NDEzLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg0MzkzLDk0MjEzMjAwQgJQRQ%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.0832560808438!2d-71.56083332419587!3d-16.375055695613367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a953bd0456f7d7:0x5c3be5b1aa6886ae!2zU2FuZWEgR1JPVVAuLi4u2z9cDqRgqzIu!5e0!3m2!1sen!2s!4v1635180846183!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
