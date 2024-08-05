import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <h2 className={cn("text-h4 font-bold md:text-h3", className)}>{title}</h2>
  );
}
