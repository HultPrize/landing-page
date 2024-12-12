import { Button } from "@/components/ui/button";
import Link from "next/link";

const Phase1 = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 mt-16 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Fase 1</h1>
        <p className="text-2xl font-medium text-gray-700">
          Desarrolla tu idea y un plan de negocio
        </p>
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            29 de Noviembre, 2024 - 15 de Diciembre, 2024
          </p>
        </div>
      </div>
      <img
        src={`https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023.jpeg`}
        alt={`Inicio Hult Prize 2023-2024`}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <div className="mt-8 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">Parte 1</h2>
        <ul className="text-lg text-gray-600 list-disc pl-6">
          <li>Definir roles y nombre del proyecto</li>
          <li>Identificar un problema significativo alineado con los ODS</li>
          <li>Propuesta de solución</li>
          <li>Aplicar el diseño centrado en el ser humano</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#E5077F] mt-4 mb-4">
          Parte 2
        </h2>
        <ul className="text-lg text-gray-600 list-disc pl-6">
          <li>Modelo de Negocio</li>
          <li>Competitividad en el Mercado</li>
          <li>Visión y Misión</li>
        </ul>
      </div>
      <div className="mt-4 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">
          Entregables
        </h2>
        <div className="flex flex-col space-y-4">
          <Link href={"https://forms.office.com/r/Vn0VpaP4BU"}>
            <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
              Entregable 1
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            Fecha límite: 03 de Diciembre, 2024
          </p>
          <Link href={"https://forms.office.com/r/UMzRQ55zpU"}>
            <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
              Entregable 2
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            Fecha límite: 10 de Diciembre, 2024
          </p>
          <Link href={"https://forms.office.com/r/Rk48p3DERf"}>
            <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
              Entregable 3
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            Fecha límite: 16 de Diciembre, 2024
          </p>
          <Link
            href={
              "https://epnecuador-my.sharepoint.com/:b:/g/personal/hultprize_epn_edu_ec/EZUXW8SADppGgDlH8q8oDw8BxJbxPI76ms1iQxAW9gnsiA?e=zMbh86"
            }
          >
            <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
              Formato Startup One-Pager
            </Button>
          </Link>
          <Link href={"https://forms.office.com/r/gwufTiKUZU"}>
            <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
              Entregable 4
            </Button>
          </Link>
          <p className="text-sm text-gray-600">
            Fecha límite: 16 de Diciembre, 2024
          </p>
        </div>
      </div>
      <div className="mt-4 self-start">
        <h2 className="text-2xl font-semibold text-[#E5077F] mb-4">
          Material de Apoyo
        </h2>
        <div className="flex flex-col space-y-4">
          <Link
            href={
              "https://hultprizefoundation.notion.site/2025-Competitors-Guidebook1115dd17a06b80c7a3c8ca764b59164b"
            }
          >
            <Button className="px-4 mt-0 bg-[#E5077F] text-white rounded hover:bg-pink-700 transition-colors duration-300">
              Competitors Guidebook
            </Button>
          </Link>
          <Link href={"https://www.hult.edu/hp2024/"}>
            <Button className="px-4 mt-0 bg-[#E5077F] text-white rounded hover:bg-pink-700 transition-colors duration-300">
              Digital Learning Hub
            </Button>
          </Link>
          <Link
            href={
              "https://hultprizefoundation.notion.site/How-to-get-started-on-your-idea1135dd17a06b805aa25efca8c5e6e60c"
            }
          >
            <Button className="px-4 mt-0 bg-[#E5077F] text-white rounded hover:bg-pink-700 transition-colors duration-300">
              Pasos para Empezar
            </Button>
          </Link>
          <Link
            href={
              "https://hultprizefoundation.notion.site/2025-Selection-Framework-Criteriad2dc919eab464bc58b9d8b248f7d7a7d"
            }
          >
            <Button className="px-4 mt-0 bg-[#E5077F] text-white rounded hover:bg-pink-700 transition-colors duration-300">
              Selection Framework & Criteria
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <Link href={"/howitworks/phase1"}>
          <Button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300">
            Fase 1
          </Button>
        </Link>
        <Link href={"/howitworks/phase2"}>
          <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
            Fase 2
          </Button>
        </Link>
        <Link href={"/howitworks/phase3"}>
          <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
            Fase 3
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Phase1;
