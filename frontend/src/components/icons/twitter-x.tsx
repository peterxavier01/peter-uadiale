interface TwitterXProps {
  fill: string;
  className?: string;
}

export default function TwitterX({
  fill = "#ffffff",
  className,
}: TwitterXProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 31.4186L19.486 13.1748L19.5073 13.1919L30.7906 0.115845H27.02L17.8284 10.7588L10.5291 0.115845H0.640284L12.3233 17.1488L12.3219 17.1474L0 31.4186H3.77056L13.9895 19.5776L22.1112 31.4186H32ZM9.03513 2.96155L26.5931 28.5729H23.6052L6.0329 2.96155H9.03513Z"
        fill={fill}
      />
    </svg>
  );
}
