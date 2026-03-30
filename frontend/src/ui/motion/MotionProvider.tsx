import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useReducedMotion } from 'framer-motion';

import { motionLevels, motionSets, type MotionLevel, type MotionSet } from './types';

const MOTION_SET_KEY = 'ui-motion-set';
const MOTION_LEVEL_KEY = 'ui-motion-level';

interface MotionContextValue {
  set: MotionSet;
  level: MotionLevel;
  reduced: boolean;
  setMotionSet: (next: MotionSet) => void;
  setMotionLevel: (next: MotionLevel) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

function getStored<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  const stored = localStorage.getItem(key);
  if (stored && (allowed as readonly string[]).includes(stored)) return stored as T;
  return fallback;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = !!useReducedMotion();

  const [set, setSet] = useState<MotionSet>(() =>
    getStored(MOTION_SET_KEY, motionSets, 'calm'),
  );
  const [level, setLevel] = useState<MotionLevel>(() =>
    getStored(MOTION_LEVEL_KEY, motionLevels, 'normal'),
  );

  useEffect(() => {
    localStorage.setItem(MOTION_SET_KEY, set);
    document.documentElement.setAttribute('data-ui-motion-set', set);
  }, [set]);

  useEffect(() => {
    localStorage.setItem(MOTION_LEVEL_KEY, level);
    document.documentElement.setAttribute('data-ui-motion-level', level);
  }, [level]);

  const value = useMemo(
    () => ({
      set,
      level,
      reduced,
      setMotionSet: setSet,
      setMotionLevel: setLevel,
    }),
    [set, level, reduced],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionPrefs() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotionPrefs must be used within MotionProvider');
  return ctx;
}

