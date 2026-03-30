import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({
  display: 'inline-flex',
  height: '1.5rem',
  width: '3rem',
  flexShrink: 0,
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '9999px',
  border: '1px solid hsl(0 0% 100% / 0.05)',
  background: 'hsl(var(--muted) / 0.35)',
  boxShadow:
    'inset 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 -1px 2px hsla(var(--foreground), 0.05)',
  transition: 'all 200ms ease',
  '&:focus-visible': {
    outline: '2px solid hsl(var(--primary))',
    outlineOffset: '2px',
  },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': { borderColor: 'hsl(var(--primary) / 0.2)' },
});

const thumbSx = sx({
  display: 'block',
  height: '1.375rem',
  width: '1.375rem',
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  pointerEvents: 'none',
  transition: 'all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
  '&[data-state=checked]': {
    transform: 'translateX(1.5rem)',
    background: 'hsl(var(--primary))',
    boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.6), 0 0 40px -15px hsl(var(--primary) / 0.3)',
    filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
  },
  '&[data-state=unchecked]': {
    transform: 'translateX(0)',
    background: 'hsl(0 0% 100% / 0.2)',
  },
});

export const ObsidianSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <SwitchPrimitives.Thumb className={thumbSx} />
  </SwitchPrimitives.Root>
));
ObsidianSwitch.displayName = 'ObsidianSwitch';
