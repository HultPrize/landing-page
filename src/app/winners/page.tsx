import Image from 'next/image';

const Winners = () => {
  return (
    
    <div className="bg-white h-full flex flex-col items-center pt-20">
      <h2 className="mt-14 text-3xl font-bold text-center mb-6 text-[#E5077F]">
        Ganadores Hult Prize EPN 2024-2025
      </h2>
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-4">SOSUS</h2>
          <p className="mb-6 text-lg">
            SOSUS es un proyecto innovador que busca combatir los efectos de las sequías hidrológicas y el estrés ambiental en cultivos clave mediante tecnología de bobinado electromagnético de baja frecuencia alimentada por energía solar.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full h-auto"
            height={300}
            width={300}
            src="https://hult-prize.s3.us-east-1.amazonaws.com/winners/SOSUS-2025.jpeg"
            alt="SOSUS"
          />
        </div>
      </div>

      <h2 className="mt-14 text-3xl font-bold text-center mb-6 text-[#E5077F]">
        Concursantes Ecuatorianos
      </h2>
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-4">Gelwear</h2>
          <p className="mb-6 text-lg">
            GelWear, una startup ecuatoriana fundada por Carolina Serrano, Victoria Suárez, Daniela Serrano y David Clavijo de Yachay Tech, ha obtenido reconocimiento internacional al ganar el premio global Hult Prize. La startup, iniciada en 2019, se centra en la producción de pañales ecológicos con una cubierta biodegradable hecha de residuos de caña de azúcar. A pesar de los desafíos planteados por la pandemia de COVID-19, GelWear emergió como uno de los 10 ganadores, recibiendo un capital de $100,000 de la organización Hult Prize.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full h-auto"
            height={300}
            width={300}
            src="https://hult-prize.s3.amazonaws.com/winners/gel-wear.jpeg"
            alt="Gelwear"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2">
          <Image
            className="w-full h-auto"
            height={300}
            width={300}
            src="https://hult-prize.s3.amazonaws.com/winners/innomaps.jpg"
            alt="Innomaps"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4">Innomaps</h2>
          <p className="mb-6 text-lg">
            El equipo de la Universidad Yachay Tech, conformado por Nicolás Serrano, María José De la Torre, Romina Bermeo y Leandro Santiago, destacó como uno de los seis finalistas en las regionales del Hult Prize en San Francisco, EE. UU., tras ganar la edición On Campus en su universidad. Presentaron INNOMAPS, una plataforma que utiliza datos abiertos de instituciones públicas y privadas para georreferenciar empresas, con el objetivo de mejorar la distribución de negocios en las ciudades y abordar el desempleo juvenil. La iniciativa nació al identificar las dificultades de los emprendedores en Ecuador al establecer negocios.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl font-bold mb-4">El Futuro Ganador</h2>
          <p className="mb-6 text-lg">
            El futuro pertenece a quienes se atreven a soñar en grande y actuar con determinación. Este emprendimiento, impulsado por innovación, sostenibilidad y un deseo profundo de cambio, busca líderes que no solo quieran competir, sino transformar.
            Tú tienes la oportunidad de ser ese futuro ganador: un agente de cambio que revoluciona, impacta y deja una huella imborrable en el mundo. Atrévete a imaginar, a crear y a conquistar los desafíos con valentía. ¡El éxito está a tu alcance, y el mundo está esperando que lo hagas tuyo!
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full h-auto"
            height={300}
            width={300}
            src="https://hult-prize.s3.us-east-1.amazonaws.com/winners/unknown.png"
            alt="Futuro Emprendimiento"
          />
        </div>
      </div>
    </div>
  );
};

export default Winners;
