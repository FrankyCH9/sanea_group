import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HexagonImage } from "../exagonal/HexagonImage";

const Consultoria = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-12 animate-fade-in-up">
        <img
          src="https://www.ragscorp.com/wp-content/uploads/2018/12/control-de-plagas-fumigacion.jpg"
          alt="Ubicación"
          className="w-full h-64 object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
          <h2 className="text-6xl font-bold text-white">Consultoría en Seguridad y Medio Ambiente</h2>
        </div>
      </div>

      {/* Tarjetas informativas */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-blue-600">
              Staff de Profesionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">
              Nuestro equipo de especialistas está conformado por profesionales de larga trayectoria en el ámbito estatal y privado.
            </p>
            <h3 className="font-semibold text-lg mb-3 text-blue-600">
              Entre las disciplinas que más destacan podemos mencionar:
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Ingeniería Ambiental</li>
              <li>Ingeniería de Seguridad y Salud Ambiental</li>
              <li>Ingeniería Química</li>
              <li>Ingeniería Industrial</li>
              <li>Biólogos</li>
              <li>Sociólogos</li>
              <li>Entomólogos</li>
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
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Expedientes de autorizaciones sanitarias</li>
              <li>Estudios de Impacto Ambiental (EIA-DIA)</li>
              <li>Estudios de acondicionamiento acústico</li>
              <li>Planes de Manejo Ambiental (PAMA)</li>
              <li>Evaluación Ambiental Preliminar (EVAP)</li>
              <li>Plan de Gestión de Residuos Sólidos</li>
              <li>Estudio de Caracterización de Residuos Sólidos</li>
              <li>Declaración de Impacto Ambiental (DIA) para Proyectos de Disposición Final de Residuos Sólidos</li>
              <li>Sistema Integrado de Manejo de Residuos Sólidos Municipales</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 animate-slide-in">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src="/images/Capacitacion1.jpg"
          alt="Training session room with workers"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src="/images/Capacitacion2.jpg"
          alt="Presentation room setup"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};

export default Consultoria;
