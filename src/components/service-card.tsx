import { services } from "@/lib/data";

interface ServiceCardProps {
  service: (typeof services)[0];
}

export default function ServiceCard({
  service: { icon, title, description },
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-lg bg-off-white p-8 text-charcoal">
      <img src={icon} alt={title} className="h-12 w-12" />

      <h4 className="text-xl font-medium">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
