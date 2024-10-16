import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    gridTemplateRows: {
      app: 'min-content max-content',
      ...defaultTheme.gridTemplateRows,
    },
  },
  plugins: [],
}
export default config
