import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { socialData } from "@/lib/social.lib";

export default function Footer() {
  return (
    <>
      <div className="p-2"></div>
      <Separator />
      <footer className="px-16 py-8 w-full flex flex-col justify-center items-center">
        <div className="flex gap-4">
          {socialData.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-[#E6007F]"/>
              </Link>
            );
          })}
        </div>
        <p className="mt-4 text-center">
          © 2023 Hult Prize at EPN. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
