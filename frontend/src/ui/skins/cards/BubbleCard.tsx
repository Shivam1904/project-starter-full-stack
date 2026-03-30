import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const cardSx = sx({
  borderRadius: '1.5rem',
  border: '1px solid hsl(var(--border) / 0.7)',
  background: 'hsl(var(--card))',
  color: 'hsl(var(--card-foreground))',
  boxShadow: 'var(--ui-shadow-rest)',
  transition: 'box-shadow 200ms ease, transform 200ms ease',
  '&:hover': {
    boxShadow: 'var(--ui-shadow-hover)',
    transform: 'translateY(-2px)',
  },
});

export const BubbleCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={[cardSx, className].filter(Boolean).join(' ')} {...props} />
  ),
);
BubbleCard.displayName = 'BubbleCard';
