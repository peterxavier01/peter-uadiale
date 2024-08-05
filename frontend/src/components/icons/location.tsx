interface LocationProps {
  fill: string;
  className?: string;
}

export default function Location({
  fill = "#ffffff",
  className,
}: LocationProps) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.2 16.636C8.2 8.0008 15.7216 1 25 1C34.2784 1 41.8 8.0008 41.8 16.636C41.8 25.204 36.4384 35.2 28.072 38.776C27.1003 39.1883 26.0555 39.4008 25 39.4008C23.9444 39.4008 22.8997 39.1883 21.928 38.776C13.5616 35.2 8.2 25.2016 8.2 16.636Z"
        stroke="black"
        strokeWidth="1.75"
        fill={fill}
      />
      <path
        d="M29.8 17.8C29.8 19.073 29.2943 20.2939 28.3941 21.1941C27.4939 22.0943 26.273 22.6 25 22.6C23.727 22.6 22.5061 22.0943 21.6059 21.1941C20.7057 20.2939 20.2 19.073 20.2 17.8C20.2 16.527 20.7057 15.3061 21.6059 14.4059C22.5061 13.5057 23.727 13 25 13C26.273 13 27.4939 13.5057 28.3941 14.4059C29.2943 15.3061 29.8 16.527 29.8 17.8Z"
        stroke="black"
        strokeWidth="1.75"
      />
      <path
        d="M46.504 33.4C48.1024 34.8448 49 36.4768 49 38.2C49 44.164 38.2552 49 25 49C11.7448 49 1 44.164 1 38.2C1 36.4768 1.8976 34.8448 3.496 33.4"
        stroke="black"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
