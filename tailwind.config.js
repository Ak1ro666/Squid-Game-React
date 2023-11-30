/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'squid-pink': '#ff287e',
         },
         keyframes: {
            show: {
               0: {
                  opacity: 1,
               },
               50: {
                  opacity: 0.5,
               },
               100: {
                  opacity: 0,
               },
            },
         },
         animation: {
            show: 'show .5s ease-in-out',
         },
      },
      transitionTimingFunction: {
         DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
         DEFAULT: '400ms',
      },
   },
   plugins: [],
};
