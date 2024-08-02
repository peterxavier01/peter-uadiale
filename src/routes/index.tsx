import { createFileRoute, Link } from "@tanstack/react-router";
import Typewriter from "typewriter-effect";

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { socialIcons } from "@/lib/data";

export const Route = createFileRoute("/")({
  component: HomePage,
});

type HeroBtnDataProps = {
  id: number;
  text: string;
  href: string;
  variant: "accent" | "bordered";
};

const HeroBtnData: HeroBtnDataProps[] = [
  { id: 1, text: "View Projects", href: "/projects", variant: "accent" },
  {
    id: 2,
    text: "Let's get in touch",
    href: "/contact",
    variant: "bordered",
  },
];

function HomePage() {
  return (
    <main className="grid min-h-dvh place-items-center gap-8 font-montserrat md:min-h-[calc(100dvh-99px)] md:grid-cols-12">
      <div className="z-10 aspect-auto md:col-span-8">
        <p className="text-xxs font-medium uppercase lg:text-paragraph">
          Hello
        </p>
        <h1 className="text-h4 font-bold md:text-h3 lg:text-h2">
          I&apos;m <span className="text-golden-yellow">Peter</span>, <br />{" "}
          <Typewriter
            options={{
              strings: [
                "Frontend Engineer.",
                "Tech Enthusiast.",
                "Problem Solver.",
                "Creative Thinker.",
                "Detail-oriented.",
                "Learner.",
                "Team Player.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mb-7 mt-4 text-xxs lg:text-paragraph">
          Currently based in Nigeria. I love crafting brilliant and professional
          user interfaces and experiences.
        </p>

        <div className="flex items-center gap-4 max-sm:flex-wrap md:gap-8">
          {HeroBtnData.map((btn: HeroBtnDataProps) => (
            <Link
              key={btn.id}
              to={btn.href}
              className="w-full md:max-w-[305px]"
            >
              <Button
                variant={btn.variant}
                className="h-12 w-full text-sm uppercase md:h-16 md:text-lg"
              >
                {btn.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="z-10 flex w-full gap-[51px] md:col-span-4 md:ml-auto md:w-max md:flex-col">
        {socialIcons.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              to={item.href}
              key={item.id}
              target="_blank"
              title={item.name}
            >
              <Icon fill="var(--off-white)" className="social-icon" />
            </Link>
          );
        })}
      </div>

      <BackgroundBeams />
    </main>
  );
}
