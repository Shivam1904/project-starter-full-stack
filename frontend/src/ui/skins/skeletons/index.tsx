import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const glassSx = sx({ borderRadius: '0.75rem', background: 'hsl(var(--muted) / 0.8)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' });
const comicSx = sx({ borderRadius: '0.75rem', border: '2px solid hsl(var(--foreground))', background: 'hsl(var(--muted))', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' });
const bubbleSx = sx({ borderRadius: '1rem', background: 'hsl(var(--muted))', boxShadow: 'inset 0 -2px 0 hsl(var(--foreground) / 0.08)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' });
const obsidianSx = sx({ borderRadius: 0, background: 'hsl(0 0% 100% / 0.05)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' });

export const GlassSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={[glassSx, className].filter(Boolean).join(' ')} {...props} />
);
export const ComicSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={[comicSx, className].filter(Boolean).join(' ')} {...props} />
);
export const BubbleSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={[bubbleSx, className].filter(Boolean).join(' ')} {...props} />
);
export const ObsidianSkeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={[obsidianSx, className].filter(Boolean).join(' ')} {...props} />
);
