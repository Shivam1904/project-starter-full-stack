import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const itemSx = sx({
  height: '1rem',
  width: '1rem',
  borderRadius: '9999px',
  background: 'hsl(var(--background))',
  color: 'hsl(var(--primary))',
  boxShadow: 'inset 0 2px 4px hsl(var(--foreground) / 0.1)',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center' });

export const BubbleRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item ref={ref} className={[itemSx, className].filter(Boolean).join(' ')} {...props}>
    <RadioGroupPrimitive.Indicator className={indicatorSx}>
      <Circle className="h-2.5 w-2.5 fill-current text-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
BubbleRadioGroupItem.displayName = 'BubbleRadioGroupItem';
