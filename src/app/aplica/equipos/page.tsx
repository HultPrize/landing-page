"use client";
import React, { useState, FormEvent } from "react";

interface TeamMember {
  name: string;
  email: string;
  phoneNumber: string;
  faculty: string;
  isLeader: boolean;
  university: string;
  studyArea: string;
}

export default function Teams() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [numMembers, setNumMembers] = useState("");
  const [hasExternalMember, setHasExternalMember] = useState(false);
  

  // State for team members
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const handleExternalMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setHasExternalMember(isChecked);

    // Reset numMembers if external member is selected
    if (isChecked) {
      setNumMembers("2"); // Set minimum of 3 total members initially
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Team Name:", teamName);
    console.log("Description:", description);
    console.log("Number of Members:", numMembers);
    console.log("Has External Member:", hasExternalMember);
    console.log("Team Members:", teamMembers);
  
    // Handle form submission - send data to the server
    // ...
  
    // Reset form fields after submission if needed
    // resetForm();
  };

  const addMemberField = () => {
    const totalMembers = hasExternalMember ? teamMembers.length + 1 : teamMembers.length;
    
    if (totalMembers < 5) {
      const newMember: TeamMember = {
        name: "",
        email: "",
        phoneNumber: "",
        faculty: "",
        isLeader: false,
        university: "",
        studyArea: "",
      };

      setTeamMembers([...teamMembers, newMember]);
    }
  };

  const handleMemberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    fieldName: string
  ) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = {
      ...newTeamMembers[index],
      [fieldName]: e.target.value,
    };
    setTeamMembers(newTeamMembers);
  };

  const handleNumMembersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumMembers = parseInt(e.target.value);
    const maxMembers = hasExternalMember ? 4 : 5;

    if (
      !isNaN(newNumMembers) &&
      newNumMembers >= 2 &&
      newNumMembers <= maxMembers
    ) {
      setNumMembers(e.target.value);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Team Registration</h1>
      <form onSubmit={handleSubmit} className="w-96">
        <label htmlFor="hasExternalMember" className="block mb-2">
          Are there any external members?
        </label>
        <input
          type="checkbox"
          id="hasExternalMember"
          checked={hasExternalMember}
          onChange={handleExternalMemberChange}
        />

        {hasExternalMember && (
          <>
            <label htmlFor="numMembers" className="block mt-4 mb-2">
              Number of Team Members (excluding external member):
            </label>
            <input
              type="number"
              id="numMembers"
              value={numMembers}
              min="3"
              max="4"
              onChange={handleNumMembersChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </>
        )}

        {!hasExternalMember && (
          <>
            <label htmlFor="numMembers" className="block mt-4 mb-2">
              Number of Team Members:
            </label>
            <input
              type="number"
              id="numMembers"
              value={numMembers}
              min="3"
              max="5"
              onChange={handleNumMembersChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </>
        )}

        {numMembers &&
          parseInt(numMembers) > 0 &&
          [...Array(parseInt(numMembers))].map((_, index) => (
            <div key={index}>
              <h2>Member {index + 1}</h2>
              {/* Common fields for all members */}
              <label htmlFor={`name-${index}`} className="block mt-4 mb-2">
                Name:
              </label>
              <input
                type="text"
                id={`name-${index}`}
                value={teamMembers[index]?.name || ""}
                onChange={(e) => handleMemberChange(e, index, "name")}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              {/* Add additional fields for email, phone number, etc. for each member */}
              {/* ... (similar pattern for other member fields) ... */}
            </div>
          ))}


        {hasExternalMember && (
          <div>
            <label htmlFor="externalMemberName" className="block mt-4 mb-2">
              External Member Name:
            </label>
            <input
              type="text"
              id="externalMemberName"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            {/* Add additional fields for the external member if needed */}
          </div>
        )}
        <p></p>
        <button
          type="button"
          onClick={addMemberField}
          disabled={
            (hasExternalMember ? teamMembers.length + 1 : teamMembers.length) >= 5
          }
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </form>
    </main>
  );
}
// "use client";
// import React, { useState } from "react";

// import { config } from "@/config";

// export default function Teams() {
//   const [teamName, setTeamName] = useState("");
//   const [numMembers, setNumMembers] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     console.log("teamName:", teamName);

//     try {
//       const response = await fetch(`${config.API_URL}/forms/teams`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: teamName, members: numMembers }),
//       });

//       if (response.ok) {
//         console.log("Equipo registrado exitosamente.");
//       } else {
//         // Manejar errores de la API
//         console.error("Error al registrar el equipo.");
//       }
//     } catch (error) {
//       // Manejar errores de red u otros errores
//       console.error("Error de red:", error);
//     }
//   };
//   return (
//     <main className="min-h-screen w-full flex flex-col justify-center items-center">
//       <h1>Registro de Equipo</h1>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <label htmlFor="teamName" className="block mb-2">
//           Nombre del Equipo:
//         </label>
//         <input
//           type="text"
//           id="teamName"
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <label htmlFor="numMembers" className="block mt-4 mb-2">
//           Número de Integrantes:
//         </label>
//         <input
//           type="number"
//           id="numMembers"
//           value={numMembers}
//           onChange={(e) => setNumMembers(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         >
//           Enviar
//         </button>
//       </form>
//     </main>
//   );
// }