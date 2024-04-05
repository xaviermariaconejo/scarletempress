import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // prymary
        scarlet: {
          '50': '#fff3ec',
          '100': '#ffe4d3',
          '200': '#ffc5a5',
          '300': '#ff9d6d',
          '400': '#ff6832',
          '500': '#ff400a',
          '600': '#ff2400',
          '700': '#cc1402',
          '800': '#a1120b',
          '900': '#82120c',
          '950': '#460504',
        },
        // secondary
        white: {
          light: '#F8F8F8',
          DEFAULT: '#FFFFFF',
          dark: '#F0F0F0',
        },
        // neutral
        gray: {
          light: '#E0E0E0',
          DEFAULT: '#CCCCCC',
          dark: '#333333',
        },
        // social
        etsy: '#F16521',
        whatsapp: '#25D366',
        facebook: '#3b5998',
        // error
        error: '#D8000C',
        // success
        success: '#4BB543',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')],
};

export default config;
