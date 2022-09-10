import { registerAs } from '@nestjs/config';

import configTypes from './configTypes';

export default registerAs('config', () => {
  return configTypes;
});
