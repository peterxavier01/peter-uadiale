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
          className="list-none font-montserrat text-sm uppercase lg:text-xxs"
          onClick={() => (setOpen ? setOpen(false) : null)}
        >
          <Link to={link.href} activeOptions={{ exact: true }}>
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

      <a href="src/assets/Uadiale_Peter_Resume.pdf" download>
        <Button
          variant="accent"
          className="block h-[51px] w-full uppercase md:hidden"
        >
          Download cv
        </Button>
      </a>
    </>
  );
}
