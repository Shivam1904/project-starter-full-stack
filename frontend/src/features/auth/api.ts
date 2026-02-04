import client from '@/api/client';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
}

export interface AuthResponse {
  user: User;
  access: string;
  refresh: string;
}

export const authApi = {
  signup: async (data: {
    username: string;
    password?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  }) => {
    const res = await client.post('/auth/signup/', data);
    return res.data; // Expects { success: true, data: { user, access, refresh } }
  },

  login: async (data: { username: string; password?: string }) => {
    const res = await client.post('/auth/signin/', data);
    return res.data;
  },

  getMe: async () => {
    const res = await client.get('/auth/me/');
    return res.data; // Expects { success: true, data: User }
  },
};
