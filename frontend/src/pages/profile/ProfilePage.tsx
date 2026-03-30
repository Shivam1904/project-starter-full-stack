import { Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks';
import { AppShell } from '@/common/components/AppShell';
import { ProfileSidebar } from './ProfileSidebar';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <AppShell sidebar={<ProfileSidebar />}>
      <Outlet />
    </AppShell>
  );
}
