import * as React from 'react';

import { sx } from '@/ui/skins/sx';
import { baseInputLayout, type SkinInputProps } from './types';

const bubbleSx = sx(baseInputLayout, {
  borderRadius: '9999px',
  border: '1px solid hsl(var(--input))',
  background: 'hsl(var(--background))',
  paddingInline: '1rem',
  boxShadow: 'var(--ui-shadow-soft-inset)',
  '&:focus-visible': {
    outline: '2px solid hsl(var(--ring))',
    outlineOffset: '2px',
  },
});

export const BubbleInput = React.forwardRef<HTMLInputElement, SkinInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={[bubbleSx, className].filter(Boolean).join(' ')}
      {...props}
    />
  ),
);
BubbleInput.displayName = 'BubbleInput';
