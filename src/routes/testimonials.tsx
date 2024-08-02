import { createFileRoute } from "@tanstack/react-router";

import AnimatedOverlay from "@/components/animated-overlay";
import Heading from "@/components/heading";
import TestimonialCard from "@/components/testimonial-card";

import { testimonials } from "@/lib/data";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

function Testimonials() {
  return (
    <main className="my-8 min-h-[calc(100dvh-99px)] font-montserrat md:my-16">
      <Heading title="Testimonials" />
      <p className="mb-12 text-paragraph md:mb-16 md:text-h5">
        Hear what my clients have to say
      </p>

      <section className="grid gap-8 md:grid-cols-2 md:gap-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </section>

      <AnimatedOverlay />
    </main>
  );
}
