import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const itemSx = sx({
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  background: 'hsl(var(--background) / 0.95)',
  color: 'hsl(var(--primary))',
  boxShadow: 'inset 0 3px 8px hsla(0, 0%, 0%, 0.6), inset 0 1px 2px hsla(var(--foreground), 0.05)',
  transition: 'all 300ms ease',
  animation: 'obsidian-morph 10s infinite ease-in-out',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--primary) / 0.5)', outlineOffset: '2px' },
  '&[data-state=checked]': { transform: 'scale(1.1)' },
});

const indicatorSx = sx({ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', transform: 'scale(0.9)' });

const dotSx = sx({
  width: '45%',
  height: '45%',
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  background: 'hsl(var(--primary))',
  boxShadow: '0 0 12px hsl(var(--primary)), inset 0 0 4px white',
  animation: 'obsidian-pulse-glow 2s infinite ease-in-out',
});

export const ObsidianRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item ref={ref} className={[itemSx, className].filter(Boolean).join(' ')} {...props}>
    <RadioGroupPrimitive.Indicator className={indicatorSx}>
      <span className={dotSx} aria-hidden="true" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
ObsidianRadioGroupItem.displayName = 'ObsidianRadioGroupItem';
