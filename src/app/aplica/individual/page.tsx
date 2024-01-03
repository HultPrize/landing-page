"use client";
import React, { useState } from "react";
import { config } from "@/config";

export default function InterestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [faculty, setFaculty] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [isLeader, setIsLeader] = useState(false);
  const [team, setTeam] = useState("");
  const [isExternal, setIsExternal] = useState(false);
  const [university, setUniversity] = useState("EPN");
  const [selectedSdg, setSelectedSdg] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      faculty,
      academicLevel,
      isLeader,
      team,
      isExternal,
      university,
      selectedSdg,
    };

    console.log("Formulario enviado:", formData);

    try {
      const response = await fetch(`${config.API_URL}/forms/interested`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Interesado registrado exitosamente.");
      } else {
        // Manejar errores de la API
        console.error("Error al registrar el interesado.");
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error de red:", error);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center mt-20">
      <h1>Formulario de Interesado</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Agrega los campos del formulario */}
        <label htmlFor="firstName" className="block mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="lastName" className="block mt-4 mb-2">
          Apellido:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="email" className="block mt-4 mb-2">
          Correo:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="phone" className="block mt-4 mb-2">
          Teléfono:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="faculty" className="block mt-4 mb-2">
          Facultad:
        </label>
        <select
          id="faculty"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="FIS">FIS</option>
          <option value="FCA">FCA</option>
          {/* Agrega más opciones según sea necesario */}
        </select>

        <label htmlFor="academicLevel" className="block mt-4 mb-2">
          Nivel Académico:
        </label>
        <input
          type="number"
          id="academicLevel"
          value={academicLevel}
          onChange={(e) => setAcademicLevel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="isLeader" className="block mt-4 mb-2">
          Es líder:
        </label>
        <input
          type="checkbox"
          id="isLeader"
          checked={isLeader}
          onChange={(e) => setIsLeader(e.target.checked)}
        />

        <label htmlFor="team" className="block mt-4 mb-2">
          Equipo:
        </label>
        <input
          type="text"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label htmlFor="isExternal" className="block mt-4 mb-2">
          Externo:
        </label>
        <input
          type="checkbox"
          id="isExternal"
          checked={isExternal}
          onChange={(e) => setIsExternal(e.target.checked)}
        />

        {isExternal && (
          <>
            <label htmlFor="university" className="block mt-4 mb-2">
              Universidad:
            </label>
            <select
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="EPN">EPN</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </>
        )}

        <label htmlFor="sdgs" className="block mt-4 mb-2">
          SDGs:
        </label>
        <select
          id="sdg"
          value={selectedSdg}
          onChange={(e) => setSelectedSdg(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>
            Seleccione un SDG
          </option>
          {Array.from({ length: 17 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>

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
