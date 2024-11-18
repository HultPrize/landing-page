import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

interface PhaseProps {
  title: string;
  phase: string;
  date: string;
  description: string;
  details?: string[];
  imageSrc: string;
  alt: string;
  reverse?: boolean;
  showButton?: boolean;
}

const Phase: React.FC<PhaseProps> = ({
  title,
  phase,
  date,
  description,
  details,
  imageSrc,
  alt,
  reverse,
  showButton,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex-1 max-w-lg">
        <h3 className="text-2xl font-semibold text-[#E5077F] mb-2">{phase}</h3>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        {details && (
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {showButton && (
          <Link href={"/howitworks"}>
            <Button className="mt-4 px-4 py-2 bg-[#E5077F] text-white text-sm font-semibold rounded hover:bg-[#d40672] transition-colors">
              Más información
            </Button>
          </Link>
        )}
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-md">
        <img
          className="rounded-lg shadow-lg object-contain w-full"
          src={imageSrc}
          alt={alt}
        />
      </div>
    </div>
  );
};

const Home = () => {
  // Array of phase data
  const phases = [
    {
      title: "Calificadores",
      phase: "Fase 1: Calificadores",
      date: "Noviembre - Febrero",
      description:
        "Iniciaremos con la competencia OnCampus para la Escuela Politécnica Nacional. El ganador representará a la universidad en la siguiente etapa.",
      details: [
        "Primera Fase: Desarrollo de Idea Plan de Negocio",
        "Semifinal: Perfeccionamiento y Pitch",
        "Gran Final: Estrategia de Lanzamiento y Validación Final",
      ],
      imageSrc: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023-prize.jpeg",
      alt: "Fase Uno",
      showButton: true,
    },
    {
      title: "Nacionales",
      phase: "Fase 2: Nacionales",
      date: "Marzo - Mayo",
      description:
        "Los ganadores de concursos locales y las principales startups competirán en eventos nacionales o participarán en un proceso de selección en línea equivalente.",
      imageSrc: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/nationals.webp",
      alt: "Fase Dos",
      reverse: true,
    },
    {
      title: "Incubadora Digital",
      phase: "Fase 3: Incubadora Digital",
      date: "Junio - Julio",
      description:
        "En la incubadora digital, las startups líderes refinan sus ideas, validan su ajuste en el mercado de productos, crean pruebas de conceptos, desarrollan MVP y establecen estrategias de comercialización accionables. Hult Prize brindará acceso a recursos de clase mundial, incluidos talleres en línea y tutoría personalizada de emprendedores sociales y expertos de la industria.",
      imageSrc: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/digital-incubator.webp",
      alt: "Fase Tres",
    },
    {
      title: "Acelerador Global",
      phase: "Fase 4: Acelerador Global",
      date: "Agosto",
      description:
        "Las mejores startups viajarán al Hult Prize Global Accelerator en el histórico Ashridge House en las afueras de Londres. Este programa inmersivo está diseñado para acelerar el crecimiento empresarial al ayudar a los equipos a refinar su estrategia comercial, expandir sus redes y escalar su impacto a nivel mundial. Los participantes reciben tutoría de expertos, asisten a talleres interactivos y participan en oportunidades de lanzamiento y días de demostración con los inversores.",
      imageSrc: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/global-acelerator.webp",
      alt: "Fase Cuatro",
      reverse: true,
    },
    {
      title: "Final Mundial",
      phase: "Fase 5: Final Mundial",
      date: "Septiembre",
      description:
        "En las Finales Globales, seis equipos lanzan sus emprendimientos sociales a un panel de jueces distinguidos con la esperanza de ser seleccionados como el próximo ganador del Premio Hult $1,000,000 de los Estados Unidos.",
      imageSrc: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/global-final.webp",
      alt: "Fase Cinco",
    },
  ];

  return (
    <>
      <div className="bg-white h-full flex flex-col items-center pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#E5077F]">La Competencia</h2>
            <h3 className="text-2xl font-bold text-[#E5077F]">Hult Prize 2024 - 2025</h3>
          </div>
          <div className="flex flex-col gap-8">
            {/* Render phases dynamically */}
            {phases.map((phase, index) => (
              <Phase key={index} {...phase} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
