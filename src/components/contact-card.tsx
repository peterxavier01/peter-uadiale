import { Card, CardContent } from "@/components/ui/card";

import { contactData } from "@/lib/data";

interface ContactCardProps {
  data: (typeof contactData)[0];
}

export default function ContactCard({ data }: ContactCardProps) {
  return (
    <Card className="flex items-center rounded-lg bg-off-white p-4 md:p-8 lg:p-12">
      <CardContent className="flex h-fit items-center gap-4 p-0 md:gap-6 lg:gap-8">
        <div className="flex h-10 w-10 items-center justify-center rounded bg-golden-yellow/25 md:h-14 md:w-14 lg:h-[60px] lg:w-[60px]">
          <data.icon fill="#F0A500" className="h-auto w-6 md:w-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-paragraph font-bold lg:text-2xl">{data.title}</h3>
          <p className="text-sm lg:text-xl">{data.content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
