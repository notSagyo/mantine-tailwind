import { MantineThemeOverride, Tuple } from '@mantine/core';
import colors, { Color, Shade } from './colors';
import tailwindShared from './tailwind-shared';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<Color, Tuple<Color, 10>>;
  }
}

export const { PRIMARY_COLOR } = tailwindShared;
export const PRIMARY_SHADE: Shade = 6;

//! Import and use destructuring on your MantineProvider's theme
//* <MantineProvider theme={{ ...themeOverride, ...OTHER_SETTINGS }}>
const themeOverride: MantineThemeOverride = {
  primaryColor: PRIMARY_COLOR,
  primaryShade: PRIMARY_SHADE,
  breakpoints: tailwindShared.breakpoints,
  radius: tailwindShared.radius,
  spacing: tailwindShared.spacing,
  colors: {
    ...colors,
  },
};

export default themeOverride;
