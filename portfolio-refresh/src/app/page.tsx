/**
 * Home Page Component
 * 
 * Next.js App Router - page.tsx files are the entry points for routes.
 * This file creates the homepage at the root path (/).
 * 
 * Server Component by default - we're importing both Server and Client Components.
 * Next.js handles the component boundary automatically:
 * - Server Components (Hero, About, Projects, Footer) render on the server
 * - Client Components (Navigation, Contact) include interactivity
 * 
 * This is a key Next.js 13+ pattern - mixing server and client components
 * for optimal performance while maintaining interactivity where needed.
 */

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/**
       * Navigation Component (Client Component)
       * Fixed position navigation bar with mobile menu toggle
       */}
      <Navigation />

      {/**
       * Main Content
       * Each section is a separate component for better organization
       * and code reusability
       */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/**
       * Footer Component (Server Component)
       * Global footer with links and copyright info
       */}
      <Footer />
    </>
  );
}
