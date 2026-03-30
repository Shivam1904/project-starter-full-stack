import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import {
  GlassRadioGroupItem,
  ComicRadioGroupItem,
  BubbleRadioGroupItem,
  ObsidianRadioGroupItem,
} from '@/ui/skins/radios';

/* ── RadioGroup (shared — no skin variation needed) ─────────────── */

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn('grid gap-2', className)} {...props} />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/* ── RadioGroupItem: dispatches to per-skin component ───────────── */

const radioItemMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
      React.RefAttributes<React.ElementRef<typeof RadioGroupPrimitive.Item>>
  >
> = {
  glass: GlassRadioGroupItem,
  comic: ComicRadioGroupItem,
  bubble: BubbleRadioGroupItem,
  obsidian: ObsidianRadioGroupItem,
};

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  const { skin } = useUiSkin();
  const SkinRadioItem = radioItemMap[skin];
  return <SkinRadioItem ref={ref} {...props} />;
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
