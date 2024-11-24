import Image from 'next/image';

const Winners = () => {
  return (
    <div className="bg-white h-full flex flex-col items-center pt-20">

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
            Con un espíritu innovador y una visión transformadora, este nuevo emprendimiento está listo para marcar la diferencia en el mundo. Fundado por un equipo comprometido con la sostenibilidad, la tecnología y el cambio social, su misión es enfrentar algunos de los retos más grandes de nuestra era. Con un enfoque audaz y soluciones creativas, están preparados para revolucionar su industria, impactando positivamente tanto a nivel local como global. Este proyecto no solo busca el éxito económico, sino también generar un legado de innovación y responsabilidad social. ¡El futuro les pertenece!
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full h-auto"
            height={300}
            width={300}
            src="https://hult-prize.s3.us-east-1.amazonaws.com/winners/unknown.webp"
            alt="Futuro Emprendimiento"
          />
        </div>
      </div>


      {/* Ganadores Mundiales */}
      {/* <h1 className="text-4xl font-bold mb-4 mt-10">Ganadores Mundiales</h1>
      <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* Ganador 1 
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
          <Image
            className="w-full h-auto object-cover min-h-40 max-h-72 mb-4"
            height={300}
            width={300}
            src="https://proyectoib.s3.us-west-2.amazonaws.com/home/2023-hult-prize-winners-with-stella-mccartney.jpg"
            alt="Banofi Leather"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">Banofi Leather - Ganadores 2023</h2>
          <p className="text-lg mb-4 text-justify">Banofi Leather convierte desechos de cultivo de plátanos en cuero vegano, sostenible y libre de crueldad, reduciendo el impacto ambiental hasta un 95% en agua, 90% en carbono y eliminando residuos tóxicos. Nuestros materiales certificados por PETA y estándares no tóxicos de la industria ya son elegidos por más de 30 marcas, habiendo vendido 400+ cuadernos como prueba de calidad y durabilidad, posicionándonos para expandir esta tecnología sostenible en la moda.</p>
        </div>

        {/* Ganador 2 
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
          <Image
            className="w-full h-auto object-cover min-h-40 max-h-72 mb-4"
            height={300}
            width={300}
            src="https://proyectoib.s3.us-west-2.amazonaws.com/home/eco-bana_hultprize.jpg"
            alt="EcoBana"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">EcoBana - Ganadores 2022</h2>
          <p className="text-lg mb-4 text-justify">EcoBana, ganador del Hult Prize 2022 de la Universidad de St. Paul en Limuru, Kenia, es una empresa social que busca emplear a personas y erradicar la fabricación de plástico en toallas sanitarias, produciendo protectores biodegradables para combatir la pobreza menstrual mediante fibras de plátano y promoviendo una economía verde y circular.</p>
        </div>

        {/* Ganador 3 
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105">
          <Image
            className="w-full h-auto object-cover min-h-40 max-h-72 mb-4"
            src="https://proyectoib.s3.us-west-2.amazonaws.com/home/ecospire.png"
            alt="Ecospire"
            height={300}
            width={300}
          />
          <h2 className="text-2xl font-bold mb-2">Ecospire - Ganadores 2021</h2>
          <p className="text-lg mb-4">Utilizar residuos de alimentos para ofrecerle productos de papel económicos y ecológicos sin talar un solo árbol.</p>
        </div>
      </div> */}

    </div>
  );
};

export default Winners;
