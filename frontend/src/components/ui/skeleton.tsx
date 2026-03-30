import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import type { UiSkin } from '@/ui/skins/types';
import { GlassSkeleton, ComicSkeleton, BubbleSkeleton, ObsidianSkeleton } from '@/ui/skins/skeletons';

const skeletonMap: Record<UiSkin, React.FC<React.HTMLAttributes<HTMLDivElement>>> = {
  glass: GlassSkeleton,
  comic: ComicSkeleton,
  bubble: BubbleSkeleton,
  obsidian: ObsidianSkeleton,
};

function Skeleton(props: React.HTMLAttributes<HTMLDivElement>) {
  const { skin } = useUiSkin();
  const SkinSkeleton = skeletonMap[skin];
  return <SkinSkeleton {...props} />;
}

export { Skeleton };
