import { navLinks } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export default function NavItems() {
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className="text-[15px] lg:text-xxs uppercase list-none"
        >
          <Link to={link.href}>
            {({ isActive }) => {
              return (
                <p
                  className={
                    isActive
                      ? "text-golden-yellow font-bold transition"
                      : "hover:text-golden-yellow"
                  }
                >
                  {link.name}
                </p>
              );
            }}
          </Link>
        </li>
      ))}

      <Button
        variant="accent"
        className="uppercase h-[51px] block md:hidden w-full"
      >
        Download cv
      </Button>
    </>
  );
}
