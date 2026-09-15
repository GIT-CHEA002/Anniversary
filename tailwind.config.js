/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFDFB',
          blush: '#FFE1EA',
          blushSoft: '#FFF1F5',
          pink: '#F1A3BB',
          rose: '#D65C7E',
          deep: '#8A3355',
          ink: '#4A2233',
          line: 'rgba(138,51,85,0.18)',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0' },
          '8%': { opacity: '0.55' },
          '92%': { opacity: '0.4' },
          '100%': { transform: 'translateY(110vh) translateX(var(--drift,30px)) rotate(200deg)', opacity: '0' },
        },
        pagein: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fall: 'fall linear forwards',
        pagein: 'pagein 0.5s ease',
      },
    },
  },
  plugins: [],
}
