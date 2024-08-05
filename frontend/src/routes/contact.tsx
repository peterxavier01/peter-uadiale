import { createFileRoute } from "@tanstack/react-router";

import Heading from "@/components/heading";
import ContactCard from "@/components/contact-card";
import ContactForm from "@/components/contact-form";

import { contactData } from "@/lib/data";

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

      <section className="mt-[72px]">
        <ContactForm />
      </section>
    </main>
  );
}
