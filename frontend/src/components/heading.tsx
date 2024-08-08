import { m } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeInVariants } from "@/lib/animations";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <m.h2
      className={cn("text-h4 font-bold md:text-h3", className)}
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
    >
      {title}
    </m.h2>
  );
}
