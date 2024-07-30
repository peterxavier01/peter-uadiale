import { createFileRoute } from "@tanstack/react-router";

import Heading from "@/components/heading";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="min-h-[calc(100dvh-99px)] font-montserrat">
      <Heading title="My Projects" />
    </main>
  );
}
