import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const itemSx = sx({
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '9999px',
  background: 'hsl(var(--background) / 0.6)',
  color: 'hsl(var(--primary))',
  position: 'relative',
  boxShadow:
    'inset 0 1px 1px hsl(var(--background) / 0.8), inset 0 -2px 4px hsl(var(--foreground) / 0.15), 0 2px 8px hsl(var(--foreground) / 0.22)',
  transition: 'all 200ms ease',
  cursor: 'pointer',
  /* LED specular highlight */
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '2px',
    borderRadius: '9999px',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 30% 28%, hsl(var(--background) / 0.95) 0%, hsl(var(--background) / 0.7) 20%, transparent 42%)',
    opacity: 0.9,
  },
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
});

const indicatorSx = sx({ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' });

const dotSx = sx({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '11px',
  height: '11px',
  borderRadius: '9999px',
  background: 'radial-gradient(circle at 35% 30%, hsl(var(--background)), hsl(var(--primary) / 0.72))',
  boxShadow: '0 0 0 1px hsl(var(--primary) / 0.3), inset 0 -1px 1px hsl(var(--foreground) / 0.28)',
  transform: 'scale(0.85)',
  transition: 'transform 180ms ease, box-shadow 220ms ease, filter 220ms ease',
  filter: 'saturate(0.7) brightness(0.9)',
});

/* Checked glow applied at parent level */
const itemCheckedSx = sx({
  '&[data-state=checked] span': {
    transform: 'scale(1)',
    filter: 'saturate(1.25) brightness(1.05)',
    boxShadow: '0 0 0 1px hsl(var(--primary) / 0.42), 0 0 10px hsl(var(--primary) / 0.65), 0 0 22px hsl(var(--primary) / 0.42), inset 0 -1px 1px hsl(var(--foreground) / 0.2)',
  },
});

export const GlassRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item ref={ref} className={[itemSx, itemCheckedSx, className].filter(Boolean).join(' ')} {...props}>
    <RadioGroupPrimitive.Indicator className={indicatorSx}>
      <span className={dotSx} aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" focusable="false" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="hsl(var(--primary) / 0.85)" />
          <circle cx="9.5" cy="8.5" r="3.5" fill="hsl(var(--background) / 0.78)" />
        </svg>
      </span>
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
GlassRadioGroupItem.displayName = 'GlassRadioGroupItem';
