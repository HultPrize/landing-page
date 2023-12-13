import React, { useRef } from "react";

import Earth from "@/components/3d-design/Earth";
import Welcome from "@/components/3d-design/Welcome";
import Map from "@/components/3d-design/Map";

import ContentMap from "@/components/3d-design/ContentMap";

export default function Home() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#ffa0d94b]">
        <Map />
        <ContentMap />
      </div>
    </>
  );
}
