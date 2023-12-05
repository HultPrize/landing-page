import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

import { socialData } from "@/lib/social.lib";

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className="px-16 py-8 w-full flex flex-col justify-center items-center">
        <Image
          src={"/logo.svg"}
          alt="Hult Prize logo"
          width={300}
          height={150}
          className=""
        />
        <div className="mt-2 flex gap-4">
          {socialData.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-[#E6007F]" />
              </Link>
            );
          })}
        </div>

        <div className="mt-4">
          <p className="text-center">
            © 2023 Hult Prize at EPN. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
