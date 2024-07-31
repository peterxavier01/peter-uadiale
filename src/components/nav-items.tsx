import { navLinks } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

interface NavItemsProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavItems({ setOpen }: NavItemsProps) {
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className="list-none text-[15px] uppercase lg:text-xxs"
          onClick={() => (setOpen ? setOpen(false) : null)}
        >
          <Link to={link.href}>
            {({ isActive }) => {
              return (
                <p
                  className={
                    isActive
                      ? "font-bold text-golden-yellow transition"
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
        className="block h-[51px] w-full uppercase md:hidden"
      >
        Download cv
      </Button>
    </>
  );
}
