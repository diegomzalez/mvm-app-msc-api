import {
  ConfigFactory,
  ConfigModuleOptions,
  ConfigObject,
} from '@nestjs/config';
import schema from '../../joiSchemas/schema';

import environments from './environments';

export default function (
  config: ConfigFactory<ConfigObject>,
): ConfigModuleOptions {
  return {
    envFilePath: environments[process.env.NODE_ENV],
    load: [config],
    isGlobal: true,
    validationSchema: schema,
  };
}
