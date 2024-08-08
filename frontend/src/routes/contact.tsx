import { m } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";

import Heading from "@/components/heading";
import ContactCard from "@/components/contact-card";
import ContactForm from "@/components/contact-form";

import { contactData } from "@/lib/data";
import { fadeInUpVariants } from "@/lib/animations";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="my-8 min-h-[calc(100dvh-99px)] font-montserrat md:my-16">
      <Heading title="Get In Touch" />

      <section className="mt-8 grid gap-4 md:grid-cols-2 md:gap-10">
        {contactData.map((data) => (
          <ContactCard key={data.id} data={data} />
        ))}
      </section>

      <m.section
        className="mt-[72px]"
        variants={fadeInUpVariants}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
      >
        <ContactForm />
      </m.section>
    </main>
  );
}
