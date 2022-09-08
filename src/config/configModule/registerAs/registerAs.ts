import { registerAs } from '@nestjs/config';

import envConfig from './envConfig';

export default registerAs('envConfig', () => {
  return envConfig;
});
