import { Link } from "@tanstack/react-router";

import { socialIcons } from "@/lib/data";
import Logo from "@/assets/Logo.svg";

function getCurrentYear() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}

export default function Footer() {
  return (
    <footer className="wrapper flex min-h-24 flex-wrap items-center justify-between gap-8 bg-charcoal py-6">
      <Link to="/" className="h-[36px] w-[99px]">
        <img src={Logo} alt="logo" className="block w-full" />
      </Link>

      <section>
        <p>© {getCurrentYear()} Peter Uadiale | All Rights Reserved</p>
      </section>

      <section className="flex items-center gap-8">
        {socialIcons.map((icon) => (
          <Link to={icon.href} key={icon.id} title={icon.name}>
            <icon.icon fill="var(--off-white)" className="h-6 w-6" />
          </Link>
        ))}
      </section>
    </footer>
  );
}
