import { DefaultMantineColor, Tuple } from '@mantine/core';
import tailwindShared from '../tailwind-shared-typed';
import mantineExclusiveColors from './mantine-colors';
import tailwindColors, { TailwindColor } from './tailwind-colors';

/**
 * !IMPORTANT
 *
 * Add custom colors on "tailwind-shared.js" following the provided example and
 * they will be added both to the Mantine and Tailwind's theme.
 * */
export type CustomColor =
  | keyof typeof tailwindShared.customColors
  | DefaultMantineColor
  | TailwindColor;
export type Shades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const colors = {
  ...mantineExclusiveColors,
  ...tailwindColors,
  ...tailwindShared.customColors,
} satisfies Record<CustomColor, Tuple<string, 10>>;

export default colors;
