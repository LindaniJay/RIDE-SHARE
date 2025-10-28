import { Variants } from 'framer-motion';

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

// Container variants for staggered animations
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item variants for staggered children
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Glass card hover variants
export const glassCardVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Button variants
export const buttonVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 16px 0 rgba(0, 166, 81, 0.2)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 24px 0 rgba(0, 166, 81, 0.4)',
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Modal variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
    },
  },
};

// Backdrop variants
export const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Navigation variants
export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Mobile menu variants
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Loading spinner variants
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Progress bar variants
export const progressVariants: Variants = {
  initial: {
    width: '0%',
  },
  animate: {
    width: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Toast notification variants
export const toastVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 300,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

// Hero section variants
export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Dashboard card variants
export const dashboardCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Search results variants
export const searchResultsVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Search result item variants
export const searchResultItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Form field variants
export const formFieldVariants: Variants = {
  focus: {
    scale: 1.02,
    boxShadow: '0 0 0 3px rgba(0, 166, 81, 0.2)',
    transition: {
      duration: 0.2,
    },
  },
  blur: {
    scale: 1,
    boxShadow: '0 0 0 0px rgba(0, 166, 81, 0)',
    transition: {
      duration: 0.2,
    },
  },
};

// Floating action button variants
export const fabVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
};

// Tab variants
export const tabVariants: Variants = {
  inactive: {
    opacity: 0.7,
    scale: 1,
  },
  active: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

// Accordion variants
export const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Slide variants for carousels
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Parallax variants
export const parallaxVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -50,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Shimmer loading variants
export const shimmerVariants: Variants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: '100%',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Confetti variants
export const confettiVariants: Variants = {
  initial: {
    y: -100,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    y: 1000,
    rotate: 360,
    opacity: 0,
    transition: {
      duration: 3,
      ease: 'easeOut',
    },
  },
};

// Success checkmark variants
export const checkmarkVariants: Variants = {
  initial: {
    scale: 0,
    rotate: -45,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
};

// Error shake variants
export const shakeVariants: Variants = {
  shake: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

// Pulse variants for loading states
export const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Bounce variants for attention-grabbing elements
export const bounceVariants: Variants = {
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Fade in from direction variants
export const fadeInDirectionVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

// Scale in variants
export const scaleInVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
};

// Rotate variants
export const rotateVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
    },
  },
};

// Slide in from edge variants
export const slideInVariants = {
  left: {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  },
  right: {
    hidden: { x: '100%' },
    visible: { x: 0 },
  },
  top: {
    hidden: { y: '-100%' },
    visible: { y: 0 },
  },
  bottom: {
    hidden: { y: '100%' },
    visible: { y: 0 },
  },
};
