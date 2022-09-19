import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import BillDocument from '../document/BillDocument';
import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/Bill.dto';
import Bill from '../entity/Bill.entity';
import { BillType, BillTypeArray } from '../types/Bill.types';
import { mongoId } from '../../../types/mongoId.type';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async getBills(params?: FilterBillDto): BillTypeArray {
    return await this.billModel.find(params).exec();
  }

  async postBill(bill: CreateBillDto): BillType {
    return await new this.billModel(bill).save();
  }

  async getBill(id: mongoId): BillType {
    return await this.billModel.findById(id).exec();
  }

  async updateBill(id: mongoId, bill: UpdateBillDto): BillType {
    return await this.billModel
      .findByIdAndUpdate(id, { $addToSet: bill }, { new: true })
      .exec();
  }

  async deleteBill(id: mongoId): BillType {
    return await this.billModel.findByIdAndRemove(id);
  }
}
