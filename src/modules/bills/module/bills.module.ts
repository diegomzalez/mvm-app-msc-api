import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/endpoint';
import { BillsController } from '../controller/bills.controller';
import Bill from '../entity/bill.entity';
import BillSchema from '../schema/bill.schema';
import { BillsService } from '../service/bills.service';

@Module({
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Bill.name,
        schema: BillSchema,
      },
    ]),
  ],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
