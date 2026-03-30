import { NavLink } from 'react-router-dom';
import { User, Settings, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MotionSurface } from '@/ui/motion/MotionSurface';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';

const navItems = [
  { path: 'user-info', label: 'User Info', icon: User },
  { path: 'settings', label: 'Account Settings', icon: Settings },
  { path: 'showcase', label: 'Showcase', icon: Sparkles },
];

const navLinkBase =
  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all';

export const ProfileSidebar = () => {
  const { skin } = useUiSkin();

  const shellBySkin: Record<typeof skin, string> = {
    glass: 'border-border bg-card/60 backdrop-blur',
    comic: 'border-2 border-foreground bg-card',
    bubble: 'border-border bg-card/70',
    obsidian: 'obsidian-card obsidian-rim-light border-0',
  };

  const navLinkBySkin: Record<
    typeof skin,
    { active: string; inactive: string }
  > = {
    glass: {
      active:
        'bg-primary/90 text-primary-foreground ui-shadow-rest ring-1 ring-white/20 backdrop-blur-sm',
      inactive: 'text-muted-foreground hover:bg-muted/70 hover:text-foreground',
    },
    comic: {
      active:
        'border-2 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_hsl(var(--foreground))] translate-x-[1px] translate-y-[1px]',
      inactive:
        'border-2 border-transparent text-muted-foreground hover:border-foreground hover:bg-accent/80 hover:text-foreground',
    },
    bubble: {
      active:
        'bg-primary text-primary-foreground ui-shadow-soft-inset shadow-[0_10px_20px_hsl(var(--foreground)/0.12)]',
      inactive:
        'text-muted-foreground hover:bg-secondary/80 hover:text-foreground hover:shadow-[0_8px_16px_hsl(var(--foreground)/0.10)]',
    },
    obsidian: {
      active:
        'bg-primary text-primary-foreground obsidian-glow-amber obsidian-blob obsidian-glass-shine scale-105',
      inactive:
        'text-muted-foreground hover:bg-white/5 hover:text-primary transition-all duration-300',
    },
  };

  return (
    <MotionSurface
      className={cn(
        'w-full shrink-0 rounded-2xl border p-3 lg:w-64 lg:self-start',
        shellBySkin[skin],
      )}
    >
      <div className="px-2 pb-3 pt-2">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Manage your preferences</p>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                navLinkBase,
                isActive ? navLinkBySkin[skin].active : navLinkBySkin[skin].inactive,
              )
            }
          >
            <item.icon size={18} className="shrink-0" />
            <span className="flex-1">{item.label}</span>
            <ChevronRight size={14} className="shrink-0 opacity-50" />
          </NavLink>
        ))}
      </nav>
    </MotionSurface>
  );
};
