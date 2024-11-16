import React from "react";

interface Phase {
  title: string;
  description: string;
  image: string;
  details: string[];
}

interface PopupProps {
  phase: Phase;
  onClose: () => void;
}

export default function Popup({ phase, onClose }: PopupProps) {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 relative max-h-[80vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E5077F] mb-4 text-center">{phase.title}</h3>
        <ul className="list-disc list-inside text-gray-700">
          {phase.details.map((detail, index) => (
            <p key={index} className="text-sm sm:text-base md:text-lg">{detail}</p>
          ))}
        </ul>
      </div>
    </div>
  );
}
