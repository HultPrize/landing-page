import React from "react";
import SponsorSection from "./SponsorSection";
import { allies, coHosts, hosts, sponsors, mediaPartners } from "@/lib/sponsors.lib";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-4 py-10">
      <SponsorSection title="Host" subtitle="Escuela Politécnica Nacional" sponsors={hosts} />
      <SponsorSection title="Co-Hosts" subtitle="Ciencias Administrativas y Sistemas" sponsors={coHosts} />
      <SponsorSection title="Aliados Estratégicos" subtitle="Ejes Fundamentales" sponsors={allies}/>
      <SponsorSection title="Sponsors" subtitle="Confían en nosotros" sponsors={sponsors} />
      <SponsorSection title="Media Partners" subtitle="Comprometidos con mejorar al mundo" sponsors={mediaPartners} />
    </div>
  );
}
