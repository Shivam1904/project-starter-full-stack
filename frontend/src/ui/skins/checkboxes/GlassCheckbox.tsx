import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1rem',
  width: '1rem',
  flexShrink: 0,
  borderRadius: '4px',
  background: 'hsl(var(--background))',
  color: 'hsl(var(--primary))',
  boxShadow:
    'inset 0 1px 1px hsl(var(--background) / 0.8), inset 0 -1.5px 3px hsl(var(--foreground) / 0.12), 0 1px 4px hsl(var(--foreground) / 0.08)',
  border: '1px solid hsl(var(--primary) / 0.15)',
  transition: 'all 200ms ease',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': {
    background: 'radial-gradient(circle at 35% 30%, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
    borderColor: 'hsl(var(--primary) / 0.7)',
    boxShadow: '0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3), inset 0 1px 1px hsl(var(--background) / 0.2)',
  },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'currentColor' });

export const GlassCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <CheckboxPrimitive.Indicator className={indicatorSx}>
      <Check className="h-3.5 w-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
GlassCheckbox.displayName = 'GlassCheckbox';
