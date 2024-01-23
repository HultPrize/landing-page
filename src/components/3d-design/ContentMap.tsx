"use client";

import { roadmapItems } from "@/lib/roadmap.lib";

export default function ContentMap() {
  return (
    <div>
      <div
        id="page-1"
        className="absolute sm:top-[50%] top-[20%] sm:left-[8%] left-[20%] font-bold sm:text-4xl text-xl z-10 pointer-events-none"
      >
        <h1 className="text-[#E5077F] text-4xl md:text-6xl">The Competition</h1>
        <h2 className="text-[#E5077F] font-semibold mt-2">Hult Prize 2024</h2>
      </div>

      <div
        id="page-4"
        className="absolute sm:top-[60%] top-[50%] sm:left-[10%] left-[15%] text-[black] sm:text-2xl text-xl  z-10 opacity-0 pointer-events-none sm:w-[40%] w-[70%]"
      >
        <h2 className="text-[#E5077F] md:text-4xl text-xl font-semibold">
          Competencia Mundial
        </h2>
        <p className="mt-2">
          Cada año, Hult Prize desafía a los jóvenes a resolver los problemas
          más apremiantes del mundo a través del emprendimiento social
          innovador.
        </p>
      </div>

      {roadmapItems.map((roadmap_item: any, index: number) => (
        <div
          id={`${roadmap_item.id_item}`}
          className={`${roadmap_item.props}`}
          key={index}
        >
          <h1 className="text-[#E5077F] sm:text-3xl text-2xl">
            {roadmap_item.title}
          </h1>
          <h2 className="text-[#E5077F] sm:text-2xl text-xl font-semibold">
            {roadmap_item.subtitle}
          </h2>
          <div className="flex flex-col gap-2 mt-2">
            {roadmap_item.description.map(
              (parapraph: string, index: number) => (
                <p className="font-normal sm:text-xl text-base" key={index}>
                  {parapraph}
                </p>
              )
            )}
          </div>
        </div>
      ))}

      {/*

      <div id='page-7' className='absolute sm:top-[40%] top-[37%] sm:left-[30%] left-[15%] text-[black] font-bold z-10 opacity-0 pointer-events-none sm:w-[60%] w-[80%] '>
        <h1 className="text-[#E6007F] sm:text-3xl text-2xl">Step 2: Regional Summits</h1>
        <h2 className="text-[#E6007F] sm:text-2xl text-xl">June</h2>
        <p className="font-normal sm:text-xl text-base">En 2024, Hult Prize organizará Cumbres Globales presenciales en ocho ciudades de todo el mundo. Los participantes presentarán sus ideas ante paneles de expertos. Los equipos ganadores de cada cumbre, junto con otros cuatro startups seleccionadas a través de la Ronda de Segunda Oportunidad, obtendrán un lugar en el Global Accelerator.</p>
      </div>



      <div id='page-9' className='absolute sm:top-[40%] top-[20%] left-[10%] text-[black] font-bold z-10 opacity-0 pointer-events-none w-[70%]'>
        <h1 className="text-[#E6007F] sm:text-3xl text-2xl">Step 3: Global Acelerator</h1>
        <h2 className="text-[#E6007F] sm:text-2xl text-xl">July - August</h2>
        <p className="font-normal sm:text-xl text-base">- En julio, los equipos semifinalistas se conectarán con mentores y programas de formación de Hult Prize para perfeccionar sus presentaciones y desarrollar aún más sus negocios.</p>
        <p>En agosto, viajarán a Londres, Reino Unido, para participar en nuestro Acelerador Global, donde pasarán dos semanas trabajando y aprendiendo con expertos y entrenadores de clase mundial. Al final del Acelerador, se seleccionarán seis equipos para participar en nuestras Finales Globales.</p>
      </div>


      <div id='page-12' className='absolute top-[55%] sm:left-[20%] left-[20%] text-[black] font-bold z-10 opacity-0 pointer-events-none w-[70%]'>
        <h1 className="text-[#E6007F] sm:text-3xl text-2xl">Step 4: Global Finals</h1>
        <h2 className="text-[#E6007F] sm:text-2xl text-xl">September</h2>
        <p className="font-normal sm:text-xl text-base">En las Finales Globales, los equipos presentarán sus emprendimientos sociales ante un panel de distinguidos jueces con la esperanza de ser seleccionados como el próximo ganador del Hult Prize de $1,000,000 USD.</p>
      </div>





 */}

      {/* 
      <p id='page-2' className='absolute sm:top-[30%] top-[10%] left-[5%] text-[#E6007F] sm:text-5xl text-3xl font-bold z-10 opacity-0 pointer-events-none '>Programa En Campus y<br />Solicitud Abierta</p>

      <div id='page-3' className='absolute sm:top-[50%] top-[60%] left-[8%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Diciembre</p>
        <ul>
          <li>Evaluar ideas de Startup</li>
          <li>Talleres de participación</li>
          <li>Introducir Design Thinking a los equipos</li>
          <li>Conectar participantes</li>
        </ul>
      </div>

      <div id='page-4' className='absolute sm:top-[60%] top-[40%] sm:left-[30%] left-[25%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Enero</p>
        <ul>
          <li>Talleres de Impulso MVP</li>
          <li>Talleres de habilidades blandas</li>
          <li>Recaudación de fondos, pruebas de presentación</li>
        </ul>
      </div>

      <div id='page-5' className='absolute sm:top-[60%] top-[35%] sm:right-[8%] right-[4%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Febrero</p>
        <ul>
          <li>Planificar competición local</li>
        </ul>
      </div>

      <p id='page-6' className='absolute sm:top-[30%] top-[20%] left-[25%] text-[#E6007F] sm:text-5xl text-3xl font-bold z-10 opacity-0 pointer-events-none '>The Summits</p>

      <div id='page-7' className='absolute sm:top-[50%] top-[45%] sm:left-[30%] left-[12%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Junio</p>
        <ul>
          <li>Los ganadores del Campus participarán <br />en Cumbres en diferentes ciudades del mundo.</li>
          <li>Los equipos ganadores de cada una de estas <br />cumbres obtendrán un lugar en la primera <br />fase del Global Accelerator.</li>
        </ul>
      </div>


      <p id='page-8' className='absolute sm:top-[40%] top-[20%] left-[15%] text-[#E6007F] sm:text-5xl text-3xl font-bold z-10 opacity-0 pointer-events-none '>Acelerador global</p>

      <div id='page-9' className='absolute sm:top-[60%] top-[50%] left-[18%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Fase 1</p>
        <ul>
          <li>Las startups atravesarán una <br />serie de desafíos comerciales</li>
        </ul>
      </div>

      <div id='page-10' className='absolute sm:top-[60%] top-[10%] right-[5%] text-[black] sm:text-3xl text-xl font-bold z-10 opacity-0 pointer-events-none'>
        <p>Fase 2</p>
        <ul>
          <li>Los 6 finalistas serán invitados a la <br />fase presencial de la Aceleradora.</li>
        </ul>
      </div>



      <p id='page-11' className='absolute top-[10%] left-[10%] text-[#E6007F] sm:text-5xl text-3xl font-bold z-10 opacity-0 pointer-events-none '>Finales globales</p>

      <div id='page-12' className='absolute top-[55%] sm:left-[10%] left-[1%] text-[black] sm:text-3xl text-base font-bold z-10 opacity-0 pointer-events-none'>
        <p>
          Los 6 equipos finalistas presentan sus proyectos sociales ante <br />
          un panel de jueces distinguidos con la esperanza de ser seleccionados <br />
          como el próximo ganador del Premio Hult de 1 millón de dólares estadounidenses.<br />

          En las Finales Globales, se anuncia el Desafío del Año del Premio Hult <br />
          y una startup será coronada como Ganadora del Premio Hult 2024.
        </p>

      </div>
*/}
    </div>
  );
}
