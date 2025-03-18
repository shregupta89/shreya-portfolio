/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee linear infinite',
                marquee2: 'marquee2 linear infinite',
              },
              keyframes: {
                marquee: {
                  '0%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' },
                },
              },
            fontFamily: {
                sans: ['Epilogue', 'sans-serif'],
            },
            boxShadow: {
                shadow: 'var(--shadow)',
            },
            translate: {
                boxShadowX: '3px',
                boxShadowY: '3px',
                reverseBoxShadowX: '-3px',
                reverseBoxShadowY: '-3px',
            },
            fontWeight: {
                base: '500',
                heading: '700',
            },
            borderRadius: {
                base: '5px',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                contrast: 'var(--contrast)',
                main: 'var(--main)',
                overlay: 'var(--overlay)',
                bg: 'var(--bg)',
                bw: 'var(--bw)',
                blank: 'var(--blank)',
                text: 'var(--text)',
                mtext: 'var(--mtext)',
                border: 'hsl(var(--border))',
                ring: 'hsl(var(--ring))',
                ringOffset: 'var(--ring-offset)',
                secondaryBlack: '#212121',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                input: 'hsl(var(--input))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            animation: {
                marquee: 'marquee 5s linear infinite',
                marquee2: 'marquee2 5s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
