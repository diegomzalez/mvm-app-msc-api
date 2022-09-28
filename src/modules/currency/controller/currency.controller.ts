import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/Endpoint';
import { mongoId } from '../../../types/mongoId.type';
import {
  AddRatesDto,
  CreateCurrencyDto,
  DeleteRatesDto,
  FilterCurrencyDto,
  UpdateCurrencyDto,
} from '../dto/Currency.dto';
import { CurrencyService } from '../service/currency.service';
import CurrencyType from '../types/Currency.type';
import CurrencyArrayType from '../types/CurrencyArray.type';

@Controller(Endpoint.currenciesEndpoint)
export class CurrencyController {
  constructor(private readonly currenciesService: CurrencyService) {}

  @Get()
  async getCurrencies(@Body() params?: FilterCurrencyDto): CurrencyArrayType {
    return await this.currenciesService.getCurrencies(params);
  }

  @Post()
  async postCurrency(@Body() currency: CreateCurrencyDto): CurrencyType {
    return await this.currenciesService.postCurrency(currency);
  }

  @Get(':id')
  async getCurrency(@Param('id', MongoIdPipe) id: mongoId): CurrencyType {
    return await this.currenciesService.getCurrency(id);
  }

  @Put(':id')
  async updateCurrency(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() currency: UpdateCurrencyDto,
  ): CurrencyType {
    return await this.currenciesService.updateCurrency(id, currency);
  }

  @Put(':id/rates')
  async addRates(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() addedRates: AddRatesDto,
  ): CurrencyType {
    return await this.currenciesService.addRates(id, addedRates);
  }

  @Delete(':id')
  async deleteCurrency(@Param('id', MongoIdPipe) id: mongoId): CurrencyType {
    return await this.deleteCurrency(id);
  }

  @Delete(':id/rates')
  async deleteRates(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() deletedRates: DeleteRatesDto,
  ): CurrencyType {
    return await this.currenciesService.deleteRates(id, deletedRates);
  }
}
