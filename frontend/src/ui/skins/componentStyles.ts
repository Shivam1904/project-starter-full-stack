import type { UiSkin } from './types';

type SkinClassMap = Record<UiSkin, string>;

export const cardClassBySkin: SkinClassMap = {
  glass:
    'rounded-2xl border glass-panel glass-highlight glass-card-hoverable text-card-foreground transition-[transform] duration-200 motion-safe:hover:-translate-y-1',
  comic:
    'comic-note rounded-none border-0 bg-card text-card-foreground shadow-[0_4px_12px_hsl(var(--foreground)/0.14)] transition-[transform,box-shadow] duration-200 motion-safe:hover:shadow-[0_8px_18px_hsl(var(--foreground)/0.16)]',
  bubble:
    'rounded-[1.5rem] border border-border/70 bg-card text-card-foreground ui-shadow-rest transition-[box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:ui-shadow-hover',
  obsidian:
    'obsidian-card obsidian-rim-light text-card-foreground ring-offset-background transition-all duration-300 motion-safe:hover:-translate-y-1',
};

export const inputClassBySkin: SkinClassMap = {
  glass:
    'flex h-10 w-full rounded-xl border border-input glass-panel glass-highlight px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  comic:
    'flex h-10 w-full rounded-xl border-2 border-foreground bg-background px-3 py-2 text-sm font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  bubble:
    'flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground ui-shadow-soft-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  obsidian:
    'flex h-10 w-full obsidian-recessed obsidian-input-focus obsidian-rim-light caret-primary px-4 py-2 text-sm placeholder:text-muted-foreground/30 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden',
};

export const labelClassBySkin: SkinClassMap = {
  glass: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  comic:
    'inline-flex w-fit items-center rounded-sm border border-foreground/30 bg-background/80 px-2 py-0.5 text-[11px] uppercase tracking-wide font-marker leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  bubble:
    'text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  obsidian:
    'text-xs font-bold uppercase tracking-widest text-muted-foreground/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
};

export const skeletonClassBySkin: SkinClassMap = {
  glass: 'animate-pulse rounded-xl bg-muted/80',
  comic: 'animate-pulse rounded-xl border-2 border-foreground bg-muted',
  bubble:
    'animate-pulse rounded-2xl bg-muted shadow-[inset_0_-2px_0_hsl(var(--foreground)/0.08)]',
  obsidian:
    'animate-pulse rounded-none bg-white/5 obsidian-rim-light',
};


export const toasterClassBySkin: SkinClassMap = {
  glass:
    'group toast group-[.toaster]:rounded-xl group-[.toaster]:glass-panel-strong group-[.toaster]:glass-highlight group-[.toaster]:text-foreground',
  comic:
    'group toast group-[.toaster]:rounded-2xl group-[.toaster]:border-2 group-[.toaster]:border-foreground group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-[4px_4px_0px_hsl(var(--foreground))]',
  bubble:
    'group toast group-[.toaster]:rounded-2xl group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-[0_12px_24px_hsl(var(--foreground)/0.12)]',
  obsidian:
    'group toast group-[.toaster]:rounded-none group-[.toaster]:obsidian-card group-[.toaster]:obsidian-rim-light group-[.toaster]:text-foreground',
};

type InteractiveSkinClassMap = Record<
  UiSkin,
  { root: string; indicator?: string; thumb?: string; track?: string }
>;

export const radioClassBySkin: InteractiveSkinClassMap = {
  glass: {
    root: 'glass-radio-led group relative h-5 w-5 rounded-full bg-background/60 text-primary shadow-[inset_0_1px_1px_hsl(var(--background)/0.8),inset_0_-2px_4px_hsl(var(--foreground)/0.15),0_2px_8px_hsl(var(--foreground)/0.22)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    indicator: 'flex h-full w-full items-center justify-center',
  },
  comic: {
    root: 'h-5 w-5 rounded-none bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-[2px_2px_0_hsl(var(--foreground))]',
    indicator: 'flex items-center justify-center',
  },
  bubble: {
    root: 'h-4 w-4 rounded-full bg-background text-primary shadow-[inset_0_2px_4px_hsl(var(--foreground)/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    indicator: 'flex items-center justify-center',
  },
  obsidian: {
    root: 'obsidian-blob h-5 w-5 obsidian-recessed obsidian-rim-light text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 data-[state=checked]:scale-110',
    indicator: 'flex h-full w-full items-center justify-center scale-90',
  },
};

