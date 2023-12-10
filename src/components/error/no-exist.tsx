import Image from 'next/image'
import Link from "next/link"

export default function NoExist() {

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#ffa0d94b]">
            <div className="w-[70%] p-8 bg-gray-200 text-center rounded-md shadow-md">
                <h2 className="text-3xl font-bold text-[#E6007F] mb-4">¡Página no encontrada!</h2>
                <p className="text-lg text-gray-700">
                    Lo sentimos, pero la página que estás buscando no pudo ser encontrada.
                </p>
            </div>
        </div>
    )

}