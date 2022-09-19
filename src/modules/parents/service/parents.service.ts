import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import {
  CreateParentDto,
  DeleteChildrenDto,
  FilterParentDto,
  UpdateParentDto,
} from '../dto/parent.dto';
import Parent from '../entity/Parent.entity';
import ParentDocument from '../types/ParentDocument.type';
import { ParentType, ParentArrayType } from '../types/Parent.types';
import { mongoId } from 'src/types/mongoId.type';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel(Parent.name) private parentModel: Model<ParentDocument>,
  ) {}

  async getParents(params?: FilterParentDto): ParentArrayType {
    return this.parentModel
      .find()
      .populate('children')
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createParent(parent: CreateParentDto): ParentType {
    return await new this.parentModel(parent).save();
  }

  async getParent(id: mongoId): ParentType {
    return await this.parentModel.findById(id).populate('children').exec();
  }

  async updateParent(id: mongoId, parent: UpdateParentDto): ParentType {
    return await this.parentModel.findByIdAndUpdate(
      id,
      {
        $addToSet: parent,
      },
      { new: true },
    );
  }

  async deleteParent(id: mongoId): ParentType {
    return await this.parentModel.findByIdAndDelete(id).exec();
  }

  async deleteChildren(id: mongoId, childrenId: DeleteChildrenDto): ParentType {
    const parent = await this.parentModel.findById(id).exec();
    parent.children.pull(childrenId.children);
    return parent.save();
  }
}
