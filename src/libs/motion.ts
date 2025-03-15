/** Constant object defining navigation animation variants */
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

/**
 * Creates a slide-in animation variant
 * @param direction - The direction of the slide: 'left', 'right', 'up', or 'down'
 * @param type - The transition type (e.g., 'spring', 'tween')
 * @param delay - Delay before the animation starts (in seconds)
 * @param duration - Duration of the animation (in seconds)
 */

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Creates a container animation with staggered children
 * @param staggerChildren - Time between each child's animation (in seconds)
 * @param delayChildren - Initial delay before children start animating (in seconds)
 */
export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number,
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Creates a text animation variant with a delay
 * @param delay - Delay before the animation starts (in seconds)
 */
export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

/** Object defining a text container animation with a dynamic show function */
export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

/** Constant object defining a second text animation variant */
export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

/**
 * Creates a fade-in animation variant
 * @param direction - The direction of the fade: 'left', 'right', 'up', or 'down'
 * @param type - The transition type (e.g., 'spring', 'tween')
 * @param delay - Delay before the animation starts (in seconds)
 * @param duration - Duration of the animation (in seconds)
 */
export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Creates a planet animation variant
 * @param direction - The direction of the movement: 'left' or 'right'
 */
export const planetVariants = (direction: "left" | "right") => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

/**
 * Creates a zoom-in animation variant
 * @param delay - Delay before the animation starts (in seconds)
 * @param duration - Duration of the animation (in seconds)
 */
export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/** Constant object defining footer animation variants */
export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
