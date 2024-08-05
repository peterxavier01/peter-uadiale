import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface IconWithTooltipProps {
  icon: string;
  iconName: string;
  iconStyles?: string;
  containerStyles?: string;
}

export default function IconWithTooltip({
  icon,
  iconName,
  iconStyles,
  containerStyles,
}: IconWithTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={containerStyles}>
            <img src={icon} alt={iconName} className={iconStyles} />
          </div>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-medium">{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
