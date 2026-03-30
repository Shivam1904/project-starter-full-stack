import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';
import { sx } from '@/ui/skins/sx';

const obsidianSx = sx({
  display: 'inline-flex',
  height: '2.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  background: 'hsl(var(--card) / 0.4)',
  backdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid hsl(0 0% 100% / 0.05)',
  padding: '0 1rem',
  fontSize: '0.875rem',
  fontWeight: 700,
  letterSpacing: '-0.01em',
  transition: 'all 300ms ease',
  cursor: 'pointer',
  animation: 'obsidian-morph 10s infinite ease-in-out',
  '&:hover': { background: 'hsl(0 0% 100% / 0.1)' },
  '&[data-state=on]': {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.6), 0 0 40px -15px hsl(var(--primary) / 0.3)',
    filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))',
  },
  '&:focus-visible': { outline: '2px solid hsl(var(--primary))', outlineOffset: '2px' },
  '&:disabled': { pointerEvents: 'none', opacity: 0.5 },
});

export const ObsidianToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={[obsidianSx, className].filter(Boolean).join(' ')} {...props} />
));
ObsidianToggle.displayName = 'ObsidianToggle';
