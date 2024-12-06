import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bird, Shield, AlertCircle } from 'lucide-react';
import { HexagonImage } from "../exagonal/HexagonImage";
import Image from "next/image";

export default function Aviar() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Imagen de encabezado */}
      <div className="relative w-full h-72 bg-gray-200 overflow-hidden rounded-lg animate-slide-in">
        <Image
          src="/images/Carrousel/6.png"
          alt="Control de plagas"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {/* Texto de introducción */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 mt-4">
            Control Aviar y Animales Menores
          </h1>
          <p className="text-gray-600 mb-4">
            Las aves son portadoras de gran cantidad de parásitos, como garrapatas, 
            moscas de la paloma y piojos, así como de enfermedades zoonóticas 
            (que afectan a los humanos) como la clamidiosis, salmonelosis, 
            colibacilosis, encefalitis equina o tuberculosis aviar.
          </p>
          <p className="text-gray-600">
            Los excrementos de las aves poseen un alto grado de ácido 
            fosfórico y urea que además de emitir mal olor, acelera 
            el proceso de corrosión de los metales aumentando 
            costos de mantenimiento para la industria.
          </p>
        </div>

        {/* Tarjetas de información */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bird className="h-5 w-5" />
                <span>Metodología de Tratamientos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Puas Anti - Aves</h3>
                <p className="text-sm">
                  Es un método eficaz para ayudar al control de las palomas, 
                  la instalación se realiza en todos los puntos donde las aves 
                  pernocten o quieran realizar sus nidos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Colocación de Gel - Anti Aves</h3>
                <p className="text-sm">
                  Mantiene las mismas propiedades que el repelente líquido, 
                  no tóxico al ser ingerido, ideal para cornizas, barandas, 
                  techos y cualquier punto que sirva de aterrizaje para las palomas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Jaulas Capturadoras de Palomas</h3>
                <p className="text-sm">
                  Se instalan jaulas de captura de palomas según la ubicación y comportamiento, 
                  de acuerdo al control integral anual que se realice, o infestación de palomas. 
                  La captura viene por medios de atrayentes naturales como maíz y agua, las 
                  palomas entran en la jaula sin posibilidad de salida.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Nuestros Tratamientos contra Animales Menores</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Reubicación de Animales menores abandonados</li>
                <li>Reubicación de Animales callejeros</li>
              </ul>
              <div>
                <h3 className="font-semibold text-blue-600 flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5" />
                  Características importantes
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    Nunca se debe abrir la puerta de la jaula, porque los animales menores 
                    tratarán de escapar lanzándose hacia el personal.
                  </li>
                  <li>
                    Nuestro alcance de servicio consiste en la captura y reubicación, siendo 
                    enfáticos en que no maltratamos ni comercializamos estos animales.
                  </li>
                  <li>
                    Se debe coordinar con alguna institución pública o privada que albergue a 
                    estos animales a fin de que puedan ser transportados en las jaulas hacia su 
                    destino final.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Imágenes hexagonales */}
        <div className="grid grid-cols-2 gap-4">
          <HexagonImage
            src="/Servicios/Desinfeccion.jpg"
            alt="Sistema de púas anti-aves"
            width={300}
            height={200}
          />
          <HexagonImage
            src="/Servicios/Desinfeccion.jpg"
            alt="Aplicador de gel anti-aves"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
