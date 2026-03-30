export const motionSets = ['none', 'calm', 'snappy', 'playful'] as const;

export type MotionSet = (typeof motionSets)[number];

export const motionLevels = ['off', 'subtle', 'normal'] as const;

export type MotionLevel = (typeof motionLevels)[number];
