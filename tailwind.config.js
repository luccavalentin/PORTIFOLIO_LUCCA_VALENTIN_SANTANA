/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matrix-cyan': '#00FFFF',
        'matrix-cyan-secondary': '#06B6D4',
        'matrix-cyan-dark': '#0891B2',
        'matrix-bg': '#020617',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

