import { create } from 'zustand';
interface User {
  _id: string;
  email: string;
  name: string;
  role: 'HRD' | 'SPV' | 'USER' | 'ADMIN';
  profileImage: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
