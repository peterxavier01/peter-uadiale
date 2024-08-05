interface AccessibilityProps {
  fill: string;
  className?: string;
}

export default function Accessibility({
  fill = "var(--accent-clr)",
  className,
}: AccessibilityProps) {
  return (
    <svg
      width="72"
      height="81"
      viewBox="0 0 72 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M36 0.115845C40.4 0.115845 44 3.71584 44 8.11584C44 12.5158 40.4 16.1158 36 16.1158C31.6 16.1158 28 12.5158 28 8.11584C28 3.71584 31.6 0.115845 36 0.115845ZM72 28.1158H48V80.1158H40V56.1158H32V80.1158H24V28.1158H0V20.1158H72V28.1158Z"
        fill={fill}
      />
    </svg>
  );
}
