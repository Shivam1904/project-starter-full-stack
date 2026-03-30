import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const cardSx = sx({
  borderRadius: 0,
  border: 0,
  color: 'hsl(var(--card-foreground))',
  transformOrigin: 'center',
  boxShadow: '0 4px 12px hsl(var(--foreground) / 0.14)',
  transition: 'transform 200ms ease, box-shadow 200ms ease',
  '&:hover': { boxShadow: '0 8px 18px hsl(var(--foreground) / 0.16)' },
  /* sticky-note color cycling handled below by nth-child in a wrapper */
});

/** The 5 comic note colors */
const noteColors = [
  'hsl(52 96% 82%)',   // yellow
  'hsl(178 72% 82%)',  // teal
  'hsl(336 100% 88%)', // pink
  'hsl(35 98% 82%)',   // orange
  'hsl(80 72% 83%)',   // green
];

export const ComicCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => {
    // Pick a random note color per instance (stable across re-renders)
    const color = React.useMemo(() => noteColors[Math.floor(Math.random() * noteColors.length)], []);
    const tilt = React.useMemo(() => (Math.random() - 0.5) * 3, []); // -1.5 to 1.5 degrees

    return (
      <div
        ref={ref}
        className={[cardSx, className].filter(Boolean).join(' ')}
        style={{ backgroundColor: color, transform: `rotate(${tilt}deg)`, ...style }}
        {...props}
      />
    );
  },
);
ComicCard.displayName = 'ComicCard';
