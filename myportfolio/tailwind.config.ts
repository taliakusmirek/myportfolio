import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-Bold-Red': "#8B2929",
        'brand-Bold-Red-700' : "631D1D",
        'brand-Poppy-Rose': "#C38E93",
        'brand-Poppy-Rose-100': "#ECDCDE",
        'brand-Warm-Grey': "#DDD8D2",
        'brand-Warm-Grey-100': "#F4F3F1",
        'brand-Muted-Grey': "#827573",
        'brand-Dark-Grey': "#544B49",
        'brand-Dark': "#000000"
      },
      screens: {
        'xs': '375px',     // Small mobile
        'sm': '640px',     // Mobile landscape
        'md': '768px',     // Tablet
        'lg': '1024px',    // Small desktop
        'xl': '1280px',    // Desktop
        '2xl': '1536px',   // Large desktop
      },
      fontSize: {
        'xs-mobile': ['0.75rem', { lineHeight: '1rem' }],
        'sm-mobile': ['0.875rem', { lineHeight: '1.25rem' }],
        'base-mobile': ['1rem', { lineHeight: '1.5rem' }],
        'lg-mobile': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl-mobile': ['1.25rem', { lineHeight: '1.75rem' }],
        'h1-mobile': ['2rem', { 
          lineHeight: '2.5rem',
          fontWeight: '700' 
        }],
  
        'xs-desktop': ['0.875rem', { lineHeight: '1.25rem' }],
        'sm-desktop': ['1rem', { lineHeight: '1.5rem' }],
        'base-desktop': ['1.125rem', { lineHeight: '1.75rem' }],
        'lg-desktop': ['1.25rem', { lineHeight: '2rem' }],
        'xl-desktop': ['1.5rem', { lineHeight: '2.25rem' }],
        'h1-desktop': ['3rem', { 
          lineHeight: '3.5rem',
          fontWeight: '800' 
        }],
      },
    },
  },
  plugins: [],
} satisfies Config;