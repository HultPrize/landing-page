import React from "react";
import SponsorSection from "./SponsorSection";
import { allies, coHosts, hosts, sponsors } from "@/lib/sponsors.lib";

export default function Sponsors() {
  return (
    <div className="flex flex-col gap-4 py-10">
      <SponsorSection title="Host" subtitle="Host" sponsors={hosts} />
      <SponsorSection title="Co-Hosts" subtitle="Co-Hosts" sponsors={coHosts} />
      <SponsorSection
        title="Sponsors"
        subtitle="Sponsors"
        sponsors={sponsors}
      />
      <SponsorSection title="Aliados Estratégicos" subtitle="Aliados" sponsors={allies} />
    </div>
  );
}
