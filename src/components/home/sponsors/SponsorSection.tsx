import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sponsor } from "@/app/types";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle: string;
  sponsors: Sponsor[];
};

export default function SponsorSection({ title, subtitle, sponsors }: Props) {
  return (
    <section className="w-full p-8 flex flex-col justify-center items-center text-center">
      <h3 className="text-2xl md:text-4xl font-semibold">{title}</h3>
      <h4 className="text-xl md:text-2xl mt-2 ">{subtitle}</h4>
      <div className="mt-5 flex gap-8 flex-wrap justify-center items-center">
        {sponsors.map((sponsor: Sponsor) => (
          <div
            key={`home-${sponsor.name}-sponsor`}
            className={"hover:scale-110 transition-all duration-300"}
          >
            <Link href={sponsor.url}>
              <Image
                src={sponsor.logo.url}
                alt={sponsor.name}
                width={sponsor.logo.size.width}
                height={sponsor.logo.size.height}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
