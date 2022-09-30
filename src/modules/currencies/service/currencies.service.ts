import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongo-id.type';
import CurrencyDocument from '../document/currency.document';
import {
  AddRatesDto,
  CreateCurrencyDto,
  DeleteRatesDto,
  FilterCurrencyDto,
  UpdateCurrencyDto,
} from '../dto/currency.dto';
import Currency from '../entity/currency.entity';
import { CurrencyType } from '../types/currency.type';
import { CurrencyArrayType } from '../types/currency-array.type';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectModel(Currency.name)
    private readonly currencyModel: Model<CurrencyDocument>,
  ) {}

  async getCurrencies(params?: FilterCurrencyDto): CurrencyArrayType {
    return await this.currencyModel.find(params).populate('rates').exec();
  }

  async postCurrency(currencyData: CreateCurrencyDto): CurrencyType {
    return await new this.currencyModel(currencyData).save();
  }

  async getCurrency(currencyId: mongoId): CurrencyType {
    return await this.currencyModel
      .findById(currencyId)
      .populate('rates')
      .exec();
  }

  async updateCurrency(
    currencyId: mongoId,
    currencyData: UpdateCurrencyDto,
  ): CurrencyType {
    return await this.currencyModel
      .findByIdAndUpdate(
        currencyId,
        {
          $set: currencyData,
        },
        { new: true },
      )
      .exec();
  }

  async addRates(currencyId: mongoId, rateId: AddRatesDto): CurrencyType {
    return await this.currencyModel.findByIdAndUpdate(
      currencyId,
      {
        $addToSet: { rates: rateId },
      },
      { new: true },
    );
  }

  async deleteCurrency(currencyId: mongoId): CurrencyType {
    return await this.currencyModel.findOneAndRemove(currencyId).exec();
  }

  async deleteRates(
    currencyId: mongoId,
    deletedRates: DeleteRatesDto,
  ): CurrencyType {
    return await this.currencyModel
      .findByIdAndUpdate(
        currencyId,
        { $pull: { rates: { $in: deletedRates.rates } } },
        { new: true },
      )
      .exec();
  }
}
