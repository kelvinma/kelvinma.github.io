/**
 * Navigation Component
 * 
 * Next.js App Router note: By default, all components in the app directory are 
 * React Server Components (RSC). Since this nav needs interactivity (mobile menu toggle),
 * we'll mark it as a Client Component with 'use client'.
 * 
 * Key modern React/Next.js concepts used here:
 * - 'use client' directive (new in Next.js 13+)
 * - useState hook (introduced React 16.8, replacing class component state)
 * - Functional components (standard since hooks were introduced)
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

/**
 * TypeScript Props Interface
 * 
 * In modern React with TypeScript, we define component props using interfaces.
 * This provides type safety and better IDE autocomplete.
 */
interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  /**
   * useState Hook
   * 
   * Modern React uses hooks instead of class components.
   * useState returns [currentValue, setterFunction]
   * 
   * This replaces the old class component pattern:
   * this.state = { mobileMenuOpen: false }
   * this.setState({ mobileMenuOpen: true })
   */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  /**
   * Theme Hook
   * 
   * Accessing theme context using our custom hook.
   * Provides current theme and toggle function.
   */
  const { theme, toggleTheme } = useTheme();

  /**
   * Navigation Items
   * 
   * Using an array of objects makes it easy to map over and render nav items.
   * Each href uses hash routing for smooth scrolling to sections on the same page.
   */
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border ${className}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Kelvin Ma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              /**
               * Next.js Link Component
               * 
               * Next.js provides an optimized Link component for navigation.
               * It prefetches linked pages in the background for faster navigation.
               * 
               * For hash links on the same page, it works like a regular anchor tag.
               */
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground-muted hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                // Moon icon for dark mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            {/* Resume Download Link */}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              // Close icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {/**
         * Conditional Rendering
         * 
         * Modern React pattern: && operator for conditional rendering
         * Only renders the mobile menu when mobileMenuOpen is true
         * 
         * Alternative patterns you might see:
         * - Ternary: {condition ? <Component /> : null}
         * - Early return in the component body
         */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-foreground-muted hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 w-full text-foreground-muted hover:text-foreground transition-colors font-medium"
            >
              {theme === 'light' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Light Mode
                </>
              )}
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
