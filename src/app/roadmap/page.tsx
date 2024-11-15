import React from "react";
import { Header, Footer } from "@/components/layout/";

const Home = () => {
  return (
    <>
      <div className="bg-white h-full flex flex-col items-center pt-20">
        {/* La Competencia */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#E5077F]">La Competencia</h2>
            <h3 className="text-2xl font-bold text-[#E5077F]">Hult Prize 2025</h3>
          </div>

          <div className="flex flex-col gap-8">
            {/* Fase Uno */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase 1: Calificadores</h3>
                <p className="text-sm text-gray-600">Noviembre - Febrero</p>
                <p>Iniciaremos con la competencia OnCampus para la Escuela Politécnica Nacional. El ganador representará a la universidad en la siguiente etapa.</p>

                <div className="mt-4 space-y-2">
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li><strong>Primera Fase:</strong> Desarrollo de Idea Plan de Negocio</li>
                    <li><strong>Semifinal:</strong> Perfeccionamiento y Pitch</li>
                    <li><strong>Gran Final:</strong> Estrategia de Lanzamiento y Validación Final</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fase Dos: Semifinal */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row-reverse">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase 2: Nacionales</h3>
                <p className="text-sm text-gray-600">Marzo - Mayo</p>
                <p>Los ganadores de concursos locales y las principales startups de la aplicación abierta competirán en eventos nacionales o participarán en un proceso de selección en línea equivalente.</p>
              </div>
            </div>

            {/* Fase Tres: Final Nacional */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase 3: Incubadora Digital</h3>
                <p className="text-sm text-gray-600">Junio - Julio</p>
                <p>En la incubadora digital, las startups líderes refinan sus ideas, validan su ajuste en el mercado de productos, crean pruebas de conceptos, desarrollan MVP y establecen estrategias de comercialización accionables. Hult Prize brindará acceso a recursos de clase mundial, incluidos talleres en línea y tutoría personalizada de emprendedores sociales y expertos de la industria.</p>
              </div>
            </div>

            {/* Fase Cuatro: Regional Summit */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row-reverse">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase 4: Acelerador Global</h3>
                <p className="text-sm text-gray-600">Agosto</p>
                <p>Las mejores startups viajarán al Hult Prize Global Accelerator en el histórico Ashridge House en las afueras de Londres. Este programa inmersivo está diseñado para acelerar el crecimiento empresarial al ayudar a los equipos a refinar su estrategia comercial, expandir sus redes y escalar su impacto a nivel mundial. Los participantes reciben tutoría de expertos, asisten a talleres interactivos y participan en oportunidades de lanzamiento y días de demostración con los inversores.</p>
              </div>
            </div>

            {/* Fase Cinco: Global Summit */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase 5: Final Mundial</h3>
                <p className="text-sm text-gray-600">Septiembre</p>
                <p>En las Finales Globales, seis equipos lanzan sus emprendimientos sociales a un panel de jueces distinguidos con la esperanza de ser seleccionados como el próximo ganador del Premio Hult $1,000,000 de los Estados Unidos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
