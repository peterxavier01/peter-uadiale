import Heading from "@/components/heading";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

function Testimonials() {
  return (
    <main className="min-h-[calc(100dvh-99px)] font-montserrat">
      <Heading title="Testimonials" />
    </main>
  );
}
