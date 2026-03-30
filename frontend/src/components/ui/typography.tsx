import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';

type HeadingLevel = 1 | 2 | 3 | 4;

const headingClassBySkin = {
  glass: {
    1: 'text-3xl font-bold tracking-tight glass-heading-glow',
    2: 'text-2xl font-semibold tracking-tight glass-heading-etched',
    3: 'text-xl font-semibold tracking-tight glass-heading-soft',
    4: 'text-lg font-semibold glass-heading-etched-subtle',
  },
  comic: {
    1: 'inline-flex w-fit items-center rounded-sm border border-foreground/30 bg-background/80 px-2 py-0.5 text-[11px] font-marker font-black uppercase tracking-wide',
    2: 'text-2xl font-black uppercase tracking-wide font-marker',
    3: 'text-xl font-extrabold uppercase tracking-wide font-comic',
    4: 'text-lg font-bold uppercase tracking-[0.08em] font-comic',
  },
  bubble: {
    1: 'text-3xl font-bold tracking-normal',
    2: 'text-2xl font-semibold tracking-normal',
    3: 'text-xl font-semibold tracking-normal',
    4: 'text-lg font-semibold tracking-normal',
  },
  obsidian: {
    1: 'font-obsidian text-3xl font-bold tracking-tight text-foreground obsidian-glow-amber',
    2: 'font-obsidian text-2xl font-semibold tracking-tight text-foreground rim-light-subtle',
    3: 'font-obsidian text-xl font-semibold tracking-tight text-muted-foreground',
    4: 'font-obsidian text-lg font-medium text-muted-foreground/80',
  },
} as const;

export function Heading({
  level = 2,
  className,
  children,
}: {
  level?: HeadingLevel;
  className?: string;
  children: ReactNode;
}) {
  const { skin } = useUiSkin();
  const Tag = `h${level}` as const;
  return <Tag className={cn(headingClassBySkin[skin][level], className)}>{children}</Tag>;
}

export function Text({
  muted,
  className,
  children,
}: {
  muted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn('text-sm', muted ? 'text-muted-foreground' : 'text-foreground', className)}>
      {children}
    </p>
  );
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { skin } = useUiSkin();
  return (
    <span
      className={cn(
        'inline-flex rounded-full bg-primary/10 px-2 py-1 text-xs text-primary',
        skin === 'comic' ? 'font-black uppercase tracking-wide font-marker' : 'font-semibold',
        className,
      )}
    >
      {children}
    </span>
  );
}

