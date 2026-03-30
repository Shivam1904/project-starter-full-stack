import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({ position: 'relative', display: 'flex', width: '100%', touchAction: 'none', userSelect: 'none', alignItems: 'center' });

const trackSx = sx({
  position: 'relative',
  height: '0.5rem',
  width: '100%',
  flexGrow: 1,
  overflow: 'hidden',
  borderRadius: '9999px',
  background: 'hsl(var(--muted))',
});

const rangeSx = sx({
  position: 'absolute',
  height: '100%',
  background: 'hsl(var(--primary))',
});

const thumbSx = sx({
  display: 'block',
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '9999px',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--background))',
  boxShadow: '0 4px 10px hsl(var(--foreground) / 0.2)',
  transition: 'all 200ms ease',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const BubbleSlider = React.forwardRef<
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
BubbleSlider.displayName = 'BubbleSlider';
