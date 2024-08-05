import { CheckSquare } from "lucide-react";

export default function List({ content }: { content: string }) {
  return (
    <div className="flex w-full items-center gap-4">
      <CheckSquare className="size-4 flex-shrink-0 text-golden-yellow" />
      <p className="font-roboto-mono text-sm leading-6 md:text-[15px]">
        {content}
      </p>
    </div>
  );
}
