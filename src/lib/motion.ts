export const easings = {
  premium: [0.16, 1, 0.3, 1] as const,
  soft: [0.22, 1, 0.36, 1] as const,
};

export const motionDurations = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.8,
  cinematic: 1.15,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.slow,
      ease: easings.premium,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};