/**
 * ThemeProvider Component
 * 
 * Manages the application's theme state (light/dark mode) using React Context.
 * 
 * Modern React pattern:
 * - Context API for global state (theme preference)
 * - useEffect for side effects (localStorage, DOM updates)
 * - useState for component state
 * - Custom hook (useTheme) for consuming the context
 * 
 * This replaces older patterns like Redux for simple global state needs.
 */
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Create Context
 * 
 * Context API (introduced React 16.3) provides a way to pass data
 * through the component tree without prop drilling.
 * 
 * We use undefined as default and handle it in the hook below.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom Hook for Theme Access
 * 
 * Modern pattern: Custom hooks for reusable logic.
 * This hook provides type-safe access to the theme context.
 * 
 * Usage in components: const { theme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider Component
 * 
 * Wraps the app and provides theme state to all child components.
 * Handles:
 * - Reading initial theme from localStorage or system preference
 * - Persisting theme changes to localStorage
 * - Applying theme class to document root
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  /**
   * State Initialization
   * 
   * We start with 'light' and update in useEffect to avoid hydration mismatch.
   * Hydration mismatch occurs when server-rendered HTML differs from client render.
   */
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  /**
   * Initial Theme Detection (runs once on mount)
   * 
   * useEffect pattern for side effects:
   * - Empty dependency array [] = run once on mount
   * - Checks localStorage first (user preference)
   * - Falls back to system preference (prefers-color-scheme)
   */
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Fall back to system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  /**
   * Apply Theme to Document (runs when theme changes)
   * 
   * useEffect with dependency [theme, mounted]:
   * - Runs when theme or mounted changes
   * - Updates document.documentElement.classList
   * - Persists to localStorage
   */
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove both classes first
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  /**
   * Toggle Function
   * 
   * Simple state toggle between light and dark.
   * This function is passed to consumers via context.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  /**
   * Render Children Immediately
   * 
   * We render children right away to prevent layout shift.
   * The theme will be applied via useEffect once mounted.
   */
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
