import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongo-id.type';

import Month from '../entity/month.entity';
import MonthDocument from '../document/month.document';
import {
  AddBillsDto,
  CreateMonthDto,
  deleteBillsDto,
  FilterMonthDto,
  UpdateMonthDto,
} from '../dto/month.dto';
import { MonthType } from '../types/month.type';
import { MonthTypeArray } from '../types/month-array.type';

@Injectable()
export class MonthsService {
  constructor(
    @InjectModel(Month.name) private monthModel: Model<MonthDocument>,
  ) {}
  async getMonths(params?: FilterMonthDto): MonthTypeArray {
    return await this.monthModel.find(params).populate('bills').exec();
  }

  async postMonth(monthData: CreateMonthDto): MonthType {
    return await new this.monthModel(monthData).save();
  }

  async getMonth(monthId: mongoId): MonthType {
    return await this.monthModel.findById(monthId).populate('bills').exec();
  }

  async updateMonth(monthId: mongoId, monthData: UpdateMonthDto): MonthType {
    return await this.monthModel
      .findByIdAndUpdate(monthId, { $set: monthData }, { new: true })
      .exec();
  }

  async addBills(monthId: mongoId, billId: AddBillsDto): MonthType {
    return this.monthModel
      .findByIdAndUpdate(monthId, { $addToSet: billId }, { new: true })
      .exec();
  }

  async deleteMonth(monthId: mongoId): MonthType {
    return await this.monthModel.findByIdAndDelete(monthId).exec();
  }

  async deleteBills(monthId: mongoId, billId: deleteBillsDto): MonthType {
    return await this.monthModel
      .findByIdAndUpdate(
        monthId,
        {
          $pull: { bills: { $in: billId.bills } },
        },
        { new: true },
      )
      .exec();
  }
}
