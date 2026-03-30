import * as React from 'react';

import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import {
  GlassInput,
  ComicInput,
  BubbleInput,
  ObsidianInput,
  type SkinInputProps,
} from '@/ui/skins/inputs';

/* ── skin → component map ───────────────────────────────────────── */

const inputMap: Record<
  UiSkin,
  React.ForwardRefExoticComponent<SkinInputProps & React.RefAttributes<HTMLInputElement>>
> = {
  glass: GlassInput,
  comic: ComicInput,
  bubble: BubbleInput,
  obsidian: ObsidianInput,
};

/* ── public API ─────────────────────────────────────────────────── */

export type InputProps = SkinInputProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { skin } = useUiSkin();
    const SkinInput = inputMap[skin];
    return <SkinInput ref={ref} {...props} />;
  },
);
Input.displayName = 'Input';

export { Input };
