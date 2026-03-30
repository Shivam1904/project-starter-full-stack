import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageSquare, Maximize2, Minimize2 } from 'lucide-react';
import { useDrawer, type DrawerVariant } from './DrawerContext';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const variantConfig: Record<DrawerVariant, string> = {
  left: 'fixed left-0 top-0 h-full w-80 z-50 border-r',
  right: 'fixed right-0 top-0 h-full w-80 z-50 border-l',
  'bottom-window': 'fixed bottom-4 right-4 w-96 h-[500px] z-50 rounded-2xl border shadow-2xl',
  'minimized-icon': 'fixed bottom-6 right-6 z-50',
};

const animationVariants = {
  left: { x: '-100%', opacity: 0 },
  right: { x: '100%', opacity: 0 },
  'bottom-window': { y: '100%', opacity: 0, scale: 0.95 },
  'minimized-icon': { scale: 0, opacity: 0 },
};

export function GlobalDrawer() {
  const { isOpen, variant, content, closeDrawer, setVariant } = useDrawer();
  const { skin } = useUiSkin();

  if (!isOpen) return null;

  if (variant === 'minimized-icon') {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className={variantConfig[variant]}
      >
        <Button
          size="icon"
          className={cn(
            'h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110',
            skin === 'glass' && 'glass-panel-strong glass-highlight border-primary/40',
            skin === 'bubble' && 'rounded-full shadow-xl',
            skin === 'comic' && 'border-2 border-foreground shadow-[4px_4px_0px_black]'
          )}
          onClick={() => setVariant('bottom-window')}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={animationVariants[variant]}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        exit={animationVariants[variant]}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          variantConfig[variant],
          'flex flex-col overflow-hidden bg-background/95 backdrop-blur-md',
          skin === 'glass' && 'glass-panel-strong glass-highlight border-white/10',
          skin === 'bubble' && 'rounded-[2rem] border-border/40',
          skin === 'comic' && 'border-4 border-foreground'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider opacity-70">
              Drawer System
            </span>
          </div>
          <div className="flex items-center gap-1">
            {variant === 'bottom-window' ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setVariant('minimized-icon')}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setVariant('bottom-window')}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
              onClick={closeDrawer}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {content}
        </div>

        {/* Footer actions for testing variants */}
        <div className="p-2 border-t border-border/40 bg-muted/30 flex justify-center gap-2">
            <button onClick={() => setVariant('left')} className="text-[10px] uppercase font-bold opacity-50 hover:opacity-100 transition-opacity">Left</button>
            <button onClick={() => setVariant('right')} className="text-[10px] uppercase font-bold opacity-50 hover:opacity-100 transition-opacity">Right</button>
            <button onClick={() => setVariant('bottom-window')} className="text-[10px] uppercase font-bold opacity-50 hover:opacity-100 transition-opacity">Bottom</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
