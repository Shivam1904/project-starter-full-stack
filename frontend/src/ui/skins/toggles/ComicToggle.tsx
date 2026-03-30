import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const comicSx = sx({
  display: 'inline-flex',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 0,
  border: '2px solid hsl(var(--foreground))',
  padding: '0 0.75rem',
  fontSize: '0.875rem',
  fontWeight: 900,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  transition: 'all 200ms ease',
  cursor: 'pointer',
  background: 'transparent',
  '&[data-state=on]': { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' },
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const ComicToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={[comicSx, className].filter(Boolean).join(' ')} {...props} />
));
ComicToggle.displayName = 'ComicToggle';
