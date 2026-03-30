import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { PageShell } from './PageShell';

export function AppShell({
  sidebar,
  children,
  className,
}: {
  sidebar?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <PageShell maxWidthClassName="max-w-7xl" contentClassName="py-8">
      <div className={cn('flex min-h-[calc(100vh-6rem)] w-full flex-col gap-6 lg:flex-row', className)}>
        {sidebar}
        <main className="flex-1  bg-card/10 p-4 shadow-sm backdrop-blur sm:p-6">
          {children}
        </main>
      </div>
    </PageShell>
  );
}

