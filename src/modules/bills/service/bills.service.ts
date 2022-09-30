import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import BillDocument from '../document/bill.document';
import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/bill.dto';
import Bill from '../entity/bill.entity';
import { BillType } from '../types/bill.type';
import { mongoId } from '../../../types/mongo-id.type';
import { BillTypeArray } from '../types/bill-array.type';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async getBills(params?: FilterBillDto): BillTypeArray {
    return await this.billModel.find(params).exec();
  }

  async postBill(billData: CreateBillDto): BillType {
    return await new this.billModel(billData).save();
  }

  async getBill(billId: mongoId): BillType {
    return await this.billModel.findById(billId).populate('currency').exec();
  }

  async updateBill(billId: mongoId, billData: UpdateBillDto): BillType {
    return await this.billModel
      .findByIdAndUpdate(billId, { $set: billData }, { new: true })
      .exec();
  }

  async deleteBill(billId: mongoId): BillType {
    return await this.billModel.findByIdAndRemove(billId);
  }
}
