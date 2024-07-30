import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { skills } from "@/lib/data";

interface SkillCardProps {
  skill: (typeof skills)[0];
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-off-white px-[10px] py-5">
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-auto w-[50px]"
            />
          </div>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-medium">{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
