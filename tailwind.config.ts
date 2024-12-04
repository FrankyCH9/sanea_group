module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add your paths here
  ],
  theme: {
    extend: {
      animation: {
        // Any custom animations you need
      },
      transitionDuration: {
        '500': '500ms',
      },
      // Add any additional configuration for your animation or utility classes
    },
  },
  plugins: [],
}
