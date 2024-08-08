import { Calendar } from "lucide-react";

import Divider from "./divider";

interface Experience {
  id: number;
  company: string;
  period: string;
  role: string;
}

interface Education {
  id: number;
  school: string;
  period: string;
  degree: string;
}

type TimelineItem = Experience | Education;

interface TimelineProps {
  data: TimelineItem[];
  src: string;
}

export default function Timeline({ data, src }: TimelineProps) {
  return (
    <div className="mt-10">
      <div className="space-y-14 overflow-hidden">
        {data.map((item: TimelineItem) => (
          <div className="flex items-center gap-5" key={item.id}>
            <div className="relative z-[999]">
              <Divider id={item.id} src={src} alt="work experience" />
            </div>

            <div className="relative">
              <>
                <h4 className="text-base font-bold">
                  {"role" in item ? item.role : null}
                </h4>
                {"degree" in item && (
                  <h4 className="text-base font-bold">{item.degree}</h4>
                )}
              </>

              <p className="mb-2 text-sm">
                {"company" in item ? item.company : item.school}
              </p>

              <div className="flex items-center gap-2">
                <Calendar size={16.5} />
                <p className="text-sm">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
