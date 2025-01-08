import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import NavItems from "@/components/nav-items";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { socialIcons } from "@/lib/data";

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className="block hover:bg-transparent hover:text-white md:hidden"
      >
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-none bg-dark-brown text-off-white">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6">
          <NavItems setOpen={setOpen} />
        </div>

        <div className="z-10 mt-8 flex w-full gap-8 md:col-span-4 md:ml-auto md:hidden md:w-max md:flex-col">
          {socialIcons.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id}>
                <Link
                  to={item.href}
                  key={item.id}
                  target="_blank"
                  title={item.name}
                >
                  <Icon fill="var(--off-white)" className="social-icon" />
                </Link>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
