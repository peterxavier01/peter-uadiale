interface DividerProps {
  key: number;
  src: string;
  alt: string;
}

export default function Divider({ key, src, alt }: DividerProps) {
  return (
    <div
      key={key}
      className="divider relative z-[9999] flex h-20 w-20 items-center justify-center rounded-full border-2 border-golden-yellow bg-dark-brown before:bg-golden-yellow"
    >
      <img src={src} alt={alt} className="h-8 w-8" />
    </div>
  );
}
