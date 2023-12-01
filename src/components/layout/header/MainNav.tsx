"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex justify-between w-full">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="Hult Prize logo"
          width={200}
          height={100}
        />
      </Link>
      <nav className="flex items-center space-x-6 text-md font-medium">
        <Link
          href="/sobre-nosotros"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Sobre Nosotros
        </Link>
        <Link
          href="/como-particpar"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Cómo participar
        </Link>
        <Link
          href="/casos-de-exito"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Casos de éxito
        </Link>
        <Link href={"/aplica"}>
            <Button className="bg-[#E5077F] h-0 py-5 rounded-xl text-lg">
                Aplica
            </Button>
        </Link>
      </nav>
    </div>
  );
}
