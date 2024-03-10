import type { Config } from 'tailwindcss';
import { appConfig } from './config/app';

const config: Config = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: appConfig.colors,
    },
  },
};

export default config;
