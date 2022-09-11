import { DynamicModule } from '@nestjs/common';
import { ConfigFactory, ConfigModule, ConfigObject } from '@nestjs/config';

import forRootConfig from './forRootConfig';

export default function (
  registerAs: ConfigFactory<ConfigObject>,
): DynamicModule {
  return ConfigModule.forRoot(forRootConfig());
}
