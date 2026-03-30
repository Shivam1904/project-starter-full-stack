import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { uiSkins, type UiSkin } from './types';

const UI_SKIN_KEY = 'ui-skin';

interface UiSkinContextValue {
  skin: UiSkin;
  setSkin: (next: UiSkin) => void;
}

const UiSkinContext = createContext<UiSkinContextValue | null>(null);

function getInitialSkin(): UiSkin {
  if (typeof window === 'undefined') return 'glass';
  const stored = localStorage.getItem(UI_SKIN_KEY);
  if (stored && uiSkins.includes(stored as UiSkin)) return stored as UiSkin;
  return 'glass';
}

export function UiSkinProvider({ children }: { children: ReactNode }) {
  const [skin, setSkin] = useState<UiSkin>(getInitialSkin);

  useEffect(() => {
    localStorage.setItem(UI_SKIN_KEY, skin);
    document.documentElement.setAttribute('data-ui-skin', skin);
  }, [skin]);

  const value = useMemo(() => ({ skin, setSkin }), [skin]);
  return <UiSkinContext.Provider value={value}>{children}</UiSkinContext.Provider>;
}

export function useUiSkin() {
  const ctx = useContext(UiSkinContext);
  if (!ctx) throw new Error('useUiSkin must be used within UiSkinProvider');
  return ctx;
}
