import { Label as RadixLabel } from '@radix-ui/react-label';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';
import { baseLabelLayout } from './types';

const glassSx = sx(baseLabelLayout, {
  'input:disabled ~ &, &[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
});

export const GlassLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel ref={ref} className={[glassSx, className].filter(Boolean).join(' ')} {...props} />
));
GlassLabel.displayName = 'GlassLabel';
