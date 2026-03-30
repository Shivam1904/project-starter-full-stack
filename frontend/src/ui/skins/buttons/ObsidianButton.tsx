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
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        boxShadow:
          '0 0 20px -5px hsl(var(--primary) / 0.6), 0 0 40px -15px hsl(var(--primary) / 0.3)',
        filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
        '&:hover': {
          filter: 'brightness(1.1) drop-shadow(0 0 12px hsl(var(--primary) / 0.5))',
          transform: 'scale(1.05)',
        },
        '&:active': { transform: 'scale(0.9)' },
      });

    case 'destructive':
      return sx({
        background: 'hsl(var(--destructive))',
        color: 'hsl(var(--destructive-foreground))',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        '&:hover': {
          filter: 'brightness(1.1)',
          transform: 'scale(1.05)',
        },
        '&:active': { transform: 'scale(0.9)' },
      });

    case 'outline':
      return sx({
        background: 'hsl(var(--card) / 0.4)',
        color: 'hsl(var(--foreground))',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        backdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid hsl(var(--foreground) / 0.1)',
        boxShadow:
          'inset 0 1px 1px hsl(var(--foreground) / 0.1), 0 10px 30px -5px hsl(0 0% 0% / 0.6)',
        '&:hover': {
          background: 'hsl(0 0% 100% / 0.1)',
          transform: 'scale(1.05)',
        },
        '&:active': { transform: 'scale(0.9)' },
      });

    case 'secondary':
      return sx({
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--secondary-foreground))',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        '&:hover': {
          filter: 'brightness(1.1)',
          transform: 'scale(1.05)',
        },
        '&:active': { transform: 'scale(0.9)' },
      });

    case 'ghost':
      return sx({
        background: 'transparent',
        color: 'hsl(var(--foreground))',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        '&:hover': {
          background: 'hsl(0 0% 100% / 0.05)',
          color: 'hsl(var(--primary))',
          transform: 'scale(1.05)',
        },
        '&:active': { transform: 'scale(0.9)' },
      });

    case 'link':
      return sx({
        background: 'transparent',
        color: 'hsl(var(--primary))',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        textUnderlineOffset: '4px',
        '&:hover': { textDecoration: 'underline' },
      });
  }
};

/* ── blob animation className (stays in CSS for keyframes) ──────── */
const blobSx = sx({
  borderRadius: '33% 30% 20% 30% / 20% 20% 20% 30%',
  position: 'relative',
  overflow: 'visible',
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  animation: 'obsidian-morph 10s infinite ease-in-out',
  '&:hover': {
    animationPlayState: 'paused',
  },
  /* Glass-shine pseudo-element */
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '5%',
    left: '25%',
    right: '20%',
    height: '40%',
    background:
      'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.3) 0%, transparent 100%)',
    borderRadius: '100px',
    overflow: 'hidden',
    pointerEvents: 'none',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    animation: 'obsidian-morph 10s infinite ease-in-out',
    '&:hover': {
      animationPlayState: 'paused',
    },
    zIndex: 10,
  },
});

/* ── component ──────────────────────────────────────────────────── */

export const ObsidianButton = React.forwardRef<HTMLButtonElement, SkinButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, className, style, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Ghost and link don't get the blob shape
    const useBlob = variant !== 'ghost' && variant !== 'link';

    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={[
          sx(baseLayout, sizeStyles[size], {
            transition: 'all 0.5s ease',
            '&:focus-visible': {
              outline: '2px solid hsl(var(--primary))',
              outlineOffset: '2px',
            },
            '&:disabled': {
              pointerEvents: 'none',
              opacity: 0.5,
            },
          }),
          useBlob ? blobSx : undefined,
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
ObsidianButton.displayName = 'ObsidianButton';
