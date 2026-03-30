import { Label as RadixLabel } from '@radix-ui/react-label';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';
import { baseLabelLayout } from './types';

const obsidianSx = sx(baseLabelLayout, {
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: 'hsl(var(--muted-foreground) / 0.8)',
  'input:disabled ~ &, &[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
});

export const ObsidianLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel ref={ref} className={[obsidianSx, className].filter(Boolean).join(' ')} {...props} />
));
ObsidianLabel.displayName = 'ObsidianLabel';
