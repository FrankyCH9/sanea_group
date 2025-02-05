import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Bird, Shield, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function Aviar() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12 animate-fade-in-up">
  <img 
    src="https://www.ragscorp.com/wp-content/uploads/2018/12/control-de-plagas-fumigacion.jpg"
    alt="Ubicación"
    className="w-full h-64 object-cover rounded-3xl shadow-lg"
  />
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
    <h2 className="text-6xl font-bold text-white">Control Aviar y Animales Menores</h2>
  </div>
</div>


      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {/* Texto de introducción */}
        <div className="text-center">
         
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
          {/* Métodos de tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bird className="h-5 w-5" />
                <span>Metodología de Tratamientos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {[
                {
                  title: "Púas Anti - Aves",
                  description:
                    "Es un método eficaz para ayudar al control de las palomas. La instalación se realiza en todos los puntos donde las aves pernocten o quieran realizar sus nidos."
                },
                {
                  title: "Colocación de Gel - Anti Aves",
                  description:
                    "Mantiene las mismas propiedades que el repelente líquido, no tóxico al ser ingerido. Ideal para cornizas, barandas, techos y cualquier punto de aterrizaje para las palomas."
                },
                {
                  title: "Jaulas Capturadoras de Palomas",
                  description:
                    "Se instalan jaulas de captura según la ubicación y comportamiento. La captura se realiza con atrayentes naturales como maíz y agua, impidiendo la salida de las palomas."
                }
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tratamientos contra animales menores */}
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
                    Nunca se debe abrir la puerta de la jaula, porque los animales menores tratarán de escapar lanzándose hacia el personal.
                  </li>
                  <li>
                    Nuestro alcance de servicio consiste en la captura y reubicación, siendo enfáticos en que no maltratamos ni comercializamos estos animales.
                  </li>
                  <li>
                    Se debe coordinar con alguna institución pública o privada que albergue a estos animales para su traslado a su destino final.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Imágenes hexagonales centradas */}
        <div className="flex justify-center gap-40">
          {[
            { src: "/images/15.jpeg", alt: "Sistema de púas anti-aves" },
            { src: "/images/16.jpeg", alt: "Aplicador de gel anti-aves" }
          ].map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
