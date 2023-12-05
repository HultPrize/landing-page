import Link from "next/link";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b py-2 bg-white backdrop-blur">
      <div className="container flex justify-between h-14 items-center">
        <MainNav />
        <MobileNav />
        <Link href={"/aplica"}>
          <Button className="bg-[#E5077F] h-0 py-5 rounded-xl text-lg ml-2">
            Aplica
          </Button>
        </Link>
      </div>
    </header>
  );
}
