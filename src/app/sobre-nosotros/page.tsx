import React from "react";
import { Header, Footer } from "@/components/layout/";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="bg-white h-full flex flex-col items-center pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Misión y Visión */}
          <div className="flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl font-bold mb-4">Nuestra misión</h1>
              <p className="mb-6 text-lg">
                Hult Prize desafía a los jóvenes a resolver los problemas más
                apremiantes del mundo a través del emprendimiento social. Cada
                año, un equipo recibe 1 millón de dólares en financiación para
                hacer realidad su idea.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* 
              <Image
                className="w-full h-auto transition-opacity duration-500 ease-in-out hover:opacity-80"
                src="https://proyectoib.s3.us-west-2.amazonaws.com/home/who-we-are.jpg"
                alt="who we are"
                width={500}
                height={500}
              /> 
              */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="md:w-1/2">
              {/* 
              <Image
                className="w-full h-auto transition-opacity duration-500 ease-in-out hover:opacity-80"
                src="https://proyectoib.s3.us-west-2.amazonaws.com/home/semifinals.png"
                alt="vision"
                width={500}
                height={500}
              /> 
              */}
            </div>
            {/* Visión */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold mb-4">Nuestra Visión</h2>
              <p className="mb-6 text-lg">
                Fomentar un movimiento global que utilice la creatividad, la
                innovación y el emprendimiento como herramientas para resolver
                problemas sociales críticos. Buscan crear un impacto positivo en
                el mundo, promoviendo soluciones escalables y sostenibles que
                aborden desafíos como pobreza, acceso a la educación, cuidado de
                la salud y sostenibilidad ambiental.
              </p>
            </div>
          </div>
        </div>

        {/* Ediciones */}
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Ediciones</h2>
          <div className="relative w-full flex justify-center transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Image
              className="w-full h-auto"
              src="/past_edition.png"
              alt="Edition 2023"
              width={500}
              height={500}
            />
            {/* Año */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-2xl font-bold py-2 px-4">
              2023-2024
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
