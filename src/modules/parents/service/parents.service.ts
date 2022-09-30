import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import {
  AddChildrenDto,
  CreateParentDto,
  DeleteChildrenDto,
  FilterParentDto,
  UpdateParentDto,
} from '../dto/parent.dto';
import Parent from '../entity/parent.entity';
import { ParentDocument } from '../document/parent-document.type';
import { ParentType } from '../types/parent.types';
import { mongoId } from 'src/types/mongo-id.type';
import { ParentArrayType } from '../types/parent-array.type';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel(Parent.name) private parentModel: Model<ParentDocument>,
  ) {}

  async getParents(params?: FilterParentDto): ParentArrayType {
    return this.parentModel
      .find()
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createParent(parent: CreateParentDto): ParentType {
    return await new this.parentModel(parent).save();
  }

  async getParent(parentId: mongoId): ParentType {
    return await this.parentModel
      .findById(parentId)
      .populate('children')
      .exec();
  }

  async updateParent(parentId: mongoId, parent: UpdateParentDto): ParentType {
    return await this.parentModel.findByIdAndUpdate(
      parentId,
      {
        $set: parent,
      },
      { new: true },
    );
  }

  async addChildren(parentId: mongoId, studentId: AddChildrenDto): ParentType {
    return await this.parentModel
      .findByIdAndUpdate(
        parentId,
        {
          $addToSet: studentId,
        },
        { new: true },
      )
      .exec();
  }

  async deleteParent(parentId: mongoId): ParentType {
    return await this.parentModel.findByIdAndDelete(parentId).exec();
  }

  async deleteChildren(
    parentId: mongoId,
    studentId: DeleteChildrenDto,
  ): ParentType {
    return await this.parentModel
      .findByIdAndUpdate(
        parentId,
        {
          $pull: { children: { $in: studentId.children } },
        },
        { new: true },
      )
      .exec();
  }
}
