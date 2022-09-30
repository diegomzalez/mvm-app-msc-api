import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/endpoint';
import { MonthsController } from '../controller/months.controller';
import Month from '../entity/month.entity';
import MonthSchema from '../schema/Month.schema';
import { MonthsService } from '../service/months.service';

@Module({
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Month.name,
        schema: MonthSchema,
      },
    ]),
  ],
  controllers: [MonthsController],
  providers: [MonthsService],
})
export class MonthsModule {}
