//! ADD THESE REQUIRES. IF YOU'RE USING SRC FOLDER, CHANGE THE PATH
const tailwindShared = require('./theme/tailwind-shared');
const { DEFAULT_THEME: { colors: mantineColors }, } = require('@mantine/core');

//! ADD THIS HELPER FUNCTION
const appendUnitToValues = (obj, unit) => ({
  ...Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, `${value}${unit}`])
  ),
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...

  //! ADD EVERYTHING INSIDE HERE
  theme: {
    extend: {
      borderRadius: { ...appendUnitToValues(tailwindShared.radius, 'px') },
      screens: { ...appendUnitToValues(tailwindShared.breakpoints, 'px') },
      margin: { ...appendUnitToValues(tailwindShared.spacing, 'px') },
      padding: { ...appendUnitToValues(tailwindShared.spacing, 'px') },
      colors: {
        ...mantineColors,
        ...tailwindShared.customColors,
        primary: colors[tailwindShared.PRIMARY_COLOR],
      },
    },
  },

  // ...
};
