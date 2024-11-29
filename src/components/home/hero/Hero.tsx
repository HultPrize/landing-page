import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const phases = [
  {
    title: "Primera Fase",
    description: "Desarrollo de Idea\nPlan de Negocio",
    image: "https://hultprizeat.com/av-assets/img/find.png",
  },
  {
    title: "Semifinal",
    description: "Perfeccionamiento y Pitch",
    image: "https://hultprizeat.com/av-assets/img/pitch.png",
  },
  {
    title: "Gran Final",
    description: "Estrategia de Lanzamiento y Validación Final",
    image: "https://hultprizeat.com/av-assets/img/advance.png",
  },
];

export default function Hero() {
  return (
    <>
      <section
        className="h-screen w-full px-8 md:px-16 relative
      bg-[url('https://hult-prize.s3.us-east-1.amazonaws.com/cover.jpg')] bg-cover bg-center bg-no-repeat 
      flex flex-col justify-start items-center
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-gradient-to-b before:from-pink-700 before:to-transparent before:z-10"
      >
        <header className="flex w-full justify-between pt-24 md:pt-32 z-20">
          <Image
            src="https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/hultprize-white.png"
            height={100}
            width={100}
            alt={"Logo Hult Prize"}
            className="hidden md:block h-24"
          />
          <Image
            src="https://hult-prize.s3.us-east-1.amazonaws.com/university/epn-white.png"
            height={100}
            width={200}
            alt={"Logo Escuela Politécnica Nacional"}
            className="hidden md:block h-24"
          />
          {/* Mobile */}
          <Image
            src="https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/hultprize-white.png"
            height={50}
            width={50}
            alt={"Logo Hult Prize"}
            className="h-16 md:hidden"
          />
          <Image
            src="https://hult-prize.s3.us-east-1.amazonaws.com/university/epn-white.png"
            height={50}
            width={130}
            alt={"Logo Escuela Politécnica Nacional"}
            className="h-16 md:hidden"
          />
        </header>
        <div className="w-full h-full mt-8 flex flex-col justify-between items-center pb-16 z-20">
          <div>
            <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
              Hult Prize
            </h1>
            <h2 className="mt-2 font-semibold text-2xl md:text-4xl text-white text-center">
              Escuela Politécnica Nacional
            </h2>
          </div>

          {/* <Link href={"/aplica"}>
          <Button className="bg-[#E5077F] hover:scale-105 h-0 p-10 rounded-xl text-2xl ml-2">
            Aplica
          </Button>
        </Link> */}
        </div>
      </section>
      <h2 className="mt-14 text-3xl font-bold text-center mb-6">
        ¿Qué es Hult Prize?
      </h2>
      <div
        className="text-lg md:text-2xl text-black text-center max-w-2xl font-poppins"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <p>
          {" "}
          El Hult Prize es la competencia internacional más grande de
          emprendimiento social, donde jóvenes de todo el mundo crean soluciones
          innovadoras para enfrentar los mayores retos globales. Este
          prestigioso desafío ha llegado a la Escuela Politécnica Nacional,
          ofreciendo a nuestros estudiantes la oportunidad de transformar sus
          ideas en proyectos que impacten positivamente en la sociedad. ¡Únete y
          sé parte de esta revolución de cambio desde la Poli!{" "}
        </p>
      </div>
      <h2 className="mt-14 text-3xl font-bold text-center mb-6">
        Fases de la competencia en la EPN
      </h2>
      <div className="flex flex-wrap justify-center mb-8">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="phase-item text-center p-4 hover:scale-105 rounded-xl shadow-md transition-transform duration-300 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <img
              src={phase.image}
              alt={phase.title}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="text-lg font-bold text-[#E5077F] mt-2">
              {phase.title}
            </h3>{" "}
            {/* Magenta */}
            <p className="mt-2 text-sm text-black">{phase.description}</p>{" "}
            {/* Negro */}
          </div>
        ))}
      </div>
      <Link href={"/howitworks"}>
        <Button className="mt-4 px-4 py-2 bg-[#E5077F] text-white text-sm font-semibold rounded hover:bg-[#d40672] transition-colors">
          Más información
        </Button>
      </Link>
      <div className="relative w-3/4 pt-[42.16%] pb-0 shadow-md mt-6 mb-4 overflow-hidden rounded-lg will-change-transform">
        <iframe
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
          src="https://www.canva.com/design/DAGXuA922Ek/DyHDR961_d6Ilyv_ZB0jvQ/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
}
