import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="h-screen w-full bg relative
    bg-[url('/cover.png')] bg-cover"
    >
      <header className="w-full absolute top-[12.5%] flex justify-between px-16">
        <Image
          src={"/logos/hp-white.png"}
          height={100}
          width={100}
          alt={"Logo Hult Prize"}
          className="h-24"
        />
        <Image
          src={"/logos/epn.png"}
          height={100}
          width={200}
          alt={"Logo Escuela Politécnica Nacional"}
          className="h-24"
        />
      </header>
      <div className="absolute top-[32.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h1
          className="font-bold text-5xl text-white w-full text-center"
        >
          ¿Cómo cambiarás el mundo?
        </h1>
        <h2
          className="mt-4 font-semibold text-4xl text-white text-center"
        >
          Hult Prize OnCampus Program
          <br />
          <strong className="font-bold text-3xl">Escuela Politécnica Nacional</strong>
        </h2>
      </div>
    </section>
  );
}
