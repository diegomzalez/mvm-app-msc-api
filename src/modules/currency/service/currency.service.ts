import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongoId.type';
import CurrencyDocument from '../document/Currency.document';
import {
  AddRatesDto,
  CreateCurrencyDto,
  DeleteRatesDto,
  FilterCurrencyDto,
  UpdateCurrencyDto,
} from '../dto/Currency.dto';
import Currency from '../entity/Currency.entity';
import CurrencyType from '../types/Currency.type';
import CurrencyArrayType from '../types/CurrencyArray.type';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel(Currency.name)
    private readonly currencyModel: Model<CurrencyDocument>,
  ) {}

  async getCurrencies(params?: FilterCurrencyDto): CurrencyArrayType {
    return await this.currencyModel.find(params).populate('rates').exec();
  }

  async postCurrency(currency: CreateCurrencyDto): CurrencyType {
    return await new this.currencyModel(currency).save();
  }

  async getCurrency(id: mongoId): CurrencyType {
    return await this.currencyModel.findById(id).populate('rates').exec();
  }

  async updateCurrency(id: mongoId, currency: UpdateCurrencyDto): CurrencyType {
    return await this.currencyModel
      .findByIdAndUpdate(
        id,
        {
          $set: currency,
        },
        { new: true },
      )
      .exec();
  }

  async addRates(id: mongoId, addedRates: AddRatesDto): CurrencyType {
    return await this.currencyModel.findByIdAndUpdate(
      id,
      {
        $addToSet: { rates: addedRates.rates },
      },
      { new: true },
    );
  }

  async deleteCurrency(id: mongoId): CurrencyType {
    return await this.currencyModel.findOneAndRemove(id).exec();
  }

  async deleteRates(id: mongoId, deletedRates: DeleteRatesDto): CurrencyType {
    return await this.currencyModel
      .findByIdAndUpdate(
        id,
        { $pull: { rates: { $in: deletedRates.rates } } },
        { new: true },
      )
      .exec();
  }
}
