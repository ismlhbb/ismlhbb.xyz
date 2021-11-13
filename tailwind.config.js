/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: `var(--primary)`,
          darker: `var(--primary-darker)`,
          lighter: `var(--primary-lighter)`,
          lightest: `var(--primary-lightest)`,
        },
        'on-primary': `var(--white)`, // color on top of element with primary col
        secondary: {
          DEFAULT: `var(--secondary)`,
          lighter: `var(--secondary-lighter)`,
          lightest: `var(--secondary-lightest)`,
        },
        'on-secondary': '#000000', // color on top of element with secondary color
        dark: '#222222',
        'green-bright': `var(--green-bright)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
