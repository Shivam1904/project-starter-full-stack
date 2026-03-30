import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import {
  GlassButton,
  ComicButton,
  BubbleButton,
  ObsidianButton,
  type SkinButtonProps,
} from '@/ui/skins/buttons';

/* ── skin → component map ───────────────────────────────────────── */

const buttonMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<SkinButtonProps & React.RefAttributes<HTMLButtonElement>>
> = {
  glass: GlassButton,
  comic: ComicButton,
  bubble: BubbleButton,
  obsidian: ObsidianButton,
};

/* ── public API ─────────────────────────────────────────────────── */

export interface ButtonProps extends SkinButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { skin } = useUiSkin();
    const SkinButton = buttonMap[skin];
    return <SkinButton ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button };

// Re-export types for consumers
export type { ButtonVariant, ButtonSize } from '@/ui/skins/buttons';
