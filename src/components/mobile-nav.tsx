import { useState } from "react";
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
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block md:hidden">
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
      </SheetContent>
    </Sheet>
  );
}
