import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;

  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  
  isAuthenticated: false,
  user: null,
  token: null,

  login: (user, token) => set({
    isAuthenticated: true,
    user: user,
    token: token,
  }),

  logout: () => set({
    isAuthenticated: false,
    user: null,
    token: null,
  }),
}));