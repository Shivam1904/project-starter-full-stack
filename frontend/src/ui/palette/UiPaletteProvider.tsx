import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { paletteRegistry } from './PaletteRegistry';
import { uiPalettes, type UiPalette } from './types';

const UI_PALETTE_KEY = 'ui-palette';

interface UiPaletteContextValue {
  palette: UiPalette;
  setPalette: (next: UiPalette) => void;
}

const UiPaletteContext = createContext<UiPaletteContextValue | null>(null);

function getInitialPalette(): UiPalette {
  if (typeof window === 'undefined') return 'ocean';
  const stored = localStorage.getItem(UI_PALETTE_KEY);
  if (stored && uiPalettes.includes(stored as UiPalette)) return stored as UiPalette;
  return 'ocean';
}

function applyPalette(palette: UiPalette) {
  const root = document.documentElement;
  const mode = root.classList.contains('dark') ? 'dark' : 'light';
  const tokens = paletteRegistry[palette][mode];

  (Object.entries(tokens) as Array<[keyof typeof tokens, string]>).forEach(
    ([token, value]) => {
      root.style.setProperty(token, value);
    },
  );
}

export function UiPaletteProvider({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useState<UiPalette>(getInitialPalette);

  useEffect(() => {
    localStorage.setItem(UI_PALETTE_KEY, palette);
    document.documentElement.setAttribute('data-ui-palette', palette);
    applyPalette(palette);
  }, [palette]);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => applyPalette(palette));

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [palette]);

  const value = useMemo(() => ({ palette, setPalette }), [palette]);
  return (
    <UiPaletteContext.Provider value={value}>{children}</UiPaletteContext.Provider>
  );
}

export function useUiPalette() {
  const ctx = useContext(UiPaletteContext);
  if (!ctx) throw new Error('useUiPalette must be used within UiPaletteProvider');
  return ctx;
}
