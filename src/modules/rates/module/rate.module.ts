import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/endpoint';
import { RateController } from '../controller/rate.controller';
import Rate from '../entity/rate.entity';
import RateSchema from '../schema/rate.schema';
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
