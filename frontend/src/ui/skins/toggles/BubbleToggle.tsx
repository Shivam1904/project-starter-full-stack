import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const bubbleSx = sx({
  display: 'inline-flex',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '9999px',
  border: '1px solid hsl(var(--input))',
  padding: '0 1rem',
  fontSize: '0.875rem',
  fontWeight: 600,
  transition: 'all 200ms ease',
  cursor: 'pointer',
  background: 'transparent',
  '&:hover': { background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' },
  '&[data-state=on]': { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' },
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const BubbleToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={[bubbleSx, className].filter(Boolean).join(' ')} {...props} />
));
BubbleToggle.displayName = 'BubbleToggle';
