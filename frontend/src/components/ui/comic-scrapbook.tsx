import * as React from 'react';

import { cn } from '@/lib/utils';

export function ScrapbookFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('comic-scrapbook-frame relative overflow-visible px-3 pb-3 pt-5', className)}>
      <span className="comic-tape comic-tape-left" aria-hidden="true" />
      <span className="comic-tape comic-tape-right" aria-hidden="true" />
      <div className="flex w-full items-center justify-between">
          <DoodleStar className="rotate-[12deg]" />
        </div>
      {children}
    </div>
  );
}

export function HandwrittenChip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-foreground/30 bg-background/80 px-2 py-0.5 text-[11px] uppercase tracking-wide font-marker',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DoodleStar({ className }: { className?: string }) {
  return <span className={cn('comic-doodle-star', className)} aria-hidden="true" />;
}
