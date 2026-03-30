import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({
  display: 'inline-flex',
  height: '1.5rem',
  width: '2.75rem',
  flexShrink: 0,
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '9999px',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--muted))',
  transition: 'all 200ms ease',
  '&:focus-visible': {
    outline: '2px solid hsl(var(--ring))',
    outlineOffset: '2px',
  },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': { background: 'hsl(var(--primary))' },
});

const thumbSx = sx({
  display: 'block',
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '9999px',
  background: 'hsl(var(--background))',
  boxShadow: '0 2px 6px hsl(var(--foreground) / 0.2)',
  pointerEvents: 'none',
  transition: 'transform 200ms ease',
  '&[data-state=checked]': { transform: 'translateX(1.25rem)' },
  '&[data-state=unchecked]': { transform: 'translateX(0)' },
});

export const BubbleSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <SwitchPrimitives.Thumb className={thumbSx} />
  </SwitchPrimitives.Root>
));
BubbleSwitch.displayName = 'BubbleSwitch';
