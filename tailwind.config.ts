import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forestGreen: '#2d5a3d',
        freshGreen: '#3d7a4e',
        golden: '#c9a961',
        earthBrown: '#8B7355',
        lightGray: '#f8f9fa',
        darkText: '#333333',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

export default config

