import { m } from "framer-motion";

export default function AnimatedOverlay() {
  return (
    <m.div
      initial={{
        x: "0%",
      }}
      animate={{
        x: "100%",
      }}
      exit={{
        x: "-100%",
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[9999999] h-dvh w-dvw bg-golden-yellow"
    />
  );
}
