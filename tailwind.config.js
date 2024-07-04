import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#194113',       // Color principal
        'light': '#327d26',         // Color verde claro
        'medium': '#265f1c',        // Color verde medio
        'dark': '#0d2409',          // Color verde oscuro
        'almost-black': '#000600',  // Color casi negro
        'ultra-light': '#DCF4EE',   // Este color no estaba en la paleta proporcionada
        'skyblue': '#338AF3'        // Este color no estaba en la paleta proporcionada
      },
      fontFamily: {
        title: ['Gelasio']
      },
      spacing: {
        '100': '26rem'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],


}

