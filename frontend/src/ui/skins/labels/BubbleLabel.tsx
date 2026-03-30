import { Label as RadixLabel } from '@radix-ui/react-label';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';
import { baseLabelLayout } from './types';

const bubbleSx = sx(baseLabelLayout, {
  fontWeight: 600,
  'input:disabled ~ &, &[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
});

export const BubbleLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel ref={ref} className={[bubbleSx, className].filter(Boolean).join(' ')} {...props} />
));
BubbleLabel.displayName = 'BubbleLabel';
