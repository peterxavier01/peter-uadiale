interface QuoteProps {
  fill: string;
  className?: string;
}

export default function Quote({ fill = "#000000", className }: QuoteProps) {
  return (
    <svg
      width="80"
      height="63"
      viewBox="0 0 80 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34.1444 4.57893L31.2416 0.115845C11.1577 13.6158 0 30.0185 0 43.5185C0 56.5721 9.59743 62.7098 17.7417 62.7098C28.0068 62.7098 35.2584 54.005 35.2584 44.8574C35.2584 37.1595 30.349 30.5755 23.7651 28.1191C21.8691 27.4478 20.0839 26.8908 20.0839 23.656C20.0839 19.5285 23.0974 13.3944 34.1444 4.57893ZM78.4397 4.57893L75.5369 0.115845C55.6744 13.6158 44.2953 30.0185 44.2953 43.5185C44.2953 56.5721 54.1141 62.7098 62.2583 62.7098C72.6341 62.7098 80 54.005 80 44.8574C80 37.1595 74.9799 30.5755 68.171 28.1191C66.2751 27.4478 64.6006 26.8908 64.6006 23.656C64.6006 19.5285 67.7247 13.3909 78.4361 4.57537L78.4397 4.57893Z"
        fill={fill}
      />
    </svg>
  );
}