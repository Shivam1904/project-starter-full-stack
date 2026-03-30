import { createContext, useContext, useState, type ReactNode } from 'react';

export type DrawerVariant = 'left' | 'right' | 'bottom-window' | 'minimized-icon';

interface DrawerContextValue {
  isOpen: boolean;
  variant: DrawerVariant;
  content: ReactNode | null;
  openDrawer: (content: ReactNode, variant?: DrawerVariant) => void;
  closeDrawer: () => void;
  setVariant: (variant: DrawerVariant) => void;
}

const DrawerContext = createContext<DrawerContextValue | null>(null);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<DrawerVariant>('right');
  const [content, setContent] = useState<ReactNode | null>(null);

  const openDrawer = (newContent: ReactNode, newVariant?: DrawerVariant) => {
    setContent(newContent);
    if (newVariant) setVariant(newVariant);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        variant,
        content,
        openDrawer,
        closeDrawer,
        setVariant,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error('useDrawer must be used within DrawerProvider');
  return ctx;
}
