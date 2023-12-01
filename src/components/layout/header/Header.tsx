import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

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
