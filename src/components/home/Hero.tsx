import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="h-screen w-full px-8 md:px-16 bg relative
    bg-[url('/cover.png')] bg-cover bg-center bg-no-repeat"
    >
      <header className="flex w-full justify-between pt-24 md:pt-32">
        <Image
          src={"/logos/hp-white.png"}
          height={100}
          width={100}
          alt={"Logo Hult Prize"}
          className="hidden md:block h-24"
        />
        <Image
          src={"/logos/epn.png"}
          height={100}
          width={200}
          alt={"Logo Escuela Politécnica Nacional"}
          className="hidden md:block h-24"
        />
        {/* Mobile */}
        <Image
          src={"/logos/hp-white.png"}
          height={50}
          width={50}
          alt={"Logo Hult Prize"}
          className="h-16 md:hidden"
        />
        <Image
          src={"/logos/epn.png"}
          height={50}
          width={100}
          alt={"Logo Escuela Politécnica Nacional"}
          className="h-16 md:hidden"
        />
      </header>
      <div className="w-full mt-8">
        <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
          Hult Prize
        </h1>
        <h2 className="mt-2 font-semibold text-2xl md:text-4xl text-white text-center">
          Escuela Politécnica Nacional
        </h2>
      </div>
    </section>
  );
}