export const checkboxClassBySkin: InteractiveSkinClassMap = {
  glass: {
    root: 'peer glass-recessed-track glass-checkbox-led h-4 w-4 shrink-0 rounded bg-background text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground',
    indicator: 'flex items-center justify-center text-current',
  },
  comic: {
    root: 'peer h-5 w-5 shrink-0 rounded-none bg-background text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-[2px_2px_0_hsl(var(--foreground))]',
    indicator: 'flex items-center justify-center text-current',
  },
  bubble: {
    root: 'peer h-4 w-4 shrink-0 rounded bg-background text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground shadow-[inset_0_2px_4px_hsl(var(--foreground)/0.1)]',
    indicator: 'flex items-center justify-center text-current',
  },
  obsidian: {
    root: 'peer obsidian-blob obsidian-recessed h-5 w-5 shrink-0 text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary/20 data-[state=checked]:obsidian-glow-amber',
    indicator: 'flex items-center justify-center text-current',
  },
};

export const switchClassBySkin: InteractiveSkinClassMap = {
  glass: {
    root: 'peer glass-recessed-track inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary/60',
    thumb:
      'pointer-events-none glass-switch-thumb-led block h-5 w-5 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
  },
  comic: {
    root: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-2 border-foreground bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
    thumb:
      'pointer-events-none block h-4 w-4 rounded-none border border-foreground bg-background shadow-[1px_1px_0_hsl(var(--foreground))] ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5',
  },
  bubble: {
    root: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
    thumb:
      'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-[0_2px_6px_hsl(var(--foreground)/0.2)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
  },
  obsidian: {
    root: 'peer obsidian-groove inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary/20',
    thumb:
      'pointer-events-none obsidian-blob obsidian-glass-shine block h-5.5 w-5.5 ring-0 transition-all data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-primary data-[state=checked]:obsidian-glow-amber data-[state=unchecked]:bg-white/20',
  },
};

export const sliderClassBySkin: InteractiveSkinClassMap = {
  glass: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-2 w-full grow glass-recessed-track rounded-full',
    indicator: 'absolute h-full glass-glowing-indicator rounded-full',
    thumb:
      'block h-5 w-5 glass-switch-thumb-led rounded-full border border-primary/60 bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  },
  comic: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-2.5 w-full grow overflow-hidden rounded-none border border-foreground bg-muted',
    indicator: 'absolute h-full bg-primary',
    thumb:
      'block h-5 w-5 rounded-none border-2 border-foreground bg-background shadow-[2px_2px_0_hsl(var(--foreground))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  },
  bubble: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-2 w-full grow overflow-hidden rounded-full bg-muted',
    indicator: 'absolute h-full bg-primary',
    thumb:
      'block h-5 w-5 rounded-full border border-border bg-background shadow-[0_4px_10px_hsl(var(--foreground)/0.2)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  },
  obsidian: {
    root: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-2 w-full grow obsidian-groove rounded-full',
    indicator: 'absolute h-full obsidian-progress-liquid rounded-full shadow-none',
    thumb:
      'block h-6 w-6 obsidian-blob obsidian-glow-amber obsidian-glass-shine bg-primary border-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 cursor-grab active:cursor-grabbing',
  },
};

export const progressClassBySkin: InteractiveSkinClassMap = {
  glass: {
    root: 'relative h-3 w-full rounded-full glass-recessed-track',
    indicator: 'h-full rounded-full glass-glowing-indicator transition-all',
  },
  comic: {
    root: 'relative h-3 w-full overflow-hidden rounded-none border border-foreground bg-muted',
    indicator: 'h-full w-full flex-1 bg-primary transition-all',
  },
  bubble: {
    root: 'relative h-3 w-full overflow-hidden rounded-full bg-muted',
    indicator: 'h-full w-full flex-1 bg-primary transition-all',
  },
  obsidian: {
    root: 'relative h-3 w-full overflow-hidden rounded-full obsidian-groove border border-white/5',
    indicator: 'h-full w-full flex-1 obsidian-progress-liquid transition-all',
  },
};

export const toggleClassBySkin: SkinClassMap = {
  glass:
    'inline-flex h-10 items-center justify-center rounded-xl border border-input px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  comic:
    'inline-flex h-10 items-center justify-center rounded-none border-2 border-foreground px-3 text-sm font-black uppercase tracking-wide transition-colors data-[state=on]:bg-primary data-[state=on]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  bubble:
    'inline-flex h-10 items-center justify-center rounded-full border border-input px-4 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  obsidian:
    'inline-flex h-10 items-center justify-center obsidian-blob obsidian-glass-panel obsidian-rim-light px-4 text-sm font-bold tracking-tight border border-white/5 transition-all hover:bg-white/10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:obsidian-glow-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
};
