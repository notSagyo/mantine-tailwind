const { DEFAULT_THEME } = require('@mantine/core');

module.exports = {
  /** @type { import('./colors/tailwind-colors').TailwindColor | import('@mantine/core').DefaultMantineColor} */
  PRIMARY_COLOR: 'example',
  customColors: {
    /** @type { import('@mantine/core').Tuple<string, 10> } */
    example: [
      '#f9f2e5',
      '#e4ddcb',
      '#d0c8ad',
      '#beb48e',
      '#ab9a6f',
      '#917d55',
      '#715d41',
      '#51412e',
      '#302419',
      '#120800',
    ],
  },
  breakpoints: DEFAULT_THEME.breakpoints,
  spacing: DEFAULT_THEME.spacing,
  radius: DEFAULT_THEME.radius,
};
