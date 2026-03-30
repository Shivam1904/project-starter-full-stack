import { useState } from 'react';
import { useTheme } from '@/theme/ThemeProvider';
import { useUiPalette } from '@/ui/palette/UiPaletteProvider';
import { useUiSkin } from '@/ui/skins/UiSkinProvider';
import { useUiIntensity } from '@/ui/skins/intensity/UiIntensityProvider';
import { useMotionPrefs } from '@/ui/motion/MotionProvider';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { RadialProgress } from '@/components/ui/radial-progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Toaster } from '@/components/ui/sonner';
import { Switch } from '@/components/ui/switch';
import { Toggle } from '@/components/ui/toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eyebrow, Heading, Text } from '@/components/ui/typography';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

// New Imports
import { Icon } from '@iconify/react';
import { useDrawer } from '@/ui/drawer/DrawerContext';
import { AiChat } from '@/features/chat/AiChat';
import { MessageSquare, PanelLeft, PanelRight, PanelBottom, Minimize2 } from 'lucide-react';

export const ShowcaseSection = () => {
  const { openDrawer, setVariant } = useDrawer();
  const { theme } = useTheme();
  const { palette } = useUiPalette();
  const { skin } = useUiSkin();
  const { intensity } = useUiIntensity();
  const { set: motionSet, level: motionLevel, reduced } = useMotionPrefs();

  const handleOpenAiChat = () => {
    openDrawer(<AiChat />, 'right');
  };

  const showcaseForm = useForm<{ email: string }>({
    defaultValues: { email: '' },
  });
  const [plan, setPlan] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [todoChecks, setTodoChecks] = useState({
    wireframe: true,
    copy: false,
    qa: false,
  });
  const [rangeValue, setRangeValue] = useState(65);
  const [completion, setCompletion] = useState(72);
  const progressVariant = skin === 'comic' ? 'scrapbook' : 'milestone';
  const radialVariant = skin === 'comic' ? 'scrapbook' : 'default';

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <Eyebrow>Design System</Eyebrow>
          <Heading level={3}>UI Showcase</Heading>
          <Text muted>
            All primitives on one screen so you can see skins, palettes, and motion together.
          </Text>
          <p className="text-xs text-muted-foreground">
            Theme: <span className="font-mono">{theme}</span> · Palette:{' '}
            <span className="font-mono">{palette}</span> · Skin:{' '}
            <span className="font-mono">{skin}</span> · Intensity:{' '}
            <span className="font-mono">{intensity}</span> · Motion:{' '}
            <span className="font-mono">
              {motionSet} / {motionLevel}
            </span>{' '}
            {reduced && '(reduced motion)'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
           <Button 
            onClick={handleOpenAiChat}
            className={cn(
                "gap-2 h-11 px-6 shadow-lg hover:shadow-xl transition-all",
                skin === 'glass' && "glass-panel-strong glass-highlight border-primary/40",
                skin === 'obsidian' && "obsidian-glow-amber obsidian-blob",
                skin === 'bubble' && "rounded-full"
            )}
           >
             <MessageSquare className="h-4 w-4" />
             AI Chat
           </Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">

        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Variants and sizes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="icon" variant="default" aria-label="Home">
                <Icon icon="mdi:home" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary" aria-label="Heart">
                <Icon icon="mdi:heart" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Settings">
                <Icon icon="tabler:settings" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Cloud">
                <Icon icon="carbon:cloud" className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="destructive" aria-label="Trash">
                <Icon icon="ph:trash" className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inputs & Labels</CardTitle>
            <CardDescription>Form primitives in action.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...showcaseForm}>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="showcase-name">Name</Label>
                  <Input id="showcase-name" placeholder="Alex Doe" />
                </div>
                <FormField
                  control={showcaseForm.control}
                  name="email"
                  render={() => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cards & Skeletons</CardTitle>
            <CardDescription>Surface + loading state.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Loading profile card</p>
                <div className="space-y-2 rounded-2xl border border-dashed border-border p-3">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Simple card</p>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Surface demo</CardTitle>
                    <CardDescription>Uses card tokens + skin styles.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>
                      This card shows how background, border, and shadow respond to the current
                      skin, palette, and theme.
                    </p>
                    <Button
                      size="sm"
                      onClick={() => toast.success('This is a toast from Showcase')}
                    >
                      Trigger toast
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Toast + motion summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Use this section to quickly verify that toasts, surfaces, and motion all feel
                right together.
              </p>
              <p>
                Try switching skins, palettes, theme, and motion settings from the navbar and
                watch this page update.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => toast.success('Success toast example')}>Success</Button>
              <Button
                variant="secondary"
                onClick={() =>
                  toast('Neutral toast example', {
                    description: 'Used for softer feedback.',
                  })
                }
              >
                Neutral
              </Button>
              <Button
                variant="destructive"
                onClick={() => toast.error('Destructive toast example')}
              >
                Error
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Drawer Variants</CardTitle>
            <CardDescription>Try different layout positions for the global drawer.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
             <Button variant="outline" size="sm" onClick={() => { setVariant('left'); handleOpenAiChat(); }} className="gap-2">
                <PanelLeft className="h-4 w-4 rotate-180" /> Left Sidebar
             </Button>
             <Button variant="outline" size="sm" onClick={() => { setVariant('right'); handleOpenAiChat(); }} className="gap-2">
                <PanelRight className="h-4 w-4" /> Right Sidebar
             </Button>
             <Button variant="outline" size="sm" onClick={() => { setVariant('bottom-window'); handleOpenAiChat(); }} className="gap-2">
                <PanelBottom className="h-4 w-4" /> Bottom Window
             </Button>
             <Button variant="outline" size="sm" onClick={() => { setVariant('minimized-icon'); handleOpenAiChat(); }} className="gap-2">
                <Minimize2 className="h-4 w-4" /> Minimized
             </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overlays</CardTitle>
            <CardDescription>Dialog and popover patterns.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite collaborators</DialogTitle>
                  <DialogDescription>
                    Add people to this workspace and assign roles.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2 py-4">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input id="dialog-email" placeholder="team@example.com" />
                </div>
                <DialogFooter>
                  <Button variant="secondary">Cancel</Button>
                  <Button onClick={() => toast.success('Invitation sent')}>Send invite</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-3">
                  <Heading level={4}>Quick Actions</Heading>
                  <div className="grid gap-2">
                    <Button size="sm">Duplicate</Button>
                    <Button size="sm" variant="secondary">Archive</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatars & Presence</CardTitle>
            <CardDescription>User chips and compact team row.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=8" alt="Aakarshika" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=9" alt="Avi" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=10" alt="Sam" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                +12 online
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Product Meeting</p>
                  <p className="text-xs text-muted-foreground">Starts in 20 minutes</p>
                </div>
              </div>
              <Button size="sm" variant="secondary">Join</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Selection & Progress</CardTitle>
            <CardDescription>
              Radio buttons, toggle, slider, linear progress, and radial progress.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <div className="space-y-2">
                <Heading level={4}>Plan (Radio Group)</Heading>
                <RadioGroup
                  value={plan}
                  onValueChange={(value) =>
                    setPlan(value as 'starter' | 'pro' | 'enterprise')
                  }
                  className="space-y-2"
                >
                  {[
                    { value: 'starter', label: 'Starter' },
                    { value: 'pro', label: 'Pro' },
                    { value: 'enterprise', label: 'Enterprise' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-2 px-3 py-2"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`plan-${option.value}`}
                        aria-label={option.label}
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Heading level={4}>Checklist (Checkbox)</Heading>
                <div className="space-y-2">
                  {[
                    { key: 'wireframe', label: 'Finalize wireframes' },
                    { key: 'copy', label: 'Write launch copy' },
                    { key: 'qa', label: 'QA acceptance pass' },
                  ].map((item) => {
                    const checked = todoChecks[item.key as keyof typeof todoChecks];
                    return (
                      <label
                        key={item.key}
                        className="flex cursor-pointer items-center gap-2 px-3 py-2"
                      >
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(next) =>
                            setTodoChecks((prev) => ({
                              ...prev,
                              [item.key]: Boolean(next),
                            }))
                          }
                          aria-label={item.label}
                        />
                        <span
                          className={
                            checked && skin === 'comic'
                              ? 'comic-strike text-sm'
                              : 'text-sm'
                          }
                        >
                          {item.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Heading level={4}>Alerts (Switch)</Heading>
                <div className="inline-flex items-center gap-3 px-3 py-2">
                  <Switch
                    checked={alertsEnabled}
                    onCheckedChange={setAlertsEnabled}
                    aria-label="Toggle alerts"
                  />
                  <span className="text-sm">
                    {alertsEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Heading level={4}>Display Mode (Toggle)</Heading>
                <div className="flex flex-wrap gap-2">
                  <Toggle
                    pressed={compactMode}
                    onPressedChange={setCompactMode}
                    aria-label="Toggle compact mode"
                  >
                    Compact mode
                  </Toggle>
                  <Toggle defaultPressed aria-label="Toggle beta feature">
                    Beta feature
                  </Toggle>
                </div>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <Heading level={4}>Priority (Slider)</Heading>
                  <Text muted>Current value: {rangeValue}</Text>
                </div>
                <Slider
                  id="showcase-slider"
                  min={0}
                  max={100}
                  step={1}
                  value={[rangeValue]}
                  onValueChange={([value]) => setRangeValue(value)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Heading level={4}>Linear Progress</Heading>
                <Progress
                  value={completion}
                  variant={progressVariant}
                  milestones={[20, 40, 60, 80]}
                  showValueLabel
                />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4">
                  <Heading level={skin === 'comic' ? 1 : 4}>Radial Progress</Heading>
                  <RadialProgress value={completion} variant={radialVariant} />
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setCompletion((prev) => (prev >= 100 ? 0 : prev + 10))}
                  >
                    Advance +10%
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Heading level={4}>Meter</Heading>
                <meter
                  min={0}
                  max={100}
                  value={rangeValue}
                  className="h-3 w-full overflow-hidden rounded-full"
                />
                <p className="text-xs text-muted-foreground">System load: {rangeValue}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Scroll Areas</CardTitle>
            <CardDescription>Vertical feeds and horizontal rails.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <Text muted>Vertical activity feed</Text>
              <ScrollArea className="h-56 p-3">
                <div className="space-y-3 pr-2">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={`activity-${i}`}
                      className="flex items-start gap-3 px-3 py-2"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{String.fromCharCode(65 + (i % 5))}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Activity item #{i + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          Someone updated a section in this workspace.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollBar />
              </ScrollArea>
            </div>

            <div className="space-y-2">
              <Text muted>Horizontal content rail</Text>
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex w-max gap-3 p-3">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Card key={`tile-${i}`} className="w-[220px]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Card {i + 1}</CardTitle>
                        <CardDescription>Horizontal gallery item</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full">Open</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </div>
  );
};
