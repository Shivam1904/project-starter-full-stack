import { css } from '@emotion/css';

type SxValue =
  | Record<string, unknown>
  | string
  | number
  | boolean
  | null
  | undefined;

/**
 * Lightweight `sx` helper — converts a style object (with pseudo-class support)
 * into a generated className via Emotion.
 *
 * Usage:
 *   className={sx({ color: 'red', '&:hover': { color: 'blue' } })}
 */
export function sx(...styles: SxValue[]): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return css(styles as any);
}
