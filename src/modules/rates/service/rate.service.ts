import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongo-id.type';
import RateDocument from '../document/rate.document';
import { CreateRateDto, FilterRateDto, UpdateRateDto } from '../dto/rate.dto';
import Rate from '../entity/rate.entity';
import { RateType } from '../types/rate.type';
import { RateArrayType } from '../types/rate-array.type';

@Injectable()
export class RateService {
  constructor(@InjectModel(Rate.name) private rateModel: Model<RateDocument>) {}

  async getRates(params?: FilterRateDto): RateArrayType {
    return await this.rateModel.find(params).populate('currency').exec();
  }

  async postRate(rateData: CreateRateDto): RateType {
    return await new this.rateModel(rateData).save();
  }

  async getRate(rateId: mongoId): RateType {
    return await this.rateModel.findById(rateId).populate('currency').exec();
  }

  async updateRate(rateId: mongoId, rateData: UpdateRateDto): RateType {
    return await this.rateModel
      .findByIdAndUpdate(rateId, { $set: rateData }, { new: true })
      .exec();
  }

  async deleteRate(rateId: mongoId): RateType {
    return await this.rateModel.findByIdAndRemove(rateId).exec();
  }

  async deleteCurrency(rateId: mongoId): RateType {
    return await this.rateModel.findByIdAndUpdate(
      rateId,
      { $unset: { currency: '' } },
      { new: true },
    );
  }
}
