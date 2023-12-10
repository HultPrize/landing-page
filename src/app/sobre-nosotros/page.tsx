import React from 'react';
import { Header, Footer } from "@/components/layout/";
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-50 h-full flex flex-col items-center pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl font-bold mb-4">Nuestra misión</h1>
            <p className="mb-6 text-lg">
              Hult Prize desafía a los jóvenes a resolver los problemas más apremiantes del mundo a través del emprendimiento social. Cada año, un equipo recibe 1 millón de dólares en financiación para hacer realidad su idea.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto "
              src="/home/who-we-are.jpg"
              alt="who we are"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              className="w-full h-auto "
              src="/home/semifinals.png"
              alt="vision"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold mb-4">Nuestra Visión</h2>
            <p className="mb-6 text-lg">
              Fomentar un movimiento global que utilice la creatividad, la innovación y el emprendimiento como herramientas para resolver problemas sociales críticos. Buscan crear un impacto positivo en el mundo, promoviendo soluciones escalables y sostenibles que aborden desafíos como pobreza, acceso a la educación, cuidado de la salud y sostenibilidad ambiental.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl font-bold mb-4">Hult Prize en la EPN</h2>
            <p className="mb-6 text-lg">
              La Escuela Politécnica Nacional lidera el Hult Prize en Ecuador, promoviendo la innovación estudiantil para abordar desafíos sociales. Este evento fortalece el espíritu emprendedor, empoderando a jóvenes para crear soluciones transformadoras en áreas clave del país.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto "
              src="/home/WhatsApp-Image-2023-06-27-at-10.15.42-PM.jpeg"
              alt="EPN"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default AboutUs;
