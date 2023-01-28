/**
 * !IMPORTANT
 * Add custom colors on "tailwind-shared.js" following the provided example and they will be added
 * both to the Mantine and Tailwind's theme. It shouldn't be necessary to modify this file.
 */

import { DefaultMantineColor, DEFAULT_THEME, Tuple } from '@mantine/core';
import tailwindColors from 'tailwindcss/colors';
import tailwindShared from './tailwind-shared';

export type TailwindColor = keyof Omit<
  typeof tailwindColors,
  'current' | 'inherit' | 'transparent' | 'black' | 'white'
>;
export type Color = DefaultMantineColor | TailwindColor | keyof typeof tailwindShared.customColors;
export type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Tailwind colors: { color: { "50": "#NNNNNN", ... } } \
 * in mantine notation: { color: [#NNNNNN], ... }
 */
const tailwindColorsForMantine: Record<TailwindColor, Tuple<string, 10>> = Object.fromEntries(
  Object.entries(tailwindColors)
    .filter(([, value]) => typeof value === 'object')
    .map(([key, value]: any) => [key, Object.values(value)])
);

const colors = {
  ...DEFAULT_THEME.colors,
  ...tailwindColorsForMantine,
  ...tailwindShared.customColors,
} satisfies Record<Color, Tuple<string, 10>>;

export default colors;
