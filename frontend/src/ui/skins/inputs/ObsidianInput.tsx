import * as React from 'react';

import { sx } from '@/ui/skins/sx';
import { baseInputLayout, type SkinInputProps } from './types';

const obsidianSx = sx(baseInputLayout, {
  borderRadius: '0.75rem',
  border: '1px solid hsl(var(--foreground) / 0.1)',
  background: 'hsl(var(--background) / 0.95)',
  paddingInline: '1rem',
  overflow: 'hidden',
  caretColor: 'hsl(var(--primary))',
  boxShadow:
    'inset 0 3px 8px hsla(0, 0%, 0%, 0.6), inset 0 1px 2px hsla(var(--foreground), 0.05)',
  '&::placeholder': {
    color: 'hsl(var(--muted-foreground) / 0.3)',
  },
  '&:focus-visible': {
    boxShadow:
      'inset 0 3px 10px hsla(0, 0%, 0%, 0.8), 0 0 15px hsla(var(--primary), 0.15)',
    borderColor: 'hsla(var(--primary), 0.3)',
  },
  transition: 'all 0.3s ease',
});

export const ObsidianInput = React.forwardRef<HTMLInputElement, SkinInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={[obsidianSx, className].filter(Boolean).join(' ')}
      {...props}
    />
  ),
);
ObsidianInput.displayName = 'ObsidianInput';
