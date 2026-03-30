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
  boxShadow: 'inset 0 2px 4px hsl(var(--foreground) / 0.1)',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
  },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'currentColor' });

export const BubbleCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <CheckboxPrimitive.Indicator className={indicatorSx}>
      <Check className="h-3.5 w-3.5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
BubbleCheckbox.displayName = 'BubbleCheckbox';
