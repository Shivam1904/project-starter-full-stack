import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { DoodleStar, HandwrittenChip, ScrapbookFrame } from '@/components/ui/comic-scrapbook';
import { cn } from '@/lib/utils';
import { progressClassBySkin } from '@/ui/skins/componentStyles';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';

type ProgressVariant = 'default' | 'milestone' | 'doodle' | 'scrapbook';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number;
    variant?: ProgressVariant;
    milestones?: number[];
    showValueLabel?: boolean;
  }
>(({ className, value, variant = 'default', milestones = [25, 50, 75], showValueLabel, ...props }, ref) => {
  const { skin } = useUiSkin();
  const styles = progressClassBySkin[skin];
  const safeValue = Math.max(0, Math.min(100, value ?? 0));
  const isComicDoodle = skin === 'comic' && (variant === 'doodle' || variant === 'scrapbook');
  const isComicScrapbook = skin === 'comic' && variant === 'scrapbook';
  const isMilestone = variant === 'milestone' || isComicDoodle;
  const indicatorStyle = (skin === 'glass' || skin === 'obsidian')
    ? { width: `${safeValue}%` }
    : { transform: `translateX(-${100 - safeValue}%)` };

  const progressNode = (
    <div className="space-y-1.5">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          styles.root,
          isComicDoodle &&
            'comic-progress-track h-4 border-2 border-foreground',
          className,
        )}
        {...props}
      >
          <ProgressPrimitive.Indicator
            className={cn(
              styles.indicator,
              skin === 'glass' && 'glass-glowing-indicator',
              skin === 'obsidian' && 'obsidian-progress-liquid',
              skin !== 'glass' && skin !== 'obsidian' && 'transition-all',
              isComicDoodle &&
                "comic-progress-fill relative bg-primary/80 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(8deg,transparent_0px,transparent_5px,hsl(var(--foreground)/0.16)_5px,hsl(var(--foreground)/0.16)_6px)] before:content-['']",
            )}
          style={indicatorStyle}
        />

        {isMilestone
          ? milestones
              .filter((point) => point > 0 && point < 100)
              .map((point) => (
                <span
                  key={point}
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute top-0 h-full w-px bg-foreground/30',
                    isComicDoodle && 'w-0.5 bg-foreground/45 rotate-[2deg]',
                  )}
                  style={{ left: `${point}%` }}
                />
              ))
          : null}
      </ProgressPrimitive.Root>

      {showValueLabel ? (
        <p
          className={cn(
            'text-xs text-muted-foreground',
            isComicDoodle && 'font-marker text-foreground/80 rotate-[-1deg]',
          )}
        >
          {safeValue}% complete
        </p>
      ) : null}
    </div>
  );

  if (!isComicScrapbook) return progressNode;

  return (
    <ScrapbookFrame className="space-y-2 rounded-none border-2 border-foreground/60 bg-[hsl(var(--background)/0.75)] shadow-[3px_4px_0_hsl(var(--foreground)/0.3)]">
      {progressNode}
    </ScrapbookFrame>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
