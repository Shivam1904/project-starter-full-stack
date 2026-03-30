import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const cardSx = sx({
  borderRadius: '1rem',
  border: '1px solid hsl(var(--input))',
  background: 'var(--ui-glass-bg, hsl(var(--background) / 0.28))',
  backdropFilter: 'blur(var(--ui-glass-blur, 16px)) saturate(var(--ui-glass-saturate, 130%))',
  boxShadow: 'inset 0 1px 0 var(--ui-glass-highlight, hsl(var(--background) / 0.12))',
  color: 'hsl(var(--card-foreground))',
  transition: 'transform 200ms ease',
  position: 'relative',
  /* hoverable glow */
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-4px',
    borderRadius: 'inherit',
    zIndex: -1,
    background: 'hsl(var(--foreground) / 0.06)',
    filter: 'blur(22px)',
    opacity: 0,
    transform: 'translate(2px, 4px)',
    transition: 'opacity 200ms ease, transform 200ms ease',
    pointerEvents: 'none',
  },
  '&:hover::after': { opacity: 1, transform: 'translate(6px, 14px)' },
  '&:hover': { transform: 'translateY(-4px)' },
});

export const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={[cardSx, className].filter(Boolean).join(' ')} {...props} />
  ),
);
GlassCard.displayName = 'GlassCard';
