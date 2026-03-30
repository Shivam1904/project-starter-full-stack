import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.25rem',
  width: '1.25rem',
  flexShrink: 0,
  borderRadius: 0,
  background: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  boxShadow: '2px 2px 0 hsl(var(--foreground))',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'currentColor' });

/** Hand-drawn X indicator (comic-hand-x equivalent via sx) */
const handXSx = sx({
  display: 'inline-block',
  position: 'relative',
  height: '1.5rem',
  width: '1.5rem',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '2px',
    height: '100%',
    background: 'hsl(var(--foreground))',
    borderRadius: '999px',
    transformOrigin: 'center',
  },
  '&::before': { transform: 'translate(-50%, -50%) rotate(42deg)' },
  '&::after': { transform: 'translate(-50%, -50%) rotate(-36deg)' },
});

export const ComicCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const tilt = React.useMemo(() => {
    const tilts = ['-18deg', '-7deg', '11deg'];
    return tilts[Math.floor(Math.random() * tilts.length)];
  }, []);

  return (
    <CheckboxPrimitive.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
      <CheckboxPrimitive.Indicator className={indicatorSx}>
        <span className={handXSx} style={{ transform: `rotate(${tilt})` }} aria-hidden="true" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
ComicCheckbox.displayName = 'ComicCheckbox';
