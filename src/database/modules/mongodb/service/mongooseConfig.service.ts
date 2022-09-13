import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

interface DatabaseConfig {
  mongo: MongoConfig;
}

interface MongoConfig {
  conn: string;
  host: string;
  port: number;
  user: string;
  pass: string;
  dbName: string;
}

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService<DatabaseConfig>) {}
  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const mongoConfig = this.configService.get<DatabaseConfig>(
      'database.mongo',
      {
        infer: true,
      },
    );
    return {
      uri: `${mongoConfig.conn}://${mongoConfig.host}:${mongoConfig.port}`,
      user: mongoConfig.user,
      pass: mongoConfig.pass,
      dbName: mongoConfig.dbName,
    };
  }
}
