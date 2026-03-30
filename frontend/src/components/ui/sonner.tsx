import { Toaster as Sonner } from 'sonner';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { sx } from '@/ui/skins/sx';

type ToasterProps = React.ComponentProps<typeof Sonner>;

/* ── Per-skin toast classNames ──────────────────────────────────── */

const glassToastSx = sx({
  borderRadius: '0.75rem',
  background: 'var(--ui-glass-bg-strong, hsl(var(--background) / 0.42))',
  borderColor: 'var(--ui-glass-border, hsl(var(--background) / 0.5))',
  boxShadow: 'var(--ui-glass-glow, var(--ui-shadow-hover))',
  backdropFilter: 'blur(var(--ui-glass-blur-strong, 22px)) saturate(var(--ui-glass-saturate-strong, 140%))',
  color: 'hsl(var(--foreground))',
});

const comicToastSx = sx({
  borderRadius: '1rem',
  border: '2px solid hsl(var(--foreground))',
  background: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  boxShadow: '4px 4px 0px hsl(var(--foreground))',
});

const bubbleToastSx = sx({
  borderRadius: '1rem',
  border: '1px solid hsl(var(--border))',
  background: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  boxShadow: '0 12px 24px hsl(var(--foreground) / 0.12)',
});

const obsidianToastSx = sx({
  borderRadius: '1.75rem',
  background: 'linear-gradient(145deg, hsl(250 22% 12% / 0.8), hsl(250 22% 8% / 0.9))',
  border: '1px solid hsl(var(--foreground) / 0.1)',
  boxShadow: 'inset 0 1px 1px hsl(var(--foreground) / 0.05), 0 10px 30px -10px hsl(0 0% 0% / 0.5)',
  color: 'hsl(var(--foreground))',
});

const toastSxMap: Record<UiSkin, string> = {
  glass: glassToastSx,
  comic: comicToastSx,
  bubble: bubbleToastSx,
  obsidian: obsidianToastSx,
};

const Toaster = ({ ...props }: ToasterProps) => {
  const { skin } = useUiSkin();

  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `group toast ${toastSxMap[skin]}`,
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
