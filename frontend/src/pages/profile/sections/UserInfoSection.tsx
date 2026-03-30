import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/features/auth/hooks';
import { Check } from 'lucide-react';
import client from '@/api/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Heading, Text } from '@/components/ui/typography';

export const UserInfoSection = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<string | null>(null);
    const hasSyncedFromDb = useRef(false);
    const initialFormDataRef = useRef<typeof formData | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Reset sync when user logs out
    useEffect(() => {
        if (!user) hasSyncedFromDb.current = false;
    }, [user]);

    // Fetch logged-in user from auth context (already loaded) and profile (phone) from API
    useEffect(() => {
        if (!user || hasSyncedFromDb.current) return;
        hasSyncedFromDb.current = true;

        const syncFromDb = async () => {
            setLoading(true);
            const base = {
                username: user.username ?? '',
                email: user.email ?? '',
                first_name: user.first_name ?? '',
                last_name: user.last_name ?? '',
                phone: user.phone_number ?? '',
            };
            try {
                const res = await client.get<{ success: boolean; data: { phone_number?: string } }>('/profiles/me/');
                const profile = res.data?.data;
                const data = {
                    ...base,
                    phone: profile?.phone_number ?? base.phone,
                };
                initialFormDataRef.current = data;
                setFormData(data);
            } catch {
                initialFormDataRef.current = base;
                setFormData(base);
            } finally {
                setLoading(false);
            }
        };
        syncFromDb();
    }, [user]);

    useEffect(() => {
        if (loading || !initialFormDataRef.current) return;
        const timer = setTimeout(() => {
            if (JSON.stringify(formData) !== JSON.stringify(initialFormDataRef.current)) {
                handleSave();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [formData, loading]);

    const handleSave = async () => {
        setSaving(true);
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setSaving(false);
        setLastSaved(new Date().toLocaleTimeString());
        setTimeout(() => setLastSaved(null), 3000);
    };

    if (loading && !formData.username) {
        return (
            <div className="max-w-2xl space-y-6">
                <header>
                    <Heading level={3}>User Information</Heading>
                    <Text muted className="mt-1">Update your personal details and how others see you.</Text>
                </header>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-lg">Loading</CardTitle>
                        <CardDescription>Fetching your profile details…</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Skeleton className="h-4 w-40" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-2xl space-y-6">
            <header>
                <Heading level={3}>User Information</Heading>
                <Text muted className="mt-1">Update your personal details and how others see you.</Text>
            </header>

            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle>User details</CardTitle>
                    <CardDescription>Changes are saved automatically.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="johndoe"
                                autoComplete="username"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                autoComplete="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>First Name</Label>
                            <Input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="John"
                                autoComplete="given-name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Last Name</Label>
                            <Input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Doe"
                                autoComplete="family-name"
                            />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                            <Label>Phone Number</Label>
                            <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                autoComplete="tel"
                                inputMode="tel"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex h-6 items-center justify-end gap-2">
                        {saving && <span className="text-xs text-muted-foreground animate-pulse">Saving changes…</span>}
                        {lastSaved && !saving && (
                            <span className="text-xs text-primary flex items-center gap-1">
                                <Check size={12} /> Saved at {lastSaved}
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
