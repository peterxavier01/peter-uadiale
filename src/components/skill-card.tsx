import IconWithTooltip from "@/components/icon-with-tooltip";

import { skills } from "@/lib/data";

interface SkillCardProps {
  skill: (typeof skills)[0];
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <IconWithTooltip
      icon={skill.icon}
      iconName={skill.name}
      iconStyles="h-auto w-[50px]"
      containerStyles="flex h-16 w-16 items-center justify-center rounded-lg bg-off-white px-[10px] py-5"
    />
  );
}
