export const containerVariants: any = {
  open: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  closed: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
    pointerEvents: 'none',
  },
}

export const containerInnerVariants: any = {
  open: {
    x: 0,
    backgroundColor: 'var(--cl-secondary)',
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    x: '100%',
    backgroundColor: 'var(--cl-tertiary)',
    transition: {
      duration: 0.2,
    },
  },
}

export const listVariants: any = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      ease: 'easeInOut',
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const listItemVariants: any = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: 20,
  },
}
