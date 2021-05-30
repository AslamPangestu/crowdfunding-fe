module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        outline: '0 0 0 1px rgba(66, 153, 225, 0.5)',
      },
      colors: {
        'orange-action': '#FF872E',
        'green-action': '#1ABC9C',
        'purple-hover': '#4C52F8',
        'purple-hover-stroke': '#8286FF',
        'purple-progress': '#3B41E3',
      },
      borderRadius: {
        20: '20px',
        10: '10px',
      },
    },
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
  variants: {},
  plugins: [],
}
