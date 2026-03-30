import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassCheckbox, ComicCheckbox, BubbleCheckbox, ObsidianCheckbox } from '@/ui/skins/checkboxes';

const checkboxMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
      React.RefAttributes<React.ElementRef<typeof CheckboxPrimitive.Root>>
  >
> = {
  glass: GlassCheckbox,
  comic: ComicCheckbox,
  bubble: BubbleCheckbox,
  obsidian: ObsidianCheckbox,
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => {
  const { skin } = useUiSkin();
  const SkinCheckbox = checkboxMap[skin];
  return <SkinCheckbox ref={ref} {...props} />;
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
