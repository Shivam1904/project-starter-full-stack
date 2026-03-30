import * as React from 'react';

import { sx } from '@/ui/skins/sx';
import { baseInputLayout, type SkinInputProps } from './types';

const comicSx = sx(baseInputLayout, {
  borderRadius: '0.75rem',
  border: '2px solid hsl(var(--foreground))',
  background: 'hsl(var(--background))',
  fontWeight: 500,
  '&:focus-visible': {
    outline: '2px solid hsl(var(--ring))',
    outlineOffset: '2px',
  },
});

export const ComicInput = React.forwardRef<HTMLInputElement, SkinInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={[comicSx, className].filter(Boolean).join(' ')}
      {...props}
    />
  ),
);
ComicInput.displayName = 'ComicInput';
