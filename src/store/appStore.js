import { create } from 'zustand';

export const useAppStore = create((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  language: 'en', // 'en' | 'ar'
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ar' : 'en' })),
}));
