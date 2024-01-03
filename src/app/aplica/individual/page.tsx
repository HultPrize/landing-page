"use client";
import React, { useState } from "react";

import { config } from "@/config";

export default function Teams() {
  const [teamName, setTeamName] = useState("");
  const [numMembers, setNumMembers] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("teamName:", teamName);

    try {
      const response = await fetch(`${config.API_URL}/forms/teams`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: teamName, members: numMembers }),
      });

      if (response.ok) {
        console.log("Equipo registrado exitosamente.");
      } else {
        // Manejar errores de la API
        console.error("Error al registrar el equipo.");
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error de red:", error);
    }
  };
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1>Registro de Equipo</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="teamName" className="block mb-2">
          Nombre del Equipo:
        </label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="numMembers" className="block mt-4 mb-2">
          Número de Integrantes:
        </label>
        <input
          type="number"
          id="numMembers"
          value={numMembers}
          onChange={(e) => setNumMembers(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}