import type { NextConfig } from "next";

/**
 * Next.js Configuration for Static Export (GitHub Pages)
 * 
 * output: 'export' - Enables static HTML export mode
 * This generates a static site in the /out directory that can be deployed to any static hosting
 * 
 * images.unoptimized: true - Required for static export
 * GitHub Pages doesn't support Next.js Image Optimization API, so we disable it
 * Images will still be optimized at build time, just not dynamically
 */
const nextConfig: NextConfig = {
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable React Compiler for better performance
  reactCompiler: true,
};

export default nextConfig;
