import * as React from 'react';

import { DoodleStar, HandwrittenChip, ScrapbookFrame } from '@/components/ui/comic-scrapbook';
import { cn } from '@/lib/utils';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';

type RadialProgressProps = React.SVGAttributes<SVGSVGElement> & {
  value?: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  variant?: 'default' | 'sketch' | 'orbit' | 'scrapbook';
};

const RadialProgress = React.forwardRef<SVGSVGElement, RadialProgressProps>(
  (
    {
      className,
      value = 0,
      size = 84,
      strokeWidth = 8,
      showLabel = true,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const { skin } = useUiSkin();
    const safeValue = Math.max(0, Math.min(100, value));
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (safeValue / 100) * circumference;
    const brushDash = `${Math.max(6, circumference * 0.11)} ${Math.max(3, circumference * 0.04)}`;
    const isComicSketch =
      skin === 'comic' && (variant === 'sketch' || variant === 'orbit' || variant === 'scrapbook');
    const isComicScrapbook = skin === 'comic' && variant === 'scrapbook';
    const showOrbit = isComicSketch && variant === 'orbit';
    const showScrapbookOrbits = isComicScrapbook || showOrbit;

    const radialNode = (
      <div className={cn("relative inline-flex items-center justify-center", skin === 'glass' && 'overflow-visible')}>
        <svg
          ref={ref}
          width={size}
          height={size}
          className={cn('-rotate-90', skin === 'glass' ? 'overflow-visible' : 'overflow-hidden', className)}
          {...props}
        >
          {isComicSketch ? (
            <>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius + 0.5}
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth={1.25}
                fill="none"
                strokeDasharray="3 4"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - 1}
                stroke="hsl(var(--foreground) / 0.16)"
                strokeWidth={1}
                fill="none"
                strokeDasharray="2 3"
              />
            </>
          ) : null}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            fill="none"
            className={cn(isComicSketch && 'opacity-80', skin === 'glass' && 'glass-radial-track')}
          />
          {skin === 'glass' && (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              className="glass-radial-shine"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ 
                opacity: 0.15,
                transition: 'stroke-dashoffset 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' 
              }}
            />
          )}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn(
              'transition-all',
              isComicSketch &&
                "stroke-[hsl(var(--foreground))] drop-shadow-[0_1px_0_hsl(var(--foreground)/0.25)]",
              skin === 'glass' && 'glass-radial-indicator',
            )}
          />
          {skin === 'glass' && safeValue > 0 && (
            <>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth / 4}
                stroke="white"
                strokeWidth={strokeWidth / 3.5}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${circumference * 0.08} ${circumference}`}
                strokeDashoffset={offset + (circumference * 0.04)}
                style={{ 
                  opacity: 0.6,
                  transition: 'stroke-dashoffset 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                }}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius - strokeWidth / 4}
                stroke="white"
                strokeWidth={strokeWidth / 5.5}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${circumference * 0.02} ${circumference}`}
                strokeDashoffset={offset + (circumference * 0.14)}
                style={{ 
                  opacity: 0.4,
                  transition: 'stroke-dashoffset 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                }}
              />
            </>
          )}
          {isComicSketch ? (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius - 1.1}
              stroke="hsl(var(--foreground) / 0.38)"
              strokeWidth={Math.max(2, strokeWidth - 3)}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={brushDash}
              strokeDashoffset={offset + 9}
              className="transition-all duration-200"
            />
          ) : null}
        </svg>
        {showScrapbookOrbits ? (
          <>
            <span
              aria-hidden="true"
              className="absolute h-2 w-2 rounded-full bg-primary/80"
              style={{
                top: '12%',
                right: '18%',
              }}
            />
            <span
              aria-hidden="true"
              className="absolute h-1.5 w-1.5 rounded-full bg-foreground/75"
              style={{
                bottom: '18%',
                left: '15%',
              }}
            />
          </>
        ) : null}
        {showLabel ? (
          <span
            className={cn(
              'absolute text-sm font-semibold',
              isComicSketch && 'font-marker rotate-[-2deg]',
            )}
          >
            {safeValue}%
          </span>
        ) : null}
      </div>
    );

    if (!isComicScrapbook) return radialNode;

    return (
      <ScrapbookFrame className="inline-flex flex-col items-center gap-2 rounded-none border-2 border-foreground/60 bg-[hsl(var(--background)/0.72)] px-4 py-3 shadow-[4px_4px_0_hsl(var(--foreground)/0.26)]">
        
        {radialNode}
      </ScrapbookFrame>
    );
  },
);
RadialProgress.displayName = 'RadialProgress';

export { RadialProgress };
