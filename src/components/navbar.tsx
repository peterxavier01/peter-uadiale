import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import NavItems from "@/components/nav-items";
import MobileNav from "@/components/mobile-nav";

import Logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <header className="wrapper relative z-10 flex items-center justify-between py-6">
      <Link to="/" className="flex-shrink-0">
        <img src={Logo} alt="Logo" className="block h-[36px] w-[99px]" />
      </Link>

      <nav>
        <ul className="flex items-center gap-2 font-montserrat md:gap-5">
          <div className="hidden items-center gap-5 md:flex">
            <NavItems />
          </div>

          <Button
            variant="accent"
            className="hidden h-[51px] uppercase md:block"
          >
            Download cv
          </Button>

          <MobileNav />
        </ul>
      </nav>
    </header>
  );
}
