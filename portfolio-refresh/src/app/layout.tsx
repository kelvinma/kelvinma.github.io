/**
 * Root Layout Component
 * 
 * Next.js App Router - layout.tsx defines the root layout for your application.
 * This wraps all pages and provides:
 * - HTML structure (<html>, <body>)
 * - Global styles
 * - Font loading
 * - Metadata (SEO)
 * 
 * Server Component - this runs on the server and provides the shell for the app.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * Font Loading with Next.js
 * 
 * Next.js provides built-in font optimization with next/font.
 * Benefits:
 * - Automatically self-hosts Google Fonts (no external request to Google)
 * - Zero layout shift (font metrics are known at build time)
 * - Privacy-friendly (no tracking)
 * 
 * The 'variable' option creates CSS custom properties we can reference
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata Object
 * 
 * Next.js uses this to generate SEO-friendly meta tags.
 * This is type-safe with the Metadata type from Next.js.
 * 
 * For more complex metadata (dynamic, per-page), you can:
 * - Export metadata objects from individual pages
 * - Use generateMetadata() function for dynamic values
 */
export const metadata: Metadata = {
  title: "Kelvin Ma | Director of Software Engineering",
  description: "Engineering leader specializing in team building, M&A integration, AI adoption, and technical strategy. Director of Engineering at Travelers Insurance with a unique journey from photojournalism to software engineering.",
  keywords: ["Software Engineering", "Engineering Leadership", "Director of Engineering", "M&A Integration", "AI/ML", "Technical Strategy", "Elixir", "React", "Next.js"],
  authors: [{ name: "Kelvin Ma" }],
  creator: "Kelvin Ma",
  
  // Open Graph metadata for social sharing (LinkedIn, Facebook, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kelvinma.github.io",
    title: "Kelvin Ma | Director of Software Engineering",
    description: "Engineering leader specializing in team building, M&A integration, and technical strategy.",
    siteName: "Kelvin Ma Portfolio",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Kelvin Ma | Director of Software Engineering",
    description: "Engineering leader specializing in team building, M&A integration, and technical strategy.",
  },
};

/**
 * Viewport Configuration (Separate Export)
 * 
 * As of Next.js 14+, viewport should be exported separately from metadata.
 * This controls how the page is displayed on mobile devices.
 */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/**
 * Root Layout Props
 * 
 * TypeScript interface for the layout component props.
 * children: React.ReactNode is the page content that gets rendered inside this layout
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      {/**
       * Body Element
       * 
       * We apply font variables as CSS classes to make them available throughout the app.
       * The antialiased class is from Tailwind and improves font rendering.
       * 
       * Template string syntax: `${variable} ${anotherVariable}`
       * Combines multiple CSS classes into the className attribute
       */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/**
         * ThemeProvider Wrapper
         * 
         * Wraps the entire app to provide theme context.
         * Must be a Client Component, so it's rendered inside <body>.
         * 
         * This enables any component to access theme state via useTheme() hook.
         */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
