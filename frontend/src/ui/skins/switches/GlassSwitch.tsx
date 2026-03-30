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
  border: '1px solid hsl(var(--primary) / 0.4)',
  backgroundColor: 'hsl(var(--background) / 0.6)',
  boxShadow:
    'inset 0 1px 1px hsl(var(--background) / 0.8), inset 0 -1.5px 3px hsl(var(--foreground) / 0.12), 0 1px 4px hsl(var(--foreground) / 0.08)',
  transition: 'all 200ms ease',
  '&:focus-visible': {
    outline: '2px solid hsl(var(--ring))',
    outlineOffset: '2px',
  },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': { borderColor: 'hsl(var(--primary) / 0.6)' },
});

const thumbSx = sx({
  display: 'block',
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '9999px',
  background: 'radial-gradient(circle at 35% 30%, hsl(var(--background)), hsl(var(--primary) / 0.72))',
  boxShadow: '0 0 0 1px hsl(var(--primary) / 0.3), inset 0 -1px 1px hsl(var(--foreground) / 0.28)',
  transition: 'transform 200ms ease, box-shadow 220ms ease, filter 220ms ease',
  pointerEvents: 'none',
  '&[data-state=checked]': {
    transform: 'translateX(1.25rem)',
    filter: 'saturate(1.25) brightness(1.05)',
    boxShadow: '0 0 0 1px hsl(var(--primary) / 0.42), 0 0 12px hsl(var(--primary) / 0.65), 0 0 24px hsl(var(--primary) / 0.42), inset 0 -1px 1px hsl(var(--foreground) / 0.2)',
  },
  '&[data-state=unchecked]': { transform: 'translateX(0)' },
});

export const GlassSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <SwitchPrimitives.Thumb className={thumbSx} />
  </SwitchPrimitives.Root>
));
GlassSwitch.displayName = 'GlassSwitch';
