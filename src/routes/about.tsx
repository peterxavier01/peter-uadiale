import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/heading";
import SkillCard from "@/components/skill-card";
import Timeline from "@/components/timeline";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import AnimatedOverlay from "@/components/animated-overlay";

import Work from "../assets/icon-briefcase.svg";
import Education from "../assets/icon-school.svg";

import { education, experiences, services, skills } from "@/lib/data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="my-8 md:my-16 min-h-[calc(100dvh-99px)] font-montserrat">
      <section className="grid gap-7 md:grid-cols-2">
        <div>
          <Heading title="About Me" className="mb-8" />

          <p>
            I am a front-end developer. I have a passion for learning new things
            and experiencing new adventures. I possess a web development
            experience of three plus (3+) years.
            <br />
            <br />
            I am very inquisitive and open-minded. I strive to be a good
            listener to be able to provide the best results and experiences for
            my employers and users of my works. Also, I possess soft skills that
            enable me to function well in any team.
            <br />
            <br />
            I love reading good, knowledgeable and educative books. I also love
            seeing movies, animes and sleeping; and of course programming.
            <br />
            <br />
            The tools that I use for front-end development include React,
            BootStrap, Sass, JQuery, Vanilla JavaScript and Adobe XD, for now.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-[849px] gap-8 md:grid-cols-2">
        <div>
          <Heading title="Experience" />
          <Timeline data={experiences} src={Work} />
        </div>

        <div>
          <Heading title="Education" />
          <Timeline data={education} src={Education} />
        </div>
      </section>

      <section className="mt-24">
        <Heading title="My Services" className="text-left md:text-center" />

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/contact">
            <Button variant="accent" className="min-h-16 min-w-60 rounded-sm">
              Contact Me
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      <AnimatedOverlay />
    </main>
  );
}
