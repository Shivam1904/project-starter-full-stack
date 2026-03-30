export const uiSkins = ['comic', 'glass', 'bubble', 'obsidian'] as const;

export type UiSkin = (typeof uiSkins)[number];
