import React from 'react';
import { cn } from '@/lib/utils';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import { useUiIntensity } from '@/ui/skins/intensity/UiIntensityProvider';
import { useTheme } from '@/theme/ThemeProvider';

export const BackgroundExotic: React.FC = () => {
  const { skin } = useUiSkin();
  const { intensity } = useUiIntensity();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 1. Base Mesh Gradient (Universal but themed) */}
      <div 
        className={cn(
          "absolute inset-0 ui-mesh-gradient transition-opacity duration-1000",
          skin === 'obsidian' && isDark && "bg-[radial-gradient(at_0%_0%,hsl(270_60%_35%/0.25),transparent_70%),radial-gradient(at_100%_0%,hsl(180_80%_35%/0.2),transparent_70%)]",
          skin === 'obsidian' && !isDark && "bg-[radial-gradient(at_0%_0%,hsl(270_60%_75%),transparent_60%),radial-gradient(at_100%_0%,hsl(180_80%_75%),transparent_60%),radial-gradient(at_50%_50%,hsl(310_60%_88%),transparent_70%)]",
          skin === 'glass' && "bg-[radial-gradient(at_10%_10%,hsl(var(--primary)/0.25),transparent_60%),radial-gradient(at_90%_90%,hsl(var(--ring)/0.25),transparent_60%)]",
          intensity === 'vivid' ? 'opacity-100' : intensity === 'subtle' ? 'opacity-30' : 'opacity-60'
        )}
      />

      {/* 2. Exotic Layers */}
      
      {/* Obsidian: Nebula Clouds */}
      {skin === 'obsidian' && (
        <>
          <div className={cn(
            "absolute -top-[20%] -left-[10%] w-[70%] h-[70%] ui-nebula-cloud rounded-full",
            isDark ? "bg-purple-900/20" : "bg-purple-200/40"
          )} />
          <div className={cn(
            "absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] ui-nebula-cloud rounded-full",
            isDark ? "bg-cyan-900/15" : "bg-cyan-200/30"
          )} />
        </>
      )}

      {/* Comic: Halftone Pattern */}
      {skin === 'comic' && (
        <div className="absolute inset-0 ui-halftone-pattern opacity-10" />
      )}

      {/* Glass: Aurora Floating Layers */}
      {skin === 'glass' && (
        <>
          <div className="absolute inset-0 ui-aurora-1 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_60%)] opacity-30 blur-3xl" />
          <div className="absolute inset-0 ui-aurora-2 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--accent)/0.15),transparent_60%)] opacity-20 blur-3xl" />
        </>
      )}

      {/* 3. Global Noise Texture */}
      <div className="absolute inset-0 ui-noise opacity-[0.04] mix-blend-overlay" />

      <svg className="absolute w-0 h-0">
        <filter id="obsidian-warp-2">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="obsidian-fisheye">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="1" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
};
