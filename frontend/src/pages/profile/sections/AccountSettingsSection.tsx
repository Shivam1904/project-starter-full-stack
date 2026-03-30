import { CreditCard, ShieldCheck, LogOut, Trash2, Zap, ExternalLink } from 'lucide-react';
import { useAuth } from '@/features/auth/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eyebrow, Heading, Text } from '@/components/ui/typography';

export const AccountSettingsSection = () => {
    const { logout } = useAuth();

    return (
        <div className="max-w-2xl space-y-8">
            <header>
                <Heading level={3}>Account Settings</Heading>
                <Text muted className="mt-1">Manage your subscription, security, and account status.</Text>
            </header>

            <Card>
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between gap-4">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Zap className="text-yellow-500" /> Subscription Plan
                        </CardTitle>
                        <Eyebrow>Pro Plan</Eyebrow>
                    </div>
                    <CardDescription>Your next billing date is March 12, 2026 for $29.00.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 sm:flex-row">
                    <Button>Upgrade Plan</Button>
                    <Button variant="secondary">Manage Billing</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <CreditCard className="text-blue-500" /> Payment Methods
                    </CardTitle>
                    <CardDescription>Manage your saved payment methods.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-6 w-10 items-center justify-center rounded bg-muted text-[10px] font-bold">VISA</div>
                            <div>
                                <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 12/28</p>
                            </div>
                        </div>
                        <Button size="sm" variant="ghost">
                            Edit
                        </Button>
                    </div>
                    <Button variant="link" className="h-auto justify-start p-0">
                        <span className="inline-flex items-center gap-1">
                            <ExternalLink size={14} /> Add new payment method
                        </span>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <ShieldCheck className="text-green-500" /> Security
                    </CardTitle>
                    <CardDescription>Protect your account with stronger authentication.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-border px-4 py-3">
                        <div>
                            <p className="text-sm font-medium">Change Password</p>
                            <p className="text-xs text-muted-foreground">Regularly update your password for better security.</p>
                        </div>
                        <Button size="sm" variant="secondary">
                            Update
                        </Button>
                    </div>
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-border px-4 py-3">
                        <div>
                            <p className="text-sm font-medium">Two-Factor Authentication</p>
                            <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                        </div>
                        <Button size="sm">
                            Enable
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-lg text-red-600 dark:text-red-400">Danger Zone</CardTitle>
                    <CardDescription>These actions are permanent and cannot be undone.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold">Sign Out</p>
                            <p className="text-xs text-muted-foreground">Log out of your current session on this device.</p>
                        </div>
                        <Button onClick={logout} variant="outline">
                            <span className="inline-flex items-center gap-2">
                                <LogOut size={16} /> Sign Out
                            </span>
                        </Button>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-red-100 pt-4 dark:border-red-900/60">
                        <div>
                            <p className="text-sm font-semibold text-red-600 dark:text-red-400">Delete Account</p>
                            <p className="text-xs text-muted-foreground">
                                Permanently delete your account and all associated data.
                            </p>
                        </div>
                        <Button variant="destructive">
                            <span className="inline-flex items-center gap-2">
                                <Trash2 size={16} /> Delete Account
                            </span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
