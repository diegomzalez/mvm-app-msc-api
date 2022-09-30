import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/endpoint';
import { CurrenciesController } from '../controller/currencies.controller';
import Currency from '../entity/currency.entity';
import CurrencySchema from '../schema/currency.schema';
import { CurrenciesService } from '../service/currencies.service';

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
  providers: [CurrenciesService],
  controllers: [CurrenciesController],
})
export class CurrenciesModule {}
