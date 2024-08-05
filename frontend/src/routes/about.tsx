import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import Heading from "@/components/heading";
import SkillCard from "@/components/skill-card";
import Timeline from "@/components/timeline";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";

import Work from "../assets/icon-briefcase.svg";
import Education from "../assets/icon-school.svg";

import { education, experiences, services, skills } from "@/lib/data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="my-8 min-h-[calc(100dvh-99px)] font-montserrat md:my-16">
      <section className="grid gap-6 space-y-7 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Heading title="About Me" className="mb-8" />

          <div className="space-y-4 text-xxs leading-7">
            <p>
              I am a front-end developer with 4 years of experience, driven by a
              curiosity about how things work, especially in the realms of web
              and mobile apps. My tech journey began in 2020 during the COVID
              pandemic.
            </p>
            <p>
              I started by searching “What is programming?” and found an
              informative article that provided a roadmap for beginners.
              Following that guide, I began learning Java but soon realized I
              preferred visual results over console applications.
            </p>
            <p>
              This led me to take Harvard’s CS50 courses, including Introduction
              to Computer Science, Web Programming with Python and JavaScript,
              and Introduction to Game Development. These courses introduced me
              to various technologies like Scratch, Lua, JavaScript, Python, and
              Unity.
            </p>
            <p>
              I decided to specialize in JavaScript due to its versatility.
              Since then, I’ve been building dynamic and scalable applications
              using JavaScript. I further specialized in front-end development
              with React, TypeScript, and Next.js, and I use Node.js for backend
              development. For mobile applications, I use React Native and Expo.
            </p>
            <p>
              To enhance my problem-solving skills, I regularly take on Leetcode
              challenges. I’m open to working on open-source projects related to
              front-end development, AI/ML applications, and Web3 apps.
            </p>
            <p>Fun fact: I enjoy playing chess, video games, and traveling.</p>
          </div>
        </div>

        <div className="flex h-max flex-wrap items-center gap-6 lg:col-span-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-[900px] gap-8 md:grid-cols-2">
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
    </main>
  );
}
