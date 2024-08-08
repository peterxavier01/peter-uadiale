export const fadeInRightVariants = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0, x: -200 },
};

export const fadeInLeftVariants = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0, x: 200 },
};

export const fadeInUpVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0, y: 200 },
};

export const fadeInDownVariants = {
  initial: { opacity: 0, y: -200 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -200 },
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0 },
};

export const iconContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.2 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.2, delay: 0.2 } },
};

export const iconItemVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50 },
};

export const cardContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  exit: { opacity: 0 },
};

export const cardItemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 200 },
  },
  exit: { opacity: 0, y: 50 },
};

export const springInLeftVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
  exit: { opacity: 0, x: 50 },
};
