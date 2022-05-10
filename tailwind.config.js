module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4FC6DB',
        secondary: '#5E6C84',
      },
      boxShadow: {
        "3xl": "0 4px 3px rgb(0 0 0 / 0.07)",
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      transitionProperty: {
        'width': 'width'
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fill, minmax(14.5rem, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
