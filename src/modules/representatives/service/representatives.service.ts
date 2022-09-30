import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { mongoId } from '../../../types/mongo-id.type';
import {
  AddStudentChildrenDto,
  CreateRepresentativeDto,
  DeleteStudentChildrenDto,
  FilterRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/representative.entity';
import { RepresentativeDocument } from '../document/representative.document';
import { RepresentativeType } from '../types/representative.types';
import { RepresentativeArrayType } from '../types/representative-array.type';

@Injectable()
export class RepresentativesService {
  constructor(
    @InjectModel(Representative.name)
    private representativeModel: Model<RepresentativeDocument>,
  ) {}

  async getRepresentatives(
    params?: FilterRepresentativeDto,
  ): RepresentativeArrayType {
    return await this.representativeModel
      .find(params)
      .populate('studentChildren')
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createRepresentative(
    representative: CreateRepresentativeDto,
  ): RepresentativeType {
    return await new this.representativeModel(representative).save();
  }

  async getRepresentative(id: mongoId): RepresentativeType {
    return await this.representativeModel.findById(id).exec();
  }

  async updateRepresentative(
    id: mongoId,
    representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.representativeModel
      .findByIdAndUpdate(
        id,
        {
          $set: representative,
        },
        { new: true },
      )
      .exec();
  }

  async addStudentChildren(
    representativeId: mongoId,
    studentId: AddStudentChildrenDto,
  ): RepresentativeType {
    return await this.representativeModel
      .findOneAndUpdate(
        representativeId,
        {
          $addToSet: studentId,
        },
        { new: true },
      )
      .exec();
  }

  async deleteRepresentative(id: mongoId): RepresentativeType {
    return await this.representativeModel.findByIdAndDelete(id).exec();
  }

  async deleteStudentsChildren(
    representativeId: mongoId,
    studentId: DeleteStudentChildrenDto,
  ): RepresentativeType {
    return await this.representativeModel
      .findByIdAndUpdate(
        representativeId,
        {
          $pull: { studentChildren: { $in: studentId.studentChildren } },
        },
        { new: true },
      )
      .exec();
  }
}
