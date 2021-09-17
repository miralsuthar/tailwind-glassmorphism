module.exports = {
  purge: {
    enabled: false,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      'gradient-radial':
        'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'gradient-radial-at-t':
        'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      'gradient-radial-at-b':
        'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
      'gradient-radial-at-l':
        'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
      'gradient-radial-at-r':
        'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
      'gradient-radial-at-tl':
        'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
      'gradient-radial-at-tr':
        'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
      'gradient-radial-at-bl':
        'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
      'gradient-radial-at-br':
        'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#120235',
      secondary: '#3E2B68',
      greend: '#17B486',
      dark: '#111927',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
