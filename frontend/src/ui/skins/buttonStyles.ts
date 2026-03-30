import { cva } from 'class-variance-authority';

import type { UiSkin } from './types';

const sharedSizes = {
  default: 'h-10 px-6 py-2',
  sm: 'h-9 px-4',
  lg: 'h-12 px-10',
  icon: 'h-10 w-10',
};

export const buttonVariantsBySkin = {
  glass: cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-[transform,box-shadow,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]',
    {
      variants: {
        variant: {
          default:
            'bg-primary text-primary-foreground ui-shadow-rest hover:bg-primary/90 motion-safe:hover:ui-shadow-hover',
          destructive:
            'bg-destructive text-destructive-foreground ui-shadow-rest hover:bg-destructive/90 motion-safe:hover:ui-shadow-hover',
          outline:
            'border border-input glass-panel glass-highlight hover:bg-accent/70 hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground ui-shadow-rest hover:bg-secondary/80 motion-safe:hover:ui-shadow-hover',
          ghost: 'hover:bg-accent/65 hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: sharedSizes,
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  ),
  comic: cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default:
            'comic-btn-3d border-2 border-foreground bg-primary text-primary-foreground',
          destructive:
            'comic-btn-3d border-2 border-foreground bg-destructive text-destructive-foreground',
          outline:
            'comic-btn-3d border-2 border-foreground bg-background text-foreground',
          secondary:
            'comic-btn-3d border-2 border-foreground bg-secondary text-secondary-foreground',
          ghost:
            'border-2 border-transparent bg-transparent hover:bg-accent transition-colors duration-150',
          link: 'text-primary underline underline-offset-4',
        },
        size: sharedSizes,
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  ),
  bubble: cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-[transform,box-shadow,background-color,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]',
    {
      variants: {
        variant: {
          default:
            'bg-primary text-primary-foreground ui-shadow-soft-inset hover:brightness-105',
          destructive:
            'bg-destructive text-destructive-foreground ui-shadow-soft-inset hover:brightness-105',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground ui-shadow-soft-inset hover:brightness-105',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: sharedSizes,
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  ),
  obsidian: cva(
    'inline-flex items-center justify-center whitespace-nowrap obsidian-blob obsidian-glass-shine font-obsidian text-sm font-bold tracking-tight ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-90 motion-safe:hover:scale-105',
    {
      variants: {
        variant: {
          default:
            'bg-primary text-primary-foreground obsidian-glow-amber hover:brightness-110',
          destructive:
            'bg-destructive text-destructive-foreground hover:brightness-110',
          outline:
            'obsidian-glass-panel obsidian-rim-light border-0 text-foreground hover:bg-white/10',
          secondary:
            'bg-secondary text-secondary-foreground hover:brightness-110',
          ghost: 'text-foreground hover:bg-white/5 hover:text-primary',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: sharedSizes,
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  ),
} as const;

export function getButtonVariantsForSkin(skin: UiSkin) {
  return buttonVariantsBySkin[skin];
}
