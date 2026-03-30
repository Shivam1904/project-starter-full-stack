import type * as React from 'react';

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface SkinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

/** Shared size values (px / height) for all skins */
export const sizeStyles: Record<ButtonSize, Record<string, unknown>> = {
  default: { height: '2.5rem', paddingInline: '1.5rem', paddingBlock: '0.5rem' },
  sm: { height: '2.25rem', paddingInline: '1rem' },
  lg: { height: '3rem', paddingInline: '2.5rem' },
  icon: { height: '2.5rem', width: '2.5rem', padding: 0 },
};

/** Base layout styles shared across every skin button */
export const baseLayout: Record<string, unknown> = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  fontSize: '0.875rem',
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  textDecoration: 'none',
  transition: 'all 200ms ease',
};
