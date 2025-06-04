import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "rotating-glow": {
          "0%": {
            boxShadow:
              "0 0 8px 2px rgba(59, 130, 246, 0.4), 0 0 16px 4px rgba(59, 130, 246, 0.2), 0 0 24px 6px rgba(59, 130, 246, 0.1)",
          },
          "25%": {
            boxShadow:
              "8px 0 8px 2px rgba(99, 102, 241, 0.4), 16px 0 16px 4px rgba(99, 102, 241, 0.2), 24px 0 24px 6px rgba(99, 102, 241, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 8px 8px 2px rgba(139, 92, 246, 0.4), 0 16px 16px 4px rgba(139, 92, 246, 0.2), 0 24px 24px 6px rgba(139, 92, 246, 0.1)",
          },
          "75%": {
            boxShadow:
              "-8px 0 8px 2px rgba(99, 102, 241, 0.4), -16px 0 16px 4px rgba(99, 102, 241, 0.2), -24px 0 24px 6px rgba(99, 102, 241, 0.1)",
          },
          "100%": {
            boxShadow:
              "0 0 8px 2px rgba(59, 130, 246, 0.4), 0 0 16px 4px rgba(59, 130, 246, 0.2), 0 0 24px 6px rgba(59, 130, 246, 0.1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rotating-glow": "rotating-glow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
