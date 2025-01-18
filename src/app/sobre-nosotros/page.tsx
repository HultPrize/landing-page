"use client";
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const editions = [
    { year: "2024-2025", src: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2024-2025.jpeg" },
    { year: "2023-2024", src: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/past_edition.png" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? editions.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === editions.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="bg-white h-full flex flex-col items-center pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Misión y Visión */}
          <div className="flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out transform hover:scale-105 mb-12">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl font-bold mb-4">Nuestra misión</h1>
              <p className="mb-6 text-lg">
                Inspirar y equipar a los estudiantes de la Escuela Politécnica Nacional para que se conviertan en líderes de cambio social a través de la competencia Hult Prize, ofreciendo un entorno de constante aprendizaje y colaboración donde sus ideas pueden evolucionar en soluciones reales para los desafíos globales. Nuestra misión es potenciar el talento de cada estudiante, impulsándolos a desafiar los límites del emprendimiento y a crear proyectos de impacto que contribuyan a los Objetivos de Desarrollo Sostenible.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                className="w-full h-auto transition-opacity duration-500 ease-in-out"
                src="https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/how-it-works.webp"
                alt="who we are"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="md:w-1/2">
              <Image
                className="w-full h-auto transition-opacity duration-500 ease-in-out"
                src="https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023.jpeg"
                alt="vision"
                width={500}
                height={500}
              />
            </div>
            {/* Visión */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold mb-4">Nuestra Visión</h2>
              <p className="mb-6 text-lg">
                Consolidar Hult Prize como una tradición anual en la EPN, a través de un convenio institucional en los próximos tres años, brindando a los estudiantes una plataforma continua para desarrollar habilidades de emprendimiento social y crear soluciones innovadoras a desafíos globales. Ser un referente en la EPN de liderazgo e innovación, por formar generaciones de jóvenes comprometidos con el impacto positivo en sus comunidades y en el mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Ediciones */}
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Ediciones</h2>
          <div className="relative w-full flex justify-center transition-transform duration-500 ease-in-out">
            <button
              className="absolute left-0 z-10 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="flex overflow-hidden w-full">
              {editions.map((edition, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-full transition-transform duration-500 ease-in-out transform ${index === currentIndex ? "scale-105" : ""
                    }`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <Image
                    className="w-full object-cover"
                    src={edition.src}
                    alt={`Edition ${edition.year}`}
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-2xl font-bold py-2 px-4">
                    {edition.year}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 z-10 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
