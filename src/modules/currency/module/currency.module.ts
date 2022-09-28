import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/Endpoint';
import { CurrencyController } from '../controller/currency.controller';
import Currency from '../entity/Currency.entity';
import CurrencySchema from '../schema/Currency.schema';
import { CurrencyService } from '../service/currency.service';

@Module({
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Currency.name,
        schema: CurrencySchema,
      },
    ]),
  ],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}
