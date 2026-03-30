import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const glassSx = sx({
  display: 'inline-flex',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.75rem',
  border: '1px solid hsl(var(--input))',
  padding: '0 0.75rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'all 200ms ease',
  cursor: 'pointer',
  background: 'transparent',
  '&:hover': { background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' },
  '&[data-state=on]': { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' },
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const GlassToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={[glassSx, className].filter(Boolean).join(' ')} {...props} />
));
GlassToggle.displayName = 'GlassToggle';
