import { createFileRoute } from "@tanstack/react-router";

import Heading from "@/components/heading";
import AnimatedOverlay from "@/components/animated-overlay";
import ProjectItem from "@/components/project-item";

import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="my-8 min-h-[calc(100dvh-99px)] font-montserrat md:my-16">
      <Heading title="My Projects" />

      <section className="mt-12 flex flex-col gap-16 md:gap-24">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>

      <AnimatedOverlay />
    </main>
  );
}
