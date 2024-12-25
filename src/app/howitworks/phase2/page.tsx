import { Button } from "@/components/ui/button";
import Link from "next/link";

const Phase2 = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 mt-16 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[#E5077F]">Semifinal</h1>
        <p className="text-2xl font-medium text-gray-700">
          Perfeccionamiento de tu idea y Presentación
        </p>
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            23 de Diciembre, 2024 - 08 de Enero, 2025
          </p>
        </div>
      </div>
      <img
        src={`https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023-presentation.jpeg`}
        alt={`Presentación 2023-2024`}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <div className="mt-8 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">
          Indicaciones Generales
        </h2>
        <ul className="text-lg text-gray-600 list-disc pl-6">
          <li>
            Diseña una presentación clara, visual y persuasiva que explique su
            idea, impacto y propuesta de valor.
          </li>
          <li>Crea un prototipo funcional físico o digital.</li>
          <li>
            Mostrar su mecánica o funcionamiento mediante diagramas, videos o
            simulaciones.
          </li>
          <li>
            Preparar su Pitch
            <ul className="list-disc pl-6">
              <li>
                La duración del pitch son 4 minutos para presentar su propuesta
                frente a un panel de jueces.
              </li>
              <li>
                Prepárense para responder preguntas del jurado durante 4 minutos
                adicionales.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mt-8 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">
          Mentorías
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Cada sesión está diseñada para impulsar tus habilidades, perfeccionar
          tu pitch y ayudarte a desarrollar un prototipo sólido que marque la
          diferencia. Para esta fase se desarrollarán las mentorías de manera virtual.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Fechas y Horarios:
          </h3>
          <ul className="text-lg text-gray-600 list-disc pl-6 mt-2">
            <li>
              <strong>El Arte de Presentar el Pitch.</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Jueves 26 de diciembre: 08:00 PM</li>
                <li>Viernes 27 de diciembre: 09:00 AM</li>
              </ul>
            </li>
            <li className="mt-4">
              <strong>
                Validación y Creación del Prototipo
              </strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Jueves 02 de enero</li>
                <li>Viernes 03 de enero</li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="text-lg text-gray-600 mt-4">
          La asistencia es obligatoria y se tomará en cuenta para la
          calificación en la semifinal. Al menos una persona por equipo debe
          asistir.
        </p>
      </div>
      <div className="mt-8 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">
          Criterios de Evaluación
        </h2>
        <p className="text-lg text-gray-600">El jurado evaluará lo siguiente</p>
        <ul className="text-lg text-gray-600 list-disc pl-6">
          <li>
            La organización, coordinación y comunicación del equipo. Además, la
            asistencia a las mentorías.
          </li>
          <li>
            Presentación clara, estructurada y fácil de seguir, creatividad en
            el diseño y enfoque, uso adecuado de recursos visuales como
            diapositivas, gráficos o videos.
          </li>
          <li>
            Utiliza los Objetivos de Desarrollo Sostenible (ODS) y tiene el
            impacto social.
          </li>
          <li>
            Modelo de negocio claramente definido y justificado económicamente,
            expansión a nuevos mercados, riesgos y plan para mitigarlos.
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 mt-4">
        <Link href={"/howitworks/phase1"}>
          <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
            Fase 1
          </Button>
        </Link>
        <Link href={"/howitworks/phase2"}>
          <Button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300">
            Fase 2
          </Button>
        </Link>
        <Link href={"/howitworks/phase3"}>
          <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
            Fase 3
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Phase2;
