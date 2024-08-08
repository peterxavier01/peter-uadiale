import { m } from "framer-motion";

import { Card } from "@/components/ui/card";
import UserSpeak from "@/components/icons/user-speak";
import Quote from "@/components/icons/quote";

import { testimonials } from "@/lib/data";
import { cardItemVariants } from "@/lib/animations";

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, position, content } = testimonial;

  return (
    <m.div variants={cardItemVariants}>
      <Card className="bg-off-white p-8 py-12 md:p-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray">
              <UserSpeak fill="#3B3A30" className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-paragraph">{name}</h4>
              <p className="text-xxs">{position}</p>
            </div>
          </div>

          <div>
            <Quote fill="var(--accent-clr)" className="h-auto w-12" />
          </div>
        </div>

        <div>
          <p className="text-xxs md:text-base">{content}</p>
        </div>
      </Card>
    </m.div>
  );
}
