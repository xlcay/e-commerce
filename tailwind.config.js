/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      // Custom Screens (Breakpoints)
      screens: {
        'mobile-md': { 'min': '320px', 'max': '425px' }, // Custom breakpoint for devices between 320px and 425px
      },

      // Custom Font Size
      fontSize: {
        xs: '1px',
      },

      // Custom Font Family
      fontFamily: {
        kumbh: ['Kumbh-Sans', 'sans-serif'],
      },

      // Custom Colors
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        'lightbox': 'hsl(0, 0%, 0%, 0.75)',
      },
    },
  },
  plugins: [],
};

// // - Very dark blue: hsl(220, 13%, 13%)
// - Dark grayish blue: hsl(219, 9%, 45%)
// - Grayish blue: hsl(220, 14%, 75%)
// - Light grayish blue: hsl(223, 64%, 98%)
// - White: hsl(0, 0%, 100%)
// - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%) //