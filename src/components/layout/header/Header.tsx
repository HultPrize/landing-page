import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b py-2 bg-white backdrop-blur">
      <div className="container flex justify-between h-14 items-center">
          <MainNav />
          <MobileNav />
      </div>
    </header>
  );
}
