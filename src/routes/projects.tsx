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
    <main className="my-16 min-h-[calc(100dvh-99px)] font-montserrat">
      <Heading title="My Projects" />

      <section className="mt-12">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>

      <AnimatedOverlay />
    </main>
  );
}
