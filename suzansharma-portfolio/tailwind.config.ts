import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme:  {
    extend: {
      fontFamily: {
        sans: ['Inter', ... defaultTheme.fontFamily.sans],
        title: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: {
          DEFAULT: '#00d9ff',
          50: '#f0f9ff',
          100: '#e1f8ff',
          200: '#c1f0ff',
          300: '#a1e8ff',
          400: '#81e0ff',
          500: '#61d8ff',
          600: '#41d0ff',
          700: '#21c8ff',
          800: '#00d9ff',
          900: '#0091b3',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float:  {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};