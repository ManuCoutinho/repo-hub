import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      colors: {
        brand: {
          'border-line': '#E9ECEF',
          'grey-dark': '#4E4E4E',
          'grey-neutral': '#616161',
          'primary-dark': '#329599',
          'primary-light': '#D4EDEE',
          'white-matte': '#F3F3F5',
          danger: '#FC4B6C',
          placeholder: '#8C8C8C',
          primary: '#32C0C6',
          success: '#5CB85C',
          warning: '#FFB22B'
        }
      }
    }
  },
  plugins: []
}
export default config
