import { Button } from "@/components/ui/button";
import Link from "next/link";

const Phase2 = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 mt-16 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Fase 2</h1>
        <p className="text-2xl font-medium text-gray-700">
          Perfeccionamiento de tu idea y Presentación
        </p>
        <div className="mt-8">
          <p className="text-lg text-gray-600">
            23 de Diciembre, 2024 - 08 de Enero, 2025
          </p>
        </div>
      </div>
      <img
        src={`https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023-presentation.jpeg`}
        alt={`Presentación 2023-2024`}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <div className="flex space-x-4 mt-4">
        <Link href={"/howitworks/phase1"}>
          <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300">
            Fase 1
          </Button>
        </Link>
        <Link href={"/howitworks/phase2"}>
          <Button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300">
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

export default Phase2;
