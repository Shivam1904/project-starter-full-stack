import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({ position: 'relative', display: 'flex', width: '100%', touchAction: 'none', userSelect: 'none', alignItems: 'center' });

const trackSx = sx({
  position: 'relative',
  height: '0.5rem',
  width: '100%',
  flexGrow: 1,
  borderRadius: '9999px',
  background: 'hsl(var(--muted) / 0.35)',
  boxShadow: 'inset 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 -1px 2px hsla(var(--foreground), 0.05)',
});

const rangeSx = sx({
  position: 'absolute',
  height: '100%',
  borderRadius: '9999px',
  background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)',
  backgroundSize: '200% 100%',
  animation: 'obsidian-liquid-flow 3s linear infinite',
  boxShadow: '0 0 15px hsl(var(--primary) / 0.5)',
});

const thumbSx = sx({
  display: 'block',
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  background: 'hsl(var(--primary))',
  boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.6), 0 0 40px -15px hsl(var(--primary) / 0.3)',
  filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
  border: 0,
  cursor: 'grab',
  transition: 'all 300ms ease',
  animation: 'obsidian-morph 10s infinite ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '5%',
    left: '10%',
    right: '10%',
    height: '40%',
    background: 'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.3) 0%, transparent 100%)',
    borderRadius: '100px',
    pointerEvents: 'none',
    zIndex: 10,
  },
  '&:focus-visible': { outline: '2px solid hsl(var(--primary))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
  '&:hover': { transform: 'scale(1.1)' },
  '&:active': { cursor: 'grabbing' },
});

export const ObsidianSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <SliderPrimitive.Track className={trackSx}>
      <SliderPrimitive.Range className={rangeSx} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={thumbSx} />
  </SliderPrimitive.Root>
));
ObsidianSlider.displayName = 'ObsidianSlider';
