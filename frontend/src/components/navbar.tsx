import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import NavItems from "@/components/nav-items";
import MobileNav from "@/components/mobile-nav";

import { useScrollPosition } from "@/hooks/use-scroll-position";

import { cn } from "@/lib/utils";

import Logo from "../assets/Logo.svg";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={cn(
        "wrapper relative z-10 flex w-full items-center justify-between transition-all duration-500 ease-in-out",
        scrollPosition > 300
          ? "sticky top-0 bg-charcoal/80 py-3"
          : "bg-transparent py-6",
      )}
    >
      <Link to="/" className="mr-4 flex-shrink-0">
        <img src={Logo} alt="Logo" className="block h-[36px] w-[99px]" />
      </Link>

      <nav>
        <ul className="flex items-center gap-2 font-montserrat md:gap-5">
          <div className="hidden items-center gap-4 md:flex md:gap-5">
            <NavItems />
          </div>

          <a href="/Uadiale_Peter_Resume.pdf" download>
            <Button
              variant="accent"
              className="hidden h-[51px] uppercase md:block"
            >
              Download cv
            </Button>
          </a>

          <MobileNav />
        </ul>
      </nav>
    </header>
  );
}
