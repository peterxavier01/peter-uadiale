import { Card } from "@/components/ui/card";
import UserSpeak from "@/components/icons/user-speak";
import Quote from "@/components/icons/quote";

import { testimonials } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, position, content } = testimonial;

  return (
    <Card className="bg-off-white p-8 py-12 md:p-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <div className="bg-gray flex h-14 w-14 items-center justify-center rounded-full md:h-20 md:w-20">
            <UserSpeak fill="#3B3A30" className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <div>
            <h4 className="text-paragraph md:text-h5">{name}</h4>
            <p className="text-xxs md:text-paragraph">{position}</p>
          </div>
        </div>

        <div>
          <Quote fill="var(--accent-clr)" className="h-auto w-12 md:w-16" />
        </div>
      </div>

      <div>
        <p className="text-xxs md:text-paragraph">{content}</p>
      </div>
    </Card>
  );
}
