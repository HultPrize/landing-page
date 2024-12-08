"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mentor } from "@/app/types";

interface MentorProps {
    mentor: Mentor;
}

const MentorComponent: React.FC<MentorProps> = ({ mentor }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mentor flex flex-col items-center text-center transition-transform duration-300 p-4 md:p-6 lg:p-8">
            <Image
                src={mentor.imageSrc}
                alt={mentor.name}
                width={256}
                height={256}
                className="border-4 border-gray-300 shadow-md rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-80 lg:h-80"
                quality={100}
                style={{ objectFit: "cover" }}
            />
            <h2 className="mentor-name text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mt-4">
                {mentor.name}
            </h2>
            <p className={`mentor-description text-base sm:text-lg md:text-xl lg:text-xl mt-2 text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
                {mentor.description}
            </p>
            <button
                onClick={toggleDescription}
                className="text-pink-500 mt-2"
            >
                {isExpanded ? "Leer menos" : "Leer más"}
            </button>
        </div>
    );
};

export default MentorComponent;
