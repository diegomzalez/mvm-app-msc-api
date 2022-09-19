import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import Month from '../entity/Month.entity';
import MonthDocument from '../document/MonthDocument';
import {
  CreateMonthDto,
  deleteBillsDto,
  FilterMonthDto,
  UpdateMonthDto,
} from '../dto/Month.dto';
import { MonthType, MonthTypeArray } from '../types/Month.type';

@Injectable()
export class MonthsService {
  constructor(
    @InjectModel(Month.name) private monthModel: Model<MonthDocument>,
  ) {}
  async getMonths(params?: FilterMonthDto): MonthTypeArray {
    return await this.monthModel.find(params).populate('bills').exec();
  }

  async postMonth(month: CreateMonthDto): MonthType {
    return await new this.monthModel(month).save();
  }

  async getMonth(id: Types.ObjectId): MonthType {
    return await this.monthModel.findById(id).populate('bills').exec();
  }

  async updateMonth(id: Types.ObjectId, month: UpdateMonthDto): MonthType {
    return await this.monthModel
      .findByIdAndUpdate(id, { $addToSet: month }, { new: true })
      .exec();
  }

  async deleteMonth(id: Types.ObjectId): MonthType {
    return await this.monthModel.findByIdAndDelete(id).exec();
  }

  async deleteBills(
    monthId: Types.ObjectId,
    billsId: deleteBillsDto,
  ): MonthType {
    const month = await this.monthModel.findById(monthId).exec();
    month.bills.pull(billsId.bills);
    await month.save();
    return month;
  }
}
