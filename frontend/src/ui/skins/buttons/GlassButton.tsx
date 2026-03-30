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
        borderRadius: '0.75rem',
        boxShadow: 'var(--ui-shadow-rest)',
        '&:hover': {
          background: 'hsl(var(--primary) / 0.9)',
          boxShadow: 'var(--ui-shadow-hover)',
        },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'destructive':
      return sx({
        background: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
        borderRadius: '0.75rem',
        boxShadow: 'var(--ui-shadow-rest)',
        '&:hover': {
          background: 'hsl(var(--destructive) / 0.9)',
          boxShadow: 'var(--ui-shadow-hover)',
        },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'outline':
      return sx({
        background: 'var(--ui-glass-bg, hsl(var(--background) / 0.28))',
        color: 'inherit',
        borderRadius: '0.75rem',
        border: '1px solid hsl(var(--input))',
        backdropFilter: 'blur(var(--ui-glass-blur, 16px)) saturate(var(--ui-glass-saturate, 130%))',
        boxShadow: 'inset 0 1px 0 var(--ui-glass-highlight, hsl(var(--background) / 0.12))',
        '&:hover': {
          background: 'hsl(var(--accent) / 0.7)',
          color: 'hsl(var(--accent-foreground))',
        },
      });

    case 'secondary':
      return sx({
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--secondary-foreground))',
        borderRadius: '0.75rem',
        boxShadow: 'var(--ui-shadow-rest)',
        '&:hover': {
          background: 'hsl(var(--secondary) / 0.8)',
          boxShadow: 'var(--ui-shadow-hover)',
        },
        '&:active': { transform: 'scale(0.98)' },
      });

    case 'ghost':
      return sx({
        background: 'transparent',
        color: 'inherit',
        borderRadius: '0.75rem',
        '&:hover': {
          background: 'hsl(var(--accent) / 0.65)',
          color: 'hsl(var(--accent-foreground))',
        },
      });

    case 'link':
      return sx({
        background: 'transparent',
        color: 'hsl(var(--primary))',
        textUnderlineOffset: '4px',
        borderRadius: '0.75rem',
        '&:hover': { textDecoration: 'underline' },
      });
  }
};

/* ── component ──────────────────────────────────────────────────── */

export const GlassButton = React.forwardRef<HTMLButtonElement, SkinButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, className, style, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={[
          sx(baseLayout, sizeStyles[size], {
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
GlassButton.displayName = 'GlassButton';
