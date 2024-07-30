import { Menu } from "lucide-react";

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

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:hidden">
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-dark-brown border-none text-off-white">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 mt-8">
          <NavItems />
        </div>
      </SheetContent>
    </Sheet>
  );
}
