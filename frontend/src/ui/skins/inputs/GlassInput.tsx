import * as React from 'react';

import { sx } from '@/ui/skins/sx';
import { baseInputLayout, type SkinInputProps } from './types';

const glassSx = sx(baseInputLayout, {
  borderRadius: '0.75rem',
  border: '1px solid hsl(var(--input))',
  background: 'var(--ui-glass-bg, hsl(var(--background) / 0.28))',
  backdropFilter: 'blur(var(--ui-glass-blur, 16px)) saturate(var(--ui-glass-saturate, 130%))',
  boxShadow: 'inset 0 1px 0 var(--ui-glass-highlight, hsl(var(--background) / 0.12))',
  '&:focus-visible': {
    outline: '2px solid hsl(var(--ring))',
    outlineOffset: '2px',
  },
});

export const GlassInput = React.forwardRef<HTMLInputElement, SkinInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={[glassSx, className].filter(Boolean).join(' ')}
      {...props}
    />
  ),
);
GlassInput.displayName = 'GlassInput';
