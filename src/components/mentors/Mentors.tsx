import React from "react";
import Mentor from "./Mentor";
import { mentors } from "@/lib/mentors.lib";
import { judges } from "@/lib/judges.lib";

export default function Mentors() {
    return (
      <>
        <h1 className="text-4xl font-bold text-center mt-10 pt-16">Conoce a tus Mentores</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-10">
          {mentors.map((mentor) => (
            <Mentor key={mentor.name} mentor={mentor} />
          ))}
        </div>

        <h1 className="text-4xl font-bold text-center mt-10 pt-16">Conoce a tus Jueces</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-10">
          {judges.map((judge) => (
            <Mentor key={judge.name} mentor={judge} />
          ))}
        </div>
      </>
    );
}