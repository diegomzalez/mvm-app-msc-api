import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return `Hello, welcome to the MVM-MSC API :) ${this.configService.get<number>(
      'PORT',
    )}`;
  }
}
