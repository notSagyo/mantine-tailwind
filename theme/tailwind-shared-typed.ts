import { Tuple } from '@mantine/core';
import tailwindSharedJS from './tailwind-shared';

// TODO: Delete this file once there's support for @satisfies JSDoc
const customColors = tailwindSharedJS.customColors satisfies Record<string, Tuple<string, 10>>;

const tailwindShared = {
  ...tailwindSharedJS,
  customColors,
};

export default tailwindShared;
