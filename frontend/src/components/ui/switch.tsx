import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassSwitch, ComicSwitch, BubbleSwitch, ObsidianSwitch } from '@/ui/skins/switches';

const switchMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
      React.RefAttributes<React.ElementRef<typeof SwitchPrimitives.Root>>
  >
> = {
  glass: GlassSwitch,
  comic: ComicSwitch,
  bubble: BubbleSwitch,
  obsidian: ObsidianSwitch,
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>((props, ref) => {
  const { skin } = useUiSkin();
  const SkinSwitch = switchMap[skin];
  return <SkinSwitch ref={ref} {...props} />;
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
