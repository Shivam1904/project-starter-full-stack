import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { sx } from '@/ui/skins/sx';
import { baseLayout, sizeStyles, type ButtonVariant, type SkinButtonProps } from './types';

/* ── variant styles ─────────────────────────────────────────────── */

const variantSx = (variant: ButtonVariant) => {
  switch (variant) {
    case 'default':
      return sx({
        background: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        borderRadius: '9999px',
        boxShadow: 'var(--ui-shadow-soft-inset)',
        '&:hover': { filter: 'brightness(1.05)' },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'destructive':
      return sx({
        background: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
        borderRadius: '9999px',
        boxShadow: 'var(--ui-shadow-soft-inset)',
        '&:hover': { filter: 'brightness(1.05)' },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'outline':
      return sx({
        background: 'hsl(var(--background))',
        color: 'inherit',
        borderRadius: '9999px',
        border: '1px solid hsl(var(--input))',
        '&:hover': {
          background: 'hsl(var(--accent))',
          color: 'hsl(var(--accent-foreground))',
        },
      });

    case 'secondary':
      return sx({
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--secondary-foreground))',
        borderRadius: '9999px',
        boxShadow: 'var(--ui-shadow-soft-inset)',
        '&:hover': { filter: 'brightness(1.05)' },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'ghost':
      return sx({
        background: 'transparent',
        color: 'inherit',
        borderRadius: '9999px',
        '&:hover': {
          background: 'hsl(var(--accent))',
          color: 'hsl(var(--accent-foreground))',
        },
      });

    case 'link':
      return sx({
        background: 'transparent',
        color: 'hsl(var(--primary))',
        borderRadius: '9999px',
        textUnderlineOffset: '4px',
        '&:hover': { textDecoration: 'underline' },
      });
  }
};

/* ── component ──────────────────────────────────────────────────── */

export const BubbleButton = React.forwardRef<HTMLButtonElement, SkinButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, className, style, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={[
          sx(baseLayout, sizeStyles[size], {
            transition: 'transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease, filter 200ms ease',
            '&:focus-visible': {
              outline: '2px solid hsl(var(--ring))',
              outlineOffset: '2px',
            },
            '&:disabled': {
              pointerEvents: 'none',
              opacity: 0.5,
            },
          }),
          variantSx(variant),
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
        {...props}
      />
    );
  },
);
BubbleButton.displayName = 'BubbleButton';
