'use client';

import { create } from 'zustand';
import type { Theme } from '@/types';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme:
    typeof window !== 'undefined'
      ? ((localStorage.getItem('theme') as Theme) || 'light')
      : 'light',

  setTheme: (theme: Theme) => {
    set({ theme });

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
  },

  toggleTheme: () => {
    const current = get().theme;
    const next: Theme = current === 'light' ? 'dark' : 'light';

    set({ theme: next });

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next === 'dark');
    }
    localStorage.setItem('theme', next);
  },
}));
