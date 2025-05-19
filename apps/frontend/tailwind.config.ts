import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

// Define an extended type that includes the safelist property
type ExtendedConfig = Config & {
  safelist?: (string | { pattern: RegExp })[];
};

const config: ExtendedConfig = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  safelist: [
    'text-indent-0',
    'text-indent-1',
    'text-indent-2',
    'text-indent-4',
    'text-indent-8',
    'shadow-custom-light',
    'shadow-custom-medium',
    'shadow-custom-dark',
    'bg-gradient-dark-overlay',
    'bg-gradient-primary'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom-light': '0 0 45px rgba(0, 0, 0, 0.07)',
        'custom-medium': '0 0 45px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 0 45px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-dark-overlay': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/carousel-1.jpg)',
        'gradient-primary': 'linear-gradient(rgba(0, 156, 255, 0.7), rgba(0, 156, 255, 0.7))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translate3d(0, -40px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        zoomIn: {
          'from': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-in-out',
        'fade-in-down': 'fadeInDown 1s ease-in-out',
        'zoom-in': 'zoomIn 1s ease-in-out',
      },
      textIndent: {
        '0': '0px',
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '8': '2rem',
      },
    },
  },
  plugins: [
    ({ addUtilities, matchUtilities, theme }: { addUtilities: any; matchUtilities: any; theme: (path: string) => Record<string, string> }) => {
      const textIndentUtilities = Object.entries(theme('textIndent')).map(([key, value]) => {
        return {
          [`.text-indent-${key}`]: {
            textIndent: value,
          },
        }
      }).reduce((acc, utility) => ({ ...acc, ...utility }), {});
      
      addUtilities(textIndentUtilities);
    },
    animate
  ],
};

export default config;
