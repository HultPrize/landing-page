import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="h-screen w-full bg relative
    bg-[url('/cover.png')] bg-cover"
    >
      <Image
        src={"/logos/epn.png"}
        height={100}
        width={200}
        alt={"EPN logo"}
        className="absolute right-12 top-[12.5%]"
      />
      <Image
        src={"/logos/hp-white.png"}
        height={100}
        width={100}
        alt={"EPN logo"}
        className="absolute left-12 top-[12.5%]"
      />
      <h1
        className="absolute top-[32.5%] left-1/2 -translate-x-1/2 -translate-y-1/2
      font-bold text-6xl text-white"
      >
        Hult Prize at EPN
      </h1>
      <h2
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2
      font-bold text-3xl text-white"
      >
        ¿CÓMO CAMBIARÁS EL MUNDO?
      </h2>
    </section>
  );
}
