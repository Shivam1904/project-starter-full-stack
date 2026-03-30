import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const rootSx = sx({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.25rem',
  width: '1.25rem',
  flexShrink: 0,
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  background: 'hsl(var(--background) / 0.95)',
  color: 'hsl(var(--primary))',
  boxShadow: 'inset 0 3px 8px hsla(0, 0%, 0%, 0.6), inset 0 1px 2px hsla(var(--foreground), 0.05)',
  cursor: 'pointer',
  transition: 'all 300ms ease',
  animation: 'obsidian-morph 10s infinite ease-in-out',
  '&:focus-visible': { outline: '2px solid hsl(var(--primary))', outlineOffset: '2px' },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&[data-state=checked]': {
    background: 'hsl(var(--primary) / 0.2)',
    boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.6), 0 0 40px -15px hsl(var(--primary) / 0.3), inset 0 3px 8px hsla(0, 0%, 0%, 0.6)',
    filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
  },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'currentColor' });

export const ObsidianCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={[rootSx, className].filter(Boolean).join(' ')} {...props}>
    <CheckboxPrimitive.Indicator className={indicatorSx}>
      <Check className="h-3.5 w-3.5" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 4px hsl(var(--primary)))' }} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
ObsidianCheckbox.displayName = 'ObsidianCheckbox';
