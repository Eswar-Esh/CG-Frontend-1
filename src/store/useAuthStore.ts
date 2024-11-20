import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login - in production, this would make an API call
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      email,
      solved: 42,
      attempted: 67,
      rank: 156,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));