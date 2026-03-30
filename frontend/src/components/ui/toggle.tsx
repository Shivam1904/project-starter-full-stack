import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassToggle, ComicToggle, BubbleToggle, ObsidianToggle } from '@/ui/skins/toggles';

const toggleMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
      React.RefAttributes<React.ElementRef<typeof TogglePrimitive.Root>>
  >
> = {
  glass: GlassToggle,
  comic: ComicToggle,
  bubble: BubbleToggle,
  obsidian: ObsidianToggle,
};

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>((props, ref) => {
  const { skin } = useUiSkin();
  const SkinToggle = toggleMap[skin];
  return <SkinToggle ref={ref} {...props} />;
});
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
