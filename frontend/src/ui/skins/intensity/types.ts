export const uiIntensities = ['subtle', 'medium', 'vivid'] as const;

export type UiIntensity = (typeof uiIntensities)[number];
