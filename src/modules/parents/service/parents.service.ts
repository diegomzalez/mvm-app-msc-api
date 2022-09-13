import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateParentDto, UpdateParentDto } from '../dto/parent.dto';
import Parent from '../entity/Parent.entity';
import ParentDocument from '../types/ParentDocument.type';
import { ParentType, ParentArrayType } from '../types/Parent.types';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel(Parent.name) private parentModel: Model<ParentDocument>,
  ) {}
  public async getParents(): ParentArrayType {
    return this.parentModel.find().exec();
  }
  public async createParent(parent: CreateParentDto): ParentType {
    const createdParent = new this.parentModel(parent);
    return await createdParent.save();
  }
  public async getParent(id: string): ParentType {
    return this.parentModel.findById(id).exec();
  }
  public async updateParent(id: string, parent: UpdateParentDto): ParentType {
    return await this.parentModel.findByIdAndUpdate(id, parent);
  }
  public async deleteParent(id: string) {
    await this.parentModel.findByIdAndDelete(id).exec();
  }
}
