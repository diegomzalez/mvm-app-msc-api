import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongoId.type';
import RateDocument from '../document/Rate.document';
import { CreateRateDto, FilterRateDto, UpdateRateDto } from '../dto/Rate.dto';
import Rate from '../entity/Rate.entity';
import RateType from '../types/Rate.type';
import RateArrayType from '../types/RateArray.type';

@Injectable()
export class RateService {
  constructor(@InjectModel(Rate.name) private rateModel: Model<RateDocument>) {}

  async getRates(params?: FilterRateDto): RateArrayType {
    return await this.rateModel.find(params).populate('currency').exec();
  }

  async postRate(rate: CreateRateDto): RateType {
    return await new this.rateModel(rate).save();
  }

  async getRate(id: mongoId): RateType {
    return await this.rateModel.findById(id).populate('currency').exec();
  }

  async updateRate(id: mongoId, rate: UpdateRateDto): RateType {
    return await this.rateModel
      .findByIdAndUpdate(id, { $set: rate }, { new: true })
      .exec();
  }

  async deleteRate(id: mongoId): RateType {
    return await this.rateModel.findByIdAndRemove(id).exec();
  }
}
