import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config/configModule/registerAs/registerAs';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    console.log(this.configService.database);
    return `Hello, welcome to the MVM-MSC API :) `;
  }
}
