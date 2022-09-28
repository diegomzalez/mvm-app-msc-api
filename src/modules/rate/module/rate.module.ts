import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/Endpoint';
import { RateController } from '../controller/rate.controller';
import Rate from '../entity/Rate.entity';
import RateSchema from '../schema/Rate.schema';
import { RateService } from '../service/rate.service';

@Module({
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Rate.name,
        schema: RateSchema,
      },
    ]),
  ],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
