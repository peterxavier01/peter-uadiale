import { createFileRoute } from "@tanstack/react-router";

import Heading from "@/components/heading";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-[calc(100dvh-99px)] font-montserrat">
      <Heading title="Get In Touch" />
    </main>
  );
}
