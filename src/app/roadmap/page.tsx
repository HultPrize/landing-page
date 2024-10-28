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
                <h3 className="text-lg font-bold text-[#E5077F]">Fase Uno:</h3>
                <p>Hay un ganador en base a un video de 4 minutos y se seleccionan los equipos.</p>
              </div>
            </div>

            {/* Fase Semifinal */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row-reverse">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase Semifinal:</h3>
                <p>En el Teatro Politécnico se va a escoger los equipos.</p>
              </div>
            </div>

            {/* Fase Final */}
            <div className="flex flex-col items-start transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12 p-4 md:flex-row">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold text-[#E5077F]">Fase Final:</h3>
                <p>Competencia nacional, regional summit ganadores de cada ciudad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
