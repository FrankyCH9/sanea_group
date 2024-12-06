import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HardHat, Wrench, Zap } from "lucide-react";
import Image from "next/image";

export default function Reservorio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-8xl mx-auto space-y-12">
        {/* Imagen principal */}
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden rounded-lg shadow-lg animate-slide-in">
          <Image
            src="/images/Carrousel/22.jpeg"
            alt="Control de plagas"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Título y descripción */}
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-extrabold text-blue-800 animate-fade-in">
            Mantenimiento de Reservorios de Agua
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            El mantenimiento de reservorios incluye actividades para corregir fallas y
            garantizar el buen funcionamiento de sus estructuras.
          </p>
        </div>

        {/* Tarjetas de contenido */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta Físico */}
          <Card >
            <CardHeader>
              <div className="flex items-center gap-2">
                <HardHat className="h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors" />
                <CardTitle className="text-xl font-semibold">
                  Mantenimiento Físico
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Cambio de componentes y accesorios</li>
                <li>Mantenimiento preventivo de válvulas y componentes</li>
                <li>Mantenimiento de sistemas de bombeo</li>
                <li>Tuberías de rebose y salida</li>
                <li>Inspección de empaquetaduras</li>
                <li>Resanado de paredes y superficies</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tarjeta Tablero Eléctrico */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-500 hover:text-yellow-700 transition-colors" />
                <CardTitle className="text-xl font-semibold">
                  Mantenimiento Eléctrico
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Mantenimiento preventivo y correctivo</li>
                <li>Limpieza de componentes eléctricos</li>
                <li>Ajuste de borneras y conexiones</li>
                <li>Verificación de controles de funcionamiento</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tarjeta centrada con imagen */}
        <div className="flex justify-center">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-green-600 hover:text-green-800 transition-colors" />
                <CardTitle className="text-xl font-semibold">
                  Realizamos Mantenimiento
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/images/Servicios-Fotos/tanqueagua2.jpg"
                  alt="Mantenimiento de reservorios"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                Garantizamos calidad y seguridad en el mantenimiento de reservorios
                de agua.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}