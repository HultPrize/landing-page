"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RadioQuantica from "../../../../public/logos/allies/radio_quantica.png";

const partners: string[] = [
  "https://hult-prize.s3.amazonaws.com/university/epn.png",
  "https://hult-prize.s3.us-east-1.amazonaws.com/strategic-allies/Strategia.png",
  "https://hult-prize.s3.us-east-1.amazonaws.com/university/facultades/ESFOT.png",
  "https://hult-prize.s3.us-east-1.amazonaws.com/partners/fepon.png",
  "https://hult-prize.s3.us-east-1.amazonaws.com/partners/asociacion-matematica.png",
  "https://hult-prize.s3.us-east-1.amazonaws.com/partners/radio_quantica.png"
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
      <h2 className="mt-8 text-3xl font-bold text-center mb-6">Con el apoyo de</h2>
      <div className="carousel flex items-center justify-center overflow-hidden relative">
        <div
          className={`flex transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
          <Image
            src={partners[currentIndex]}
            alt={`Partner ${currentIndex + 1}`}
            width={500}
            height={500}
            className="w-full h-32 object-contain md:h-48 lg:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
