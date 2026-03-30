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
  backgroundColor: 'hsl(var(--background) / 0.6)',
  border: '1px solid hsl(var(--primary) / 0.15)',
  boxShadow: 'inset 0 1px 1px hsl(var(--background) / 0.8), inset 0 -1.5px 3px hsl(var(--foreground) / 0.12), 0 1px 4px hsl(var(--foreground) / 0.08)',
});

const rangeSx = sx({
  position: 'absolute',
  height: '100%',
  borderRadius: '9999px',
  background: 'linear-gradient(to bottom, hsl(var(--background) / 0.1) 0%, hsl(var(--primary) / 0.75) 15%, hsl(var(--primary)) 50%, hsl(var(--primary) / 0.85) 85%, hsl(var(--primary) / 0.7) 100%)',
  boxShadow: '0 0 12px hsl(var(--primary) / 0.65), 0 0 24px hsl(var(--primary) / 0.35), inset 0 -1px 1px hsl(var(--foreground) / 0.25)',
  filter: 'saturate(1.2) brightness(1.1)',
  transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
});

const thumbSx = sx({
  display: 'block',
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '9999px',
  border: '1px solid hsl(var(--primary) / 0.6)',
  background: 'radial-gradient(circle at 35% 30%, hsl(var(--background)), hsl(var(--primary) / 0.72))',
  boxShadow: '0 0 0 1px hsl(var(--primary) / 0.3), inset 0 -1px 1px hsl(var(--foreground) / 0.28)',
  transition: 'all 200ms ease',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const GlassSlider = React.forwardRef<
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
GlassSlider.displayName = 'GlassSlider';
