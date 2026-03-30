import type * as React from 'react';

export interface SkinLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const baseLabelLayout: Record<string, unknown> = {
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1,
  cursor: 'default',
};
