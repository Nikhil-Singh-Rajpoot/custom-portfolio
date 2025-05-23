
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.5)'
					},
				},
				'scan-line': {
					'0%': { 
						transform: 'translateY(-100%)' 
					},
					'100%': { 
						transform: 'translateY(100%)' 
					},
				},
				'glitch': {
					'0%, 100%': { 
						clipPath: 'inset(0 0 0 0)'
					},
					'5%, 15%, 25%, 35%, 45%, 55%': {
						clipPath: 'inset(5% 0 15% 0)'
					},
					'10%, 30%, 40%, 50%, 60%': {
						clipPath: 'inset(15% 0 5% 0)'
					},
					'65%, 75%, 85%, 95%': {
						clipPath: 'inset(5% 0 5% 0)'
					},
					'70%, 80%, 90%': {
						clipPath: 'inset(10% 0 10% 0)'
					}
				},
				'fill-bar': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'glitch': 'glitch 500ms infinite',
				'fill-bar': 'fill-bar 1.5s ease-out forwards',
			},
			backgroundImage: {
				'neon-gradient': 'linear-gradient(to right, #00FFFF, #FF00FF)',
			},
			boxShadow: {
				'neon': '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(255, 0, 255, 0.3)',
				'neon-strong': '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.6)',
			},
			fontFamily: {
				'heading': ['"Bebas Neue"', 'sans-serif'],
				'body': ['"Inter"', 'sans-serif'],
				'alt': ['"Orbitron"', 'sans-serif'],
			},
			letterSpacing: {
				'wider': '.1em',
				'widest': '.2em',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
