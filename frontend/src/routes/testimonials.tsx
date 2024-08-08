import { createFileRoute } from "@tanstack/react-router";
import { m } from "framer-motion";

import Heading from "@/components/heading";
import TestimonialCard from "@/components/testimonial-card";

import { testimonials } from "@/lib/data";
import { cardContainerVariants, fadeInVariants } from "@/lib/animations";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

function Testimonials() {
  return (
    <main className="my-8 min-h-[calc(100dvh-99px)] font-montserrat md:my-16">
      <Heading title="Testimonials" />
      <m.p
        className="mb-12 text-paragraph md:mb-16"
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
      >
        Hear what my clients have to say
      </m.p>

      <m.section
        className="grid gap-8 md:grid-cols-2 md:gap-12"
        variants={cardContainerVariants}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </m.section>
    </main>
  );
}
