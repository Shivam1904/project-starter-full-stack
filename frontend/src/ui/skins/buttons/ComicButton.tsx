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
        borderRadius: '1rem',
        border: '2px solid hsl(var(--foreground))',
        boxShadow: '4px 4px 0 hsl(var(--foreground))',
        '&:hover': {
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0 hsl(var(--foreground))',
        },
        '&:active': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 0 0 hsl(var(--foreground))',
        },
      });

    case 'destructive':
      return sx({
        background: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
        borderRadius: '1rem',
        border: '2px solid hsl(var(--foreground))',
        boxShadow: '4px 4px 0 hsl(var(--foreground))',
        '&:hover': {
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0 hsl(var(--foreground))',
        },
        '&:active': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 0 0 hsl(var(--foreground))',
        },
      });

    case 'outline':
      return sx({
        background: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        borderRadius: '1rem',
        border: '2px solid hsl(var(--foreground))',
        boxShadow: '4px 4px 0 hsl(var(--foreground))',
        '&:hover': {
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0 hsl(var(--foreground))',
        },
        '&:active': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 0 0 hsl(var(--foreground))',
        },
      });

    case 'secondary':
      return sx({
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--secondary-foreground))',
        borderRadius: '1rem',
        border: '2px solid hsl(var(--foreground))',
        boxShadow: '4px 4px 0 hsl(var(--foreground))',
        '&:hover': {
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0 hsl(var(--foreground))',
        },
        '&:active': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0 0 0 hsl(var(--foreground))',
        },
      });

    case 'ghost':
      return sx({
        background: 'transparent',
        color: 'inherit',
        borderRadius: '1rem',
        border: '2px solid transparent',
        transition: 'background-color 150ms ease, border-color 150ms ease',
        '&:hover': {
          background: 'hsl(var(--accent))',
        },
      });

    case 'link':
      return sx({
        background: 'transparent',
        color: 'hsl(var(--primary))',
        borderRadius: '1rem',
        border: 'none',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      });
  }
};

/* ── component ──────────────────────────────────────────────────── */

export const ComicButton = React.forwardRef<HTMLButtonElement, SkinButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, className, style, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={[
          sx(baseLayout, sizeStyles[size], {
            position: 'relative',
            transition: 'transform 150ms ease-out, box-shadow 150ms ease-out',
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
ComicButton.displayName = 'ComicButton';
