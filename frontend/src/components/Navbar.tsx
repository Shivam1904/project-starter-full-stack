import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/features/auth/hooks';
import { cn } from '@/lib/utils';
import { useTheme } from '@/theme/ThemeProvider';
import { uiPalettes } from '@/ui/palette/types';
import { useUiPalette } from '@/ui/palette/UiPaletteProvider';
import { uiSkins } from '@/ui/skins/types';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import { motionLevels, motionSets } from '@/ui/motion/types';
import { useMotionPrefs } from '@/ui/motion/MotionProvider';
import { uiIntensities } from '@/ui/skins/intensity/types';
import { useUiIntensity } from '@/ui/skins/intensity/UiIntensityProvider';

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { palette, setPalette } = useUiPalette();
  const { skin, setSkin } = useUiSkin();
  const { set: motionSet, level: motionLevel, setMotionSet, setMotionLevel } =
    useMotionPrefs();
  const { intensity, setIntensity } = useUiIntensity();

  const cycleSkin = () => {
    const index = uiSkins.indexOf(skin);
    setSkin(uiSkins[(index + 1) % uiSkins.length]);
  };

  const cyclePalette = () => {
    const index = uiPalettes.indexOf(palette);
    setPalette(uiPalettes[(index + 1) % uiPalettes.length]);
  };

  const cycleMotionSet = () => {
    const index = motionSets.indexOf(motionSet);
    setMotionSet(motionSets[(index + 1) % motionSets.length]);
  };

  const cycleMotionLevel = () => {
    const index = motionLevels.indexOf(motionLevel);
    setMotionLevel(motionLevels[(index + 1) % motionLevels.length]);
  };

  const cycleIntensity = () => {
    const index = uiIntensities.indexOf(intensity);
    setIntensity(uiIntensities[(index + 1) % uiIntensities.length]);
  };

  return (
    <nav
      className={cn(
        'sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors duration-500',
        skin === 'glass' && 'glass-panel-strong glass-highlight border-border/40',
        skin === 'obsidian' && 'obsidian-glass-panel obsidian-rim-light border-0 border-b border-white/5',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-foreground">Project Starter</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              )}
            </Button>
            <Button variant="outline" onClick={cycleSkin}>
              Skin: {skin}
            </Button>
            <Button variant="outline" onClick={cyclePalette}>
              Palette: {palette}
            </Button>
            <Button variant="outline" onClick={cycleMotionSet}>
              Motion: {motionSet}
            </Button>
            <Button variant="outline" onClick={cycleMotionLevel}>
              Motion level: {motionLevel}
            </Button>
            <Button variant="outline" onClick={cycleIntensity}>
              Intensity: {intensity}
            </Button>

            {isAuthenticated ? (
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
