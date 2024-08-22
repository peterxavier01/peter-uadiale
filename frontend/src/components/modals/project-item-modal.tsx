import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Tool from "@/components/tool";
import SubHeading from "@/components/sub-heading";
import List from "@/components/ui/list";
import ProjectCarousel from "@/components/project-carousel";

import useProjectModalStore from "@/hooks/use-project-modal";

import { projects } from "@/lib/data";

export default function ProjectItemModal() {
  const isOpen = useProjectModalStore((state) => state.isOpen);
  const onClose = useProjectModalStore((state) => state.onClose);
  const projectId = useProjectModalStore((state) => state.projectId);

  const getProjectById = (projectId: number) => {
    return projects.find((project) => project.id === projectId);
  };

  const project = getProjectById(projectId);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="no-scroll h-full w-full max-w-3xl space-y-4 overflow-y-auto border-dark-brown bg-dark-brown px-4 py-14 font-montserrat text-off-white max-sm:rounded-none md:max-h-[90vh] md:px-8">
        <DialogHeader>
          <DialogTitle className="mb-2 text-3xl font-bold">
            {project?.name}
          </DialogTitle>
          <DialogDescription className="text-base text-off-white">
            {project?.description}
          </DialogDescription>
        </DialogHeader>

        {project?.imageList?.length ? (
          <section className="mx-auto">
            <ProjectCarousel images={project?.imageList} />
          </section>
        ) : null}

        <section>
          <SubHeading title="Project Requirements" />
          <div className="mt-4 space-y-4">
            {project?.project_requirements?.map((item, index) => (
              <List key={index} content={item} />
            ))}
          </div>
        </section>

        <section>
          <SubHeading title="My Approach" />
          <div className="mt-4 space-y-4">
            {project?.approach?.map((item, index) => (
              <List key={index} content={item} />
            ))}
          </div>
        </section>

        <section>
          <SubHeading title="Challenges Faced" />
          <div className="mt-4 space-y-4">
            {project?.challenges?.map((item, index) => (
              <List key={index} content={item} />
            ))}
          </div>
        </section>

        <section>
          <SubHeading title="Languages / Technologies used" />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project?.tools.map((tool) => (
              <Tool key={tool.id} name={tool.name} />
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
