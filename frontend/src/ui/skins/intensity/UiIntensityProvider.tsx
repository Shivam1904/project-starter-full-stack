import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { uiIntensities, type UiIntensity } from './types';

const UI_INTENSITY_KEY = 'ui-intensity';

interface UiIntensityContextValue {
  intensity: UiIntensity;
  setIntensity: (next: UiIntensity) => void;
}

const UiIntensityContext = createContext<UiIntensityContextValue | null>(null);

function getInitialIntensity(): UiIntensity {
  if (typeof window === 'undefined') return 'medium';
  const stored = localStorage.getItem(UI_INTENSITY_KEY);
  if (stored && uiIntensities.includes(stored as UiIntensity)) return stored as UiIntensity;
  return 'medium';
}

export function UiIntensityProvider({ children }: { children: ReactNode }) {
  const [intensity, setIntensity] = useState<UiIntensity>(getInitialIntensity);

  useEffect(() => {
    localStorage.setItem(UI_INTENSITY_KEY, intensity);
    document.documentElement.setAttribute('data-ui-intensity', intensity);
  }, [intensity]);

  const value = useMemo(() => ({ intensity, setIntensity }), [intensity]);
  return <UiIntensityContext.Provider value={value}>{children}</UiIntensityContext.Provider>;
}

export function useUiIntensity() {
  const ctx = useContext(UiIntensityContext);
  if (!ctx) throw new Error('useUiIntensity must be used within UiIntensityProvider');
  return ctx;
}
