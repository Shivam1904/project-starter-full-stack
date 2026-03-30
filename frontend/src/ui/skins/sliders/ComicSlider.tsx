import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({ position: 'relative', display: 'flex', width: '100%', touchAction: 'none', userSelect: 'none', alignItems: 'center' });

const trackSx = sx({
  position: 'relative',
  height: '0.625rem',
  width: '100%',
  flexGrow: 1,
  overflow: 'hidden',
  borderRadius: 0,
  border: '1px solid hsl(var(--foreground))',
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
  borderRadius: 0,
  border: '2px solid hsl(var(--foreground))',
  background: 'hsl(var(--background))',
  boxShadow: '2px 2px 0 hsl(var(--foreground))',
  transition: 'all 200ms ease',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const ComicSlider = React.forwardRef<
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
ComicSlider.displayName = 'ComicSlider';
