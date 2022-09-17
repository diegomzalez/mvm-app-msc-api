import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import BillDocument from '../document/BillDocument';
import { CreateBillDto, FilterBillDto, UpdateBillDto } from '../dto/Bill.dto';
import Bill from '../entity/Bill.entity';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async getBills(params?: FilterBillDto): Promise<Bill[]> {
    return await this.billModel.find(params).exec();
  }

  async postBill(bill: CreateBillDto): Promise<Bill> {
    return await new this.billModel(bill).save();
  }

  async getBill(id: Types.ObjectId): Promise<Bill> {
    return await this.billModel.findById(id).exec();
  }

  async updateBill(id: Types.ObjectId, bill: UpdateBillDto): Promise<Bill> {
    return await this.billModel
      .findByIdAndUpdate(id, { $set: bill }, { new: true })
      .exec();
  }

  async deleteBill(id: Types.ObjectId): Promise<Bill> {
    return await this.billModel.findByIdAndRemove(id);
  }
}
