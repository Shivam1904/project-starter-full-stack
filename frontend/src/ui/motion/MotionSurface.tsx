import { motion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useMotionPrefs } from './MotionProvider';
import { surfaceVariants } from './variants';

export function MotionSurface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  const { set, level, reduced } = useMotionPrefs();

  if (reduced || set === 'none' || level === 'off') {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={surfaceVariants(set, level)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

