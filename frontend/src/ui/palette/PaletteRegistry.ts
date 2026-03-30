import {
  amber,
  amberDark,
  cyan,
  cyanDark,
  grass,
  grassDark,
  mauve,
  mauveDark,
  violet,
  violetDark,
} from '@radix-ui/colors';

import type { TokenValues, UiPalette } from './types';

function hexToHslTriplet(hex: string): string {
  const sanitized = hex.replace('#', '');
  const fullHex =
    sanitized.length === 3
      ? sanitized
          .split('')
          .map((x) => x + x)
          .join('')
      : sanitized;

  const r = parseInt(fullHex.slice(0, 2), 16) / 255;
  const g = parseInt(fullHex.slice(2, 4), 16) / 255;
  const b = parseInt(fullHex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  }
  h = Math.round((h * 60 + 360) % 360);

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return `${h} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%`;
}

function tokens(
  primary: string,
  primaryForeground: string,
  ring: string,
  accent: string,
  accentForeground: string,
  secondary: string,
  secondaryForeground: string,
): TokenValues {
  return {
    '--primary': hexToHslTriplet(primary),
    '--primary-foreground': hexToHslTriplet(primaryForeground),
    '--ring': hexToHslTriplet(ring),
    '--accent': hexToHslTriplet(accent),
    '--accent-foreground': hexToHslTriplet(accentForeground),
    '--secondary': hexToHslTriplet(secondary),
    '--secondary-foreground': hexToHslTriplet(secondaryForeground),
  };
}

export const paletteRegistry: Record<
  UiPalette,
  { light: TokenValues; dark: TokenValues }
> = {
  ocean: {
    light: tokens(
      cyan.cyan9,
      cyan.cyan1,
      cyan.cyan8,
      cyan.cyan4,
      cyan.cyan12,
      cyan.cyan3,
      cyan.cyan11,
    ),
    dark: tokens(
      cyanDark.cyan9,
      cyanDark.cyan1,
      cyanDark.cyan8,
      cyanDark.cyan4,
      cyanDark.cyan12,
      cyanDark.cyan3,
      cyanDark.cyan11,
    ),
  },
  violet: {
    light: tokens(
      violet.violet9,
      violet.violet1,
      violet.violet8,
      violet.violet4,
      violet.violet12,
      violet.violet3,
      violet.violet11,
    ),
    dark: tokens(
      violetDark.violet9,
      violetDark.violet1,
      violetDark.violet8,
      violetDark.violet4,
      violetDark.violet12,
      violetDark.violet3,
      violetDark.violet11,
    ),
  },
  sunset: {
    light: tokens(
      amber.amber9,
      amber.amber1,
      amber.amber8,
      amber.amber4,
      amber.amber12,
      amber.amber3,
      amber.amber11,
    ),
    dark: tokens(
      amberDark.amber9,
      amberDark.amber1,
      amberDark.amber8,
      amberDark.amber4,
      amberDark.amber12,
      amberDark.amber3,
      amberDark.amber11,
    ),
  },
  forest: {
    light: tokens(
      grass.grass9,
      grass.grass1,
      grass.grass8,
      grass.grass4,
      grass.grass12,
      mauve.mauve3,
      mauve.mauve11,
    ),
    dark: tokens(
      grassDark.grass9,
      grassDark.grass1,
      grassDark.grass8,
      grassDark.grass4,
      grassDark.grass12,
      mauveDark.mauve3,
      mauveDark.mauve11,
    ),
  },
};
