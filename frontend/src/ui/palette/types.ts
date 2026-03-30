export const uiPalettes = ['ocean', 'violet', 'sunset', 'forest'] as const;

export type UiPalette = (typeof uiPalettes)[number];

export type TokenKey =
  | '--primary'
  | '--primary-foreground'
  | '--ring'
  | '--accent'
  | '--accent-foreground'
  | '--secondary'
  | '--secondary-foreground';

export type TokenValues = Record<TokenKey, string>;
