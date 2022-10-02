import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/endpoint';
import { mongoId } from '../../../types/mongo-id.type';
import {
  AddRatesDto,
  CreateCurrencyDto,
  DeleteRatesDto,
  FilterCurrencyDto,
  UpdateCurrencyDto,
} from '../dto/currency.dto';
import { CurrenciesService } from '../service/currencies.service';
import { CurrencyType } from '../types/currency.type';
import { CurrencyArrayType } from '../types/currency-array.type';

@ApiTags('currencies')
@Controller(Endpoint.currenciesEndpoint)
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get()
  async getCurrencies(@Body() params?: FilterCurrencyDto): CurrencyArrayType {
    return await this.currenciesService.getCurrencies(params);
  }

  @Post()
  async postCurrency(@Body() currencyData: CreateCurrencyDto): CurrencyType {
    return await this.currenciesService.postCurrency(currencyData);
  }

  @Get(':currencyId')
  async getCurrency(
    @Param('currencyId', MongoIdPipe) currencyId: mongoId,
  ): CurrencyType {
    return await this.currenciesService.getCurrency(currencyId);
  }

  @Put(':currencyId')
  async updateCurrency(
    @Param('currencyId', MongoIdPipe) currencyId: mongoId,
    @Body() currencyData: UpdateCurrencyDto,
  ): CurrencyType {
    return await this.currenciesService.updateCurrency(
      currencyId,
      currencyData,
    );
  }

  @Put(':currencyId/rates')
  async addRates(
    @Param('currencyId', MongoIdPipe) currencyId: mongoId,
    @Body() rateId: AddRatesDto,
  ): CurrencyType {
    return await this.currenciesService.addRates(currencyId, rateId);
  }

  @Delete(':currencyId')
  async deleteCurrency(
    @Param('currencyId', MongoIdPipe) currencyId: mongoId,
  ): CurrencyType {
    return await this.currenciesService.deleteCurrency(currencyId);
  }

  @Delete(':currencyId/rates')
  async deleteRates(
    @Param('currencyId', MongoIdPipe) currencyId: mongoId,
    @Body() ratedId: DeleteRatesDto,
  ): CurrencyType {
    return await this.currenciesService.deleteRates(currencyId, ratedId);
  }
}
