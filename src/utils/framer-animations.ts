// Vairants for transition between pages
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const pageTransition = {
  variants: pageVariants,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  transition: { duration: 0.2 },
}

// Variants for hero section
export const heroVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.35 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: 0.1,
    },
  },
}
