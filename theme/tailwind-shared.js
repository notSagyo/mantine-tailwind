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
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
};
