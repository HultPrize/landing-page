import { PersonStanding, Users } from "lucide-react";
import React from "react";

import Link from "next/link";

export default function Applications() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 mt-16 py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Hult Prize llegó a la EPN!
      </h1>
      <h2 className="text-xl md:text-2xl mb-4">
        ¡El formulario de inscripción para el 2024 está abierto!
      </h2>
      <p className="max-w-[1200px]">
        Cada año, Hult Prize empodera a estudiantes de todo el mundo para crear
        un impacto real. Los participantes se unen a una comunidad global
        exclusiva de estudiantes emprendedores, mentores y expertos de la
        industria mientras trabajan para ganar un lugar en nuestras Finales
        Globales, donde los finalistas compiten por <b>$1 millón</b> en fondos
        para hacer realidad sus grandes ideas.
      </p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Criterios de Eligibilidad</h3>
        <ul className="list-disc ml-5 md:ml-10 flex flex-col gap-2">
          <li>
            Actualmente debes ser un estudiante matriculado en un programa de
            búsqueda de títulos.{" "}
          </li>
          <li>Los equipos deben tener entre 3 y 5 miembros.</li>
          <li>
            Todos los estudiantes deben ser de la misma universidad, con la
            opción adicional de tener uno, que puede ser de una universidad
            diferente.
          </li>
          <li>Debes tener al menos 18 años para competir.</li>
        </ul>

        <p className="mt-4">
          Nos comunicaremos contigo en las próximas semanas con los próximos
          pasos y actualizaciones sobre la competencia en la{" "}
          <b>Escuela Politécnica Nacional</b> de este año.
          <br />
          <br />
          Completa los siguientes formularios para mantenerte
          actualizado:
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

      <p className="text-center mt-8">
        Si tienes más preguntas sobre la elegibilidad o la participación,
        comunícate a hultprize@epn.edu.ec
      </p>
    </main>
  );
}
