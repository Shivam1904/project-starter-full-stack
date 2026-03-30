import * as React from 'react';
import { Label as RadixLabel } from '@radix-ui/react-label';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassLabel, ComicLabel, BubbleLabel, ObsidianLabel } from '@/ui/skins/labels';

const labelMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof RadixLabel> & React.RefAttributes<HTMLLabelElement>
  >
> = {
  glass: GlassLabel,
  comic: ComicLabel,
  bubble: BubbleLabel,
  obsidian: ObsidianLabel,
};

const Label = React.forwardRef<
  React.ElementRef<typeof RadixLabel>,
  React.ComponentPropsWithoutRef<typeof RadixLabel>
>(({ ...props }, ref) => {
  const { skin } = useUiSkin();
  const SkinLabel = labelMap[skin];
  return <SkinLabel ref={ref} {...props} />;
});
Label.displayName = RadixLabel.displayName;

export { Label };
