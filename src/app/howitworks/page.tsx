'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const phases = [
  { title: "Primera Fase", description: "Desarrollo de Idea\ny Plan de Negocio", image: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023.jpeg", details: [  
    "Del 29 Noviembre al 15 Diciembre",
    "Definir roles del equipo y líder.",  
    "Identificar un problema significativo alineado con los ODS.",  
    "Realizar investigación de mercado y diseño centrado en el ser humano.",  
    "Desarrollar un plan de negocio completo con modelo, mercado y sostenibilidad.",  
    "Identificación de problemas críticos y evaluación de impacto social.",  
    "Desarrollo de productos y planes de negocio sólidos.",  
    "Desarrollar habilidades en diseño centrado en el humano, emprendimiento y ODS.",  
    "Entregar propuesta escrita con detalles clave (problema, solución, equipo, modelo, etc.).",  
    "Presentar un video de 4 minutos exponiendo la idea."  
    ]   
  },
  { title: "Semifinal", description: "Perfeccionamiento\ny Pitch", image: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023-presentation.jpeg", details: [  
    "Del 23 Diciembre al 8 Enero",
    "Crear un pitch efectivo que resuma la idea, problema, impacto y viabilidad.",  
    "Perfeccionar la idea con planos detallados de un prototipo.",  
    "Practicar el pitch y recibir retroalimentación para mejorarlo.",  
    "Competir en rondas clasificatorias y recoger retroalimentación de jueces y equipos.",  
    "Aprender técnicas de comunicación y persuasión para un pitch efectivo.",  
    "Desarrollar prototipos funcionales y validar la viabilidad del producto.",  
    "Desarrollar habilidades en presentación, diseño de prototipos y estrategias de validación.",  
    "Entregar una presentación un día antes del evento semifinal.",  
    "Exponer ante un panel con 4 minutos de presentación y 2 minutos para preguntas."  
    ]   },
  { title: "Gran Final", description: "Estrategia de Lanzamiento\ny Validación Final", image: "https://hult-prize.s3.us-east-1.amazonaws.com/HultPrize/photos/hultprize-epn-2022-2023-finals.jpeg", details: [  
    "Del 10 Enero al 22 Enero",
    "Evaluar y ajustar el plan de negocio según retroalimentación recibida.",  
    "Crear un prototipo físico o digital y realizar pruebas de usuario para mejorar el diseño.",  
    "Ajustar la estrategia de lanzamiento, canales de distribución y tácticas de promoción.",  
    "Preparar la presentación ante un panel de jueces.",  
    "Estrategias de entrada al mercado y tácticas de promoción.",  
    "Desarrollo y validación de prototipos mediante pruebas de usuario.",  
    "Desarrollar habilidades en diseño, optimización de productos y estrategias de mercado.",  
    "Entregar presentación un día antes del evento Gran Final.",  
    "Exponer en inglés durante 4 minutos con 4 minutos adicionales para preguntas."  
    ]   },
];

export default function Page() {
  const [currentPhase, setCurrentPhase] = useState(0)

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev + 1) % phases.length)
  }

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length)
  }

  const phase = phases[currentPhase]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 pt-16">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">{phase.title}</h1>
          <p className="text-lg text-center text-gray-600 mb-6">{phase.description}</p>
          <div className="relative">
            <img 
              src={phase.image} 
              alt={`Illustration for ${phase.title}`} 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between">
              <button 
                onClick={prevPhase} 
                className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 rounded-full p-2 mx-4"
                aria-label="Previous phase"
              >
                <ChevronLeftIcon className="w-8 h-8 text-gray-800" />
              </button>
              <button 
                onClick={nextPhase} 
                className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 rounded-full p-2 mx-4"
                aria-label="Next phase"
              >
                <ChevronRightIcon className="w-8 h-8 text-gray-800" />
              </button>
            </div>
          </div>
          <ul className="mt-6 text-gray-600 text-lg leading-relaxed list-disc pl-6">
            {phase.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 px-8 py-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">Fase {currentPhase + 1} de {phases.length}</span>
          <div className="space-x-2">
            <button 
              onClick={prevPhase}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors duration-300"
            >
              Anterior
            </button>
            <button 
              onClick={nextPhase}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
