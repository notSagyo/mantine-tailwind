import { Tuple } from '@mantine/core';

type MantineExclusiveColor = 'dark' | 'grape';

const mantineExclusiveColors: Record<MantineExclusiveColor, Tuple<string, 10>> = {
  dark: [
    '#C1C2C5',
    '#A6A7AB',
    '#909296',
    '#5C5F66',
    '#373A40',
    '#2C2E33',
    '#25262B',
    '#1A1B1E',
    '#141517',
    '#101113',
  ],
  grape: [
    '#F8F0FC',
    '#F3D9FA',
    '#EEBEFA',
    '#E599F7',
    '#DA77F2',
    '#CC5DE8',
    '#BE4BDB',
    '#AE3EC9',
    '#9C36B5',
    '#862E9C',
  ],
};

export default mantineExclusiveColors;
