import { services } from "@/lib/data";

interface ServiceCardProps {
  service: (typeof services)[0];
}

export default function ServiceCard({
  service: { icon, title, description },
}: ServiceCardProps) {
  const ServiceIcon = icon;

  return (
    <div className="flex flex-col justify-start gap-4 rounded-lg bg-off-white p-8 text-charcoal">
      <ServiceIcon fill="var(--accent-clr)" className="h-12 w-12" />

      <h4 className="text-xl font-medium">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
