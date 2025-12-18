/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Luxury Palette
        'lux-bg': '#fafaf9',    // Stone 50 (Warm, expensive paper white)
        'lux-black': '#1c1917', // Stone 900 (Sharp, warm black)
        'lux-gray': '#78716c',  // Stone 500 (Elegant sub-text)
        'lux-gold': '#ca8a04',  // Yellow 600 (Metallic Gold)
        'lux-gold-hover': '#a16207', // Darker Gold for hover
      },
      fontFamily: {
        // We will stick to default sans for now, but style it elegantly
      }
    },
  },
  plugins: [],
}