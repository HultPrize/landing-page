"use client";
import React, { useState } from "react";
import { config } from "@/config";

interface MessageBoxProps {
  message: string;
  type: 'success' | 'error';
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`message-box ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default function InterestForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [faculty, setFaculty] = useState("");
  const [academic_level, setAcademicLevel] = useState<number | string>("");
  const [is_external, setIsExternal] = useState(false);
  const [university, setUniversity] = useState("EPN");
  const [sdg, setSelectedSdg] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  // Función para manejar el envío del formulario
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const formData = {
      first_name,
      last_name,
      email,
      phone,
      faculty,
      academic_level,
      is_external,
      university,
      sdg,
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
      setSuccessMessage('Form submitted successfully!');
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setFaculty("");
      setAcademicLevel("");
      setIsExternal(false);
      setUniversity("EPN");
      setSelectedSdg("");
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
      if (response.ok) {
        console.log("Interesado registrado exitosamente.");
      } else {
        // Manejar errores de la API
        console.error("Error al registrar el interesado.");
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error de red:", error);
      setErrorMessage('Failed to submit form. Please try again.');
      setSuccessMessage('');
    }
  };

  const handleAcademicLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = e.target.value;
    const numericValue = parseInt(enteredValue);

    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
      setAcademicLevel(numericValue);
      setShowErrorMessage(false);
    } else {
      setAcademicLevel("");
      setShowErrorMessage(true);
    }
  };

  const handleExternalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsExternal(e.target.checked);
    if (!e.target.checked) {
      setUniversity("EPN");
    } else {
      setUniversity("");
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center mt-20">
      <h1>Formulario de Interesado</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Agrega los campos del formulario */}
        <label htmlFor="first_name" className="block mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="last_name" className="block mt-4 mb-2">
          Apellido:
        </label>
        <input
          type="text"
          id="last_name"
          value={last_name}
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
          <option value="" disabled hidden>
            Seleccione una facultad
          </option>
          <option value="FIS">Facultad de Sistemas</option>
          <option value="FCA">Facultad de Ciencias Administrativas</option>
          <option value="FC">Facultad de Ciencias</option>
          <option value="FQA">Facultad de Química y Agroindustria</option>
          <option value="FCAyA">Facultad de Civil y Ambiental</option>
          <option value="FEyE">Facultad de Eléctrica y Electrónica</option>
          <option value="FyG">Facultad de Geología y Petróleos</option>
          <option value="FM">Facultad de Mecánica</option>
          <option value="ESFOT">Escuela de Formación de Tecnólogos (ESFOT)</option>
          {/* Add more options as needed */}
        </select>


        <label htmlFor="academic_level" className="block mt-4 mb-2">
          Nivel Académico:
        </label>
        <div>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            id="academic_level"
            value={typeof academic_level === 'number' ? academic_level : ""}
            onChange={handleAcademicLevelChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {showErrorMessage && (
            <p className="text-red-500">Please enter a value from 1 to 10.</p>
          )}
        </div>

        <div>
          <label htmlFor="is_external" className="block mt-4 mb-2">
            Externo:
          </label>
          <input
            type="checkbox"
            id="is_external"
            checked={is_external}
            onChange={handleExternalChange}
          />

          {is_external && (
            <>
              <label htmlFor="university" className="block mt-4 mb-2">
                Universidad:
              </label>
              <input
                type="text"
                id="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el nombre de la universidad"
                required
              />
            </>
          )}
        </div>

        <label htmlFor="sdgs" className="block mt-4 mb-2">
          SDGs:
        </label>
        <select
          id="sdg"
          value={sdg}
          onChange={(e) => setSelectedSdg(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>
            Seleccione un SDG
          </option>
          {Array.from({ length: 17 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {(() => {
                switch (index + 1) {
                  case 1:
                    return 'Acción por el clima';
                  case 2:
                    return 'Agua limpia y saneamiento';
                  case 3:
                    return 'Alianzas para lograr los objetivos';
                  case 4:
                    return 'Ciudades y comunidades sostenibles';
                  case 5:
                    return 'Educación de calidad';
                  case 6:
                    return 'Energía asequible y no contaminante';
                  case 7:
                    return 'Fin de la pobreza';
                  case 8:
                    return 'Hambre cero';
                  case 9:
                    return 'Igualdad de género';
                  case 10:
                    return 'Industria, innovación e infraestructura';
                  case 11:
                    return 'Paz, justicia e instituciones sólidas';
                  case 12:
                    return 'Producción y consumo responsables';
                  case 13:
                    return 'Reducción de las desigualdades';
                  case 14:
                    return 'Salud y bienestar';
                  case 15:
                    return 'Trabajo decente y crecimiento económico';
                  case 16:
                    return 'Vida de ecosistemas terrestres';
                  case 17:
                    return 'Vida submarina';
                  default:
                    return '';
                }
              })()}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Enviar
        </button>
        <MessageBox message={successMessage} type="success" />
        <MessageBox message={errorMessage} type="error" />
      </form>
    </main>
  );
}
