import type { Transition, Variants } from 'framer-motion';

import type { MotionLevel, MotionSet } from './types';

function ms(n: number) {
  return n / 1000;
}

function transitionFor(set: MotionSet, level: MotionLevel): Transition {
  if (set === 'none' || level === 'off') return { duration: 0 };

  const base = level === 'subtle' ? 0.16 : 0.24;

  if (set === 'snappy') return { duration: base, ease: [0, 0, 0.2, 1] };
  if (set === 'playful') return { type: 'spring', stiffness: 420, damping: 30 };
  return { duration: base, ease: [0.2, 0, 0, 1] }; // calm
}

export function surfaceVariants(set: MotionSet, level: MotionLevel): Variants {
  const t = transitionFor(set, level);
  const y = level === 'subtle' ? 6 : 10;
  const s = level === 'subtle' ? 0.99 : 0.98;

  return {
    initial: { opacity: 0, y, scale: set === 'playful' ? 0.98 : s },
    animate: { opacity: 1, y: 0, scale: 1, transition: t },
    exit: { opacity: 0, y: y / 2, scale: 0.99, transition: { duration: ms(120) } },
  };
}

export function popVariants(set: MotionSet, level: MotionLevel): Variants {
  const t = transitionFor(set, level);
  return {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: t },
    exit: { opacity: 0, scale: 0.99, transition: { duration: ms(120) } },
  };
}

