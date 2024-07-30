import Divider from "./divider";

interface Experience {
  id: number;
  company: string;
  period: string;
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
              <Divider key={item.id} src={src} alt="work experience" />
            </div>

            <div className="relative">
              <h4 className="text-paragraph font-bold">
                {"company" in item ? item.company : item.school}
              </h4>
              <p className="text-xxs">{item.period}</p>
              {"degree" in item && <p className="text-xxs">{item.degree}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
