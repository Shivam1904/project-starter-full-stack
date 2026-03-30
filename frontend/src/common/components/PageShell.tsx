import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { MotionSurface } from '@/ui/motion/MotionSurface';
import { useUiIntensity } from '@/ui/skins/intensity/UiIntensityProvider';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiIntensity } from '@/ui/skins/intensity/types';
import type { UiSkin } from '@/ui/skins/types';

const decorBySkinAndIntensity: Record<UiSkin, Record<UiIntensity, string>> = {
  glass: {
    subtle:
      'bg-[radial-gradient(80rem_80rem_at_5%_0%,hsl(var(--primary)/0.35),transparent_70%),radial-gradient(70rem_70rem_at_95%_15%,hsl(var(--ring)/0.30),transparent_70%),radial-gradient(65rem_65rem_at_55%_50%,hsl(var(--accent)/0.25),transparent_70%),radial-gradient(70rem_70rem_at_15%_90%,hsl(var(--ring)/0.28),transparent_70%)]',
    medium:
      'bg-[radial-gradient(80rem_80rem_at_5%_0%,hsl(var(--primary)/0.65),transparent_70%),radial-gradient(70rem_70rem_at_95%_15%,hsl(var(--ring)/0.55),transparent_70%),radial-gradient(65rem_65rem_at_55%_50%,hsl(var(--accent)/0.48),transparent_70%),radial-gradient(70rem_70rem_at_15%_90%,hsl(var(--ring)/0.45),transparent_70%)]',
    vivid:
      'bg-[radial-gradient(80rem_80rem_at_5%_0%,hsl(var(--primary)/0.85),transparent_70%),radial-gradient(70rem_70rem_at_95%_15%,hsl(var(--ring)/0.75),transparent_70%),radial-gradient(65rem_65rem_at_55%_50%,hsl(var(--accent)/0.65),transparent_70%),radial-gradient(70rem_70rem_at_15%_90%,hsl(var(--ring)/0.60),transparent_70%)]',
  },
  comic: {
    subtle:
      'bg-[radial-gradient(50rem_50rem_at_15%_15%,hsl(var(--primary)/0.12),transparent_55%),radial-gradient(40rem_40rem_at_85%_25%,hsl(var(--accent)/0.12),transparent_55%)]',
    medium:
      'bg-[radial-gradient(50rem_50rem_at_15%_15%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(40rem_40rem_at_85%_25%,hsl(var(--accent)/0.18),transparent_55%)]',
    vivid:
      'bg-[radial-gradient(50rem_50rem_at_15%_15%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(40rem_40rem_at_85%_25%,hsl(var(--accent)/0.18),transparent_55%)]',
  },
  bubble: {
    subtle:
      'bg-[radial-gradient(55rem_55rem_at_25%_15%,hsl(var(--primary)/0.08),transparent_55%),radial-gradient(45rem_45rem_at_75%_30%,hsl(var(--accent)/0.08),transparent_55%)]',
    medium:
      'bg-[radial-gradient(55rem_55rem_at_25%_15%,hsl(var(--primary)/0.12),transparent_55%),radial-gradient(45rem_45rem_at_75%_30%,hsl(var(--accent)/0.12),transparent_55%)]',
    vivid:
      'bg-[radial-gradient(55rem_55rem_at_25%_15%,hsl(var(--primary)/0.12),transparent_55%),radial-gradient(45rem_45rem_at_75%_30%,hsl(var(--accent)/0.12),transparent_55%)]',
  },
  obsidian: {
    subtle:
      'bg-[radial-gradient(60rem_60rem_at_10%_10%,hsl(var(--secondary)/0.1),transparent_70%),radial-gradient(50rem_50rem_at_90%_90%,hsl(var(--accent)/0.05),transparent_70%)]',
    medium:
      'bg-[radial-gradient(60rem_60rem_at_10%_10%,hsl(var(--secondary)/0.15),transparent_70%),radial-gradient(50rem_50rem_at_90%_90%,hsl(var(--accent)/0.1),transparent_70%)]',
    vivid:
      'bg-[radial-gradient(60rem_60rem_at_10%_10%,hsl(var(--secondary)/0.2),transparent_70%),radial-gradient(50rem_50rem_at_90%_90%,hsl(var(--accent)/0.15),transparent_70%)]',
  },
};

import { BackgroundExotic } from '@/ui/background/BackgroundExotic';

export function PageShell({
  children,
  className,
  contentClassName,
  maxWidthClassName = 'max-w-5xl',
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  maxWidthClassName?: string;
}) {
  return (
    <div className={cn('relative min-h-[calc(100vh-4rem)] transition-colors duration-500', className)}>
      <BackgroundExotic />
      
      <MotionSurface
        className={cn(
          'relative mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 z-10',
          maxWidthClassName,
          contentClassName,
        )}
      >
        {children}
      </MotionSurface>
    </div>
  );
}

