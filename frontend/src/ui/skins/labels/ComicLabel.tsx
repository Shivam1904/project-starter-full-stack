import { Label as RadixLabel } from '@radix-ui/react-label';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';
import { baseLabelLayout } from './types';

const comicSx = sx(baseLabelLayout, {
  display: 'inline-flex',
  width: 'fit-content',
  alignItems: 'center',
  borderRadius: '2px',
  border: '1px solid hsl(var(--foreground) / 0.3)',
  background: 'hsl(var(--background) / 0.8)',
  padding: '2px 8px',
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontFamily: "'Permanent Marker', 'Comic Sans MS', cursive",
  'input:disabled ~ &, &[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
});

export const ComicLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ className, ...props }, ref) => (
  <RadixLabel ref={ref} className={[comicSx, className].filter(Boolean).join(' ')} {...props} />
));
ComicLabel.displayName = 'ComicLabel';
