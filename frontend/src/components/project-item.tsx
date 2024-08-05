import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import Github from "@/components/icons/github";
import LivePreview from "@/components/icons/live-preview";
import { Badge } from "@/components/ui/badge";
import Tool from "@/components/tool";

import { projects } from "@/lib/data";

import useProjectModalStore from "@/hooks/use-project-modal";

import Demo from "../assets/project-demo.png";

interface ProjectItemProps {
  project: (typeof projects)[0];
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const onOpen = useProjectModalStore((state) => state.onOpen);
  const setProjectId = useProjectModalStore((state) => state.setProjecId);

  // Get project id from data-project-id attribute and set it to the store
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const projectId = (event.target as HTMLSpanElement).dataset.projectId;
    setProjectId(Number(projectId));
  };

  return (
    <div className="project-item grid items-center gap-16 md:grid-cols-2">
      <div>
        <img src={project.image || Demo} alt={project.name} />
      </div>

      <div>
        <div className="flex items-center gap-4">
          <h3 className="mb-4 text-h5 font-bold md:text-h4">{project.name}</h3>
          <Badge variant="project" className="text-center">
            {project.category}
          </Badge>
        </div>

        <p className="text-xxs">{project.description}</p>
        <div
          className="mt-2 flex cursor-pointer items-center gap-1 text-golden-yellow"
          onClick={onOpen}
        >
          <span
            className="text-xxs font-medium"
            data-project-id={project.id}
            onClick={handleClick}
          >
            See more
          </span>
          <ChevronDown />
        </div>

        <div className="mt-8">
          <p className="mb-4 text-paragraph font-semibold">
            Technologies used:
          </p>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {project.tools.map((tool) => (
              <Tool key={tool.id} name={tool.name} />
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
