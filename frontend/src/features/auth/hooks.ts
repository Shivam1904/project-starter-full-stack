import { useEffect, useState } from 'react';

import client from '@/api/client';

import { authApi, User } from './api';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (access: string, refresh: string, userData: User) => {
    localStorage.setItem('token', access);
    localStorage.setItem('refresh_token', refresh);
    client.defaults.headers.common['Authorization'] = `Bearer ${access}`;
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete client.defaults.headers.common['Authorization'];
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      authApi
        .getMe()
        .then((res) => setUser(res.data))
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, []);

  return { user, loading, login, logout };
};
