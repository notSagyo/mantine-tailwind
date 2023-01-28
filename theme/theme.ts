import { MantineThemeOverride, Tuple } from '@mantine/core';
import colors, { CustomColor, Shades } from './colors/colors';
import tailwindShared from './tailwind-shared-typed';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColor | keyof typeof colors, Tuple<CustomColor, 10>>;
  }
}

export const { PRIMARY_COLOR } = tailwindShared;
export const PRIMARY_SHADE: Shades = 6;

//! Import and use destructuring on your MantineProvider's theme
//* <MantineProvider theme={{ ...themeOverride, ...OTHER-SETTINGS }}>
const themeOverride: MantineThemeOverride = {
  primaryColor: PRIMARY_COLOR,
  primaryShade: PRIMARY_SHADE,
  breakpoints: tailwindShared.breakpoints,
  fontSizes: tailwindShared.fontSizes,
  radius: tailwindShared.radius,
  spacing: tailwindShared.spacing,
  colors: {
    ...colors,
  },
};

export default themeOverride;
