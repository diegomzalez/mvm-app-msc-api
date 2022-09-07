import { ConfigModule, registerAs } from '@nestjs/config';
import config from './env.config';
import { environments } from './environments';

export default class Config {
  static register = registerAs('config', () => {
    return config;
  });
  static init = ConfigModule.forRoot({
    envFilePath: environments[process.env.NODE_ENV],
    load: [this.register],
    isGlobal: true,
  });
}
