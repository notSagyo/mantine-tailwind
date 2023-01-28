const colors = require('tailwindcss/colors');

//! ADD THIS. IF YOU'RE USING SRC FOLDER, CHANGE THE PATH
const tailwindShared = require('./settings/theme/tailwind-shared');

//! ADD THIS HELPER FUNCTION
const appendUnitToValues = (obj, unit) => ({
  ...Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, `${value}${unit}`])
  ),
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {

    // !ADD EVERYTHING INSIDE HERE
    extend: {
      fontSize: { ...appendUnitToValues(tailwindShared.fontSizes, 'px') },
      borderRadius: { ...appendUnitToValues(tailwindShared.radius, 'px') },
      screens: { ...appendUnitToValues(tailwindShared.breakpoints, 'px') },
      margin: { ...appendUnitToValues(tailwindShared.spacing, 'px') },
      padding: { ...appendUnitToValues(tailwindShared.spacing, 'px') },
      colors: {
        ...tailwindShared.customColors,
        primary: colors[tailwindShared.PRIMARY_COLOR],
      },
      
    },
  },
  plugins: [],
};