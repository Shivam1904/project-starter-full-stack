import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassSlider, ComicSlider, BubbleSlider, ObsidianSlider } from '@/ui/skins/sliders';

const sliderMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
      React.RefAttributes<React.ElementRef<typeof SliderPrimitive.Root>>
  >
> = {
  glass: GlassSlider,
  comic: ComicSlider,
  bubble: BubbleSlider,
  obsidian: ObsidianSlider,
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>((props, ref) => {
  const { skin } = useUiSkin();
  const SkinSlider = sliderMap[skin];
  return <SkinSlider ref={ref} {...props} />;
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
