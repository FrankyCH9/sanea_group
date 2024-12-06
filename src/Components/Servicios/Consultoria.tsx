import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HexagonImage } from "../exagonal/HexagonImage";

const Consultoria = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Imagen de encabezado con animación */}
      <div className="relative w-full h-72 bg-gray-200 overflow-hidden rounded-lg animate-slide-in">
        <Image
          src="/images/Carrousel/5.png"
          alt="Control de plagas"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Título principal con animación */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12 mt-4 animate-fade-in-up">
        Consultoría en Seguridad y Medio Ambiente
      </h1>

      {/* Tarjetas informativas */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">
              Staff de Profesionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Nuestro equipo de especialistas está conformado por profesionales
              de larga trayectoria en el ámbito estatal y privado.
            </p>
            <h3 className="font-semibold text-lg mb-3 text-blue-600">
              Entre las disciplinas que más destacan podemos mencionar:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ingeniería Ambiental</li>
              <li>• Ingeniería de Seguridad y Salud Ambiental</li>
              <li>• Ingeniería Química</li>
              <li>• Ingeniería Industrial</li>
              <li>• Biólogos</li>
              <li>• Sociólogos</li>
              <li>• Entomólogos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">
              Realizamos Estudios:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Expedientes de autorizaciones sanitarias</li>
              <li>• Estudios de Impacto Ambiental (EIA-DIA)</li>
              <li>• Estudios de acondicionamiento acústico</li>
              <li>• Planes de Manejo Ambiental (PAMA)</li>
              <li>• Evaluación Ambiental Preliminar (EVAP)</li>
              <li>• Plan de Gestión de Residuos Sólidos</li>
              <li>• Estudio de Caracterización de Residuos Sólidos</li>
              <li>
                • Declaración de Impacto Ambiental (DIA) para Proyectos de
                Disposición Final de Residuos Sólidos (Relleno Sanitario)
              </li>
              <li>
                • Sistema Integrado de Manejo de Residuos Sólidos Municipales
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Imágenes hexagonales */}
      <div className="grid md:grid-cols-2 gap-8 animate-slide-in">
        <HexagonImage
          src="/images/Capacitacion1.jpg"
          alt="Training session room with workers"
          height={300}
          width={500}
        />
        <HexagonImage
          src="/images/Capacitacion2.jpg"
          alt="Presentation room setup"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
};

export default Consultoria;

