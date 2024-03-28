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
        // accent
        blue: '#003366',
        orange: '#FFA07A',
        // neutral
        gray: {
          // secondary
          light: '#E0E0E0',
          DEFAULT: '#CCCCCC',
          dark: '#333333',
        },
        // error
        error: '#D8000C',
        // success
        success: '#4BB543',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')],
};
export default config;
