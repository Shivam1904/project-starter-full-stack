import type * as React from 'react';

export interface SkinInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Base layout styles shared across every skin input */
export const baseInputLayout: Record<string, unknown> = {
  display: 'flex',
  height: '2.5rem',
  width: '100%',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'all 200ms ease',
  '&::placeholder': {
    color: 'hsl(var(--muted-foreground))',
  },
  '&::file-selector-button': {
    border: 0,
    background: 'transparent',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
};
