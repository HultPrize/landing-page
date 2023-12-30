import { PersonStanding, Users } from "lucide-react";
import React from "react";

import Link from "next/link";

export default function Applications() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Aplica</h1>
      <h2 className="text-2xl mb-8">Se parte de la competencia mundial</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={"/aplica/equipos"}>
          <div className="flex flex-col justify-center items-center bg-white border border-[#E6007F] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Inscribe a tu equipo</h3>
            <Users className="w-20 h-20" />
          </div>
        </Link>
        <Link href={"/aplica/individual"}>
          <div className="flex flex-col justify-center items-center bg-white border border-[#E6007F] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Busca un equipo</h3>
            <PersonStanding className="w-20 h-20" />
          </div>
        </Link>
      </div>
    </main>
  );
}
