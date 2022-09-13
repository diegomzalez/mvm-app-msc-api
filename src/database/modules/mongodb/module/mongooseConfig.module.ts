import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import databaseConfiguration from '../../../../../config/database.config';
import { MongooseConfigService } from '../service/mongooseConfig.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    ConfigModule.forRoot({
      load: [databaseConfiguration],
    }),
  ],
  providers: [MongooseConfigService],
  exports: [MongooseModule],
})
export class MongooseConfigModule {}
