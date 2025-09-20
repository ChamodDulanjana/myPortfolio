'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");                                     // State update
      window.localStorage.setItem("theme", "dark");         // Persist to localStorage
      document.documentElement.classList.add("dark");       // Update HTML class for Tailwind / Update DOM
    } else {
      setTheme("light");                                    // State update
      window.localStorage.setItem("theme", "light");        // Persist to localStorage
      document.documentElement.classList.remove("dark");    // Update HTML class for Tailwind / Update DOM
    }
  };

  // On initial load, check for saved theme or system preference
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      // Use saved theme
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Use system preference if no saved theme
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// I change themes by next-themes package. So this file is not in use now.