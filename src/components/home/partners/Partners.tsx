"use client";

import { useState, useEffect } from "react";
import RadioQuantica from "../../../../public/logos/allies/radio_quantica.png";

const partners: string[] = [
  "https://hult-prize.s3.amazonaws.com/university/epn.png",
  "https://hult-prize.s3.amazonaws.com/university/fis.png",
  "https://hult-prize.s3.amazonaws.com/strategic-allies/facultad-ciencias.png",
  "../../logos/allies/radio_quantica.png"
  // Add more partner images here
];

const Partners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (partners.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (partners.length === 0) {
    return <div className="flex items-center justify-center">No partners available</div>;
  }

  return (
    <div className="partners-section py-8">
      <h2 className="text-3xl font-bold text-center mb-6">¿Qué es Hult Prize?</h2>
      <div className="mt-8 text-lg md:text-2xl text-black text-center max-w-2xl font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <p> El Hult Prize es la competencia internacional más grande de emprendimiento social, donde jóvenes de todo el mundo crean soluciones innovadoras para enfrentar los mayores retos globales. Este prestigioso desafío ha llegado a la Escuela Politécnica Nacional, ofreciendo a nuestros estudiantes la oportunidad de transformar sus ideas en proyectos que impacten positivamente en la sociedad. ¡Únete y sé parte de esta revolución de cambio desde la Poli! </p>
      </div>
      <h2 className="mt-8 text-3xl font-bold text-center mb-6">Con el apoyo de</h2>
      <div className="carousel flex items-center justify-center overflow-hidden relative">
        <div
          className={`flex transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src={partners[currentIndex]}
            alt={`Partner ${currentIndex + 1}`}
            className="w-full h-32 object-contain md:h-48 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
