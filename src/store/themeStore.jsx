import { create } from "zustand";

export const useThemeStore=create((set)=>({
    isDarkMode: true,
    toggleTheme: (value)=> 
        set((state)=>({isDarkMode: value? value: !state.isDarkMode})),
    
}))