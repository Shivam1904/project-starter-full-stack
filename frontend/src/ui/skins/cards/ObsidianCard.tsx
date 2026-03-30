import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const cardSx = sx({
  background: 'linear-gradient(145deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.9))',
  backdropFilter: 'blur(16px)',
  border: '1px solid hsl(var(--foreground) / 0.1)',
  boxShadow: 'inset 0 1px 1px hsl(var(--foreground) / 0.05), 0 10px 30px -10px hsl(0 0% 0% / 0.5)',
  borderRadius: '1.75rem',
  color: 'hsl(var(--card-foreground))',
  position: 'relative',
  transition: 'all 300ms ease',
  '&:hover': { transform: 'translateY(-4px)' },
  /* Rim-light gradient border */
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-1px',
    borderRadius: 'inherit',
    padding: '1px',
    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.4), transparent 40%, transparent 60%, hsl(var(--accent) / 0.3))',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    WebkitMaskComposite: 'destination-out' as unknown as string,
    pointerEvents: 'none',
  },
});

export const ObsidianCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={[cardSx, className].filter(Boolean).join(' ')} {...props} />
  ),
);
ObsidianCard.displayName = 'ObsidianCard';
