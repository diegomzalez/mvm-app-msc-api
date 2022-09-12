import { ConfigModule } from '@nestjs/config';

import forRootConfig from './forRootConfig';

export default function () {
  return ConfigModule.forRoot(forRootConfig());
}
