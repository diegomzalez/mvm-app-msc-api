import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import {
  CreateParentDto,
  FilterParentDto,
  UpdateParentDto,
} from '../dto/parent.dto';
import Parent from '../entity/Parent.entity';
import ParentDocument from '../types/ParentDocument.type';
import { ParentType, ParentArrayType } from '../types/Parent.types';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel(Parent.name) private parentModel: Model<ParentDocument>,
  ) {}
  public async getParents(params?: FilterParentDto): ParentArrayType {
    return this.parentModel
      .find()
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }
  public async createParent(parent: CreateParentDto): ParentType {
    return await new this.parentModel(parent).save();
  }
  public async getParent(id: string): ParentType {
    return await this.parentModel.findById(id).exec();
  }
  public async updateParent(id: string, parent: UpdateParentDto): ParentType {
    return await this.parentModel.findByIdAndUpdate(
      id,
      {
        $set: parent,
      },
      { new: true },
    );
  }
  public async deleteParent(id: string) {
    return await this.parentModel.findByIdAndDelete(id).exec();
  }
}
