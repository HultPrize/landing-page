"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/nav.lib";

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
        {navItems.map((item) => (
          <Link
            key={`mobile-item-${item.name}`} href={item.link}
            className={cn(
              "transition-colors hover:text-[#E5077F]/80",
              pathname === item.link ? "text-[#E5077F]" : "text-slate-950"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
