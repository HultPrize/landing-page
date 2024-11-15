import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen w-full px-8 md:px-16 relative
      bg-[url('https://hult-prize.s3.us-east-1.amazonaws.com/cover.jpg')] bg-cover bg-center bg-no-repeat 
      flex flex-col justify-start items-center
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-gradient-to-b before:from-pink-700 before:to-transparent before:z-10"
    >
      <header className="flex w-full justify-between pt-24 md:pt-32 z-20">
        <Image
          src={"/logos/hult-prize/vertical/white.png"}
          height={100}
          width={100}
          alt={"Logo Hult Prize"}
          className="hidden md:block h-24"
        />
        <Image
          src={"/logos/epn/white.png"}
          height={100}
          width={200}
          alt={"Logo Escuela Politécnica Nacional"}
          className="hidden md:block h-24"
        />
        {/* Mobile */}
        <Image
          src={"/logos/hult-prize/vertical/white.png"}
          height={50}
          width={50}
          alt={"Logo Hult Prize"}
          className="h-16 md:hidden"
        />
        <Image
          src={"/logos/epn/white.png"}
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

        <Link href={"/aplica"}>
          <Button className="bg-[#E5077F] hover:scale-105 h-0 p-10 rounded-xl text-2xl ml-2">
            Aplica
          </Button>
        </Link>
      </div>
    </section>
  );
}
