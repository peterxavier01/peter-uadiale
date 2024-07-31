import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import Github from "@/components/icons/github";
import LivePreview from "@/components/icons/live-preview";
import IconWithTooltip from "@/components/icon-with-tooltip";
import { Badge } from "@/components/ui/badge";

import { projects } from "@/lib/data";

import Demo from "../assets/project-demo.png";

interface ProjectItemProps {
  project: (typeof projects)[0];
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="project-item grid items-center gap-16 md:grid-cols-2">
      <div>
        <img src={project.image || Demo} alt={project.name} />
      </div>

      <div>
        <div className="flex items-center gap-4">
          <h3 className="mb-4 text-h5 font-bold md:text-h4">{project.name}</h3>
          <Badge variant="project">{project.category}</Badge>
        </div>

        <p className="text-xxs">{project.description}</p>

        <div className="mt-8">
          <p className="mb-4 text-paragraph font-semibold">
            Technologies used:
          </p>
          <div className="mb-8 flex items-center gap-[42px]">
            {project.tools.map((tool) => (
              <IconWithTooltip
                key={tool.id}
                icon={tool.icon}
                iconName={tool.name}
                iconStyles="h-auto w-8"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 max-sm:flex-wrap">
            <Link
              to={project.live_preview_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:max-w-[247px]"
            >
              <Button
                variant="accent"
                className="min-h-[51px] w-full rounded uppercase"
              >
                <LivePreview fill="#ffffff" className="mr-3 h-6 w-6" />
                Live preview
              </Button>
            </Link>

            <Link
              to={project.github_repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:max-w-[247px]"
            >
              <Button
                variant="bordered"
                className="min-h-[51px] w-full rounded uppercase"
              >
                <Github fill="#ffffff" className="mr-3 h-6 w-6" />
                Github repo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
