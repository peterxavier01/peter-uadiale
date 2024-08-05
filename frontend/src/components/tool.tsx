interface ToolProps {
  name: string;
}

export default function Tool({ name }: ToolProps) {
  return (
    <div className="bg-neutral-900 p-2 text-sm font-medium transition hover:bg-off-white hover:text-charcoal">
      {name}
    </div>
  );
}
