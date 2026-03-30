import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const itemSx = sx({
  height: '1.25rem',
  width: '1.25rem',
  borderRadius: 0,
  background: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  boxShadow: '2px 2px 0 hsl(var(--foreground))',
  cursor: 'pointer',
  '&:focus-visible': { outline: '2px solid hsl(var(--ring))', outlineOffset: '2px' },
});

const indicatorSx = sx({ display: 'flex', alignItems: 'center', justifyContent: 'center' });

const handXSx = sx({
  display: 'inline-block',
  position: 'relative',
  height: '1.5rem',
  width: '1.5rem',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '2px',
    height: '100%',
    background: 'hsl(var(--foreground))',
    borderRadius: '999px',
    transformOrigin: 'center',
  },
  '&::before': { transform: 'translate(-50%, -50%) rotate(42deg)' },
  '&::after': { transform: 'translate(-50%, -50%) rotate(-36deg)' },
});

export const ComicRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  const tilt = React.useMemo(() => {
    const tilts = ['-18deg', '-7deg', '11deg'];
    return tilts[Math.floor(Math.random() * tilts.length)];
  }, []);

  return (
    <RadioGroupPrimitive.Item ref={ref} className={[itemSx, className].filter(Boolean).join(' ')} {...props}>
      <RadioGroupPrimitive.Indicator className={indicatorSx}>
        <span className={handXSx} style={{ transform: `rotate(${tilt})` }} aria-hidden="true" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
ComicRadioGroupItem.displayName = 'ComicRadioGroupItem';
