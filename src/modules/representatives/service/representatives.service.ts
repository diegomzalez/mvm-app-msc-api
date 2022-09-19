import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import {
  CreateRepresentativeDto,
  DeleteStudentChildrenDto,
  FilterRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/Representative.entity';
import RepresentativeDocument from '../types/RepresentativeDocument.type';
import {
  RepresentativeArrayType,
  RepresentativeType,
} from '../types/Represesntative.types';

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
      .populate('studentRelationship')
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

  async getRepresentative(id: Types.ObjectId): RepresentativeType {
    return await this.representativeModel.findById(id).exec();
  }

  async updateRepresentative(
    id: Types.ObjectId,
    representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.representativeModel
      .findByIdAndUpdate(id, { $addToSet: representative }, { new: true })
      .exec();
  }

  async deleteRepresentative(id: Types.ObjectId): RepresentativeType {
    return await this.representativeModel.findByIdAndDelete(id).exec();
  }

  async deleteStudentsChildren(
    representativeId: Types.ObjectId,
    studentsId: DeleteStudentChildrenDto,
  ): RepresentativeType {
    const representative = await this.representativeModel
      .findById(representativeId)
      .exec();
    const indices: number[] = [];
    studentsId.studentChildren.forEach((student) => {
      const index = representative.studentChildren.indexOf(student);
      indices.push(index);
    });
    representative.studentChildren.pull(studentsId.studentChildren);
    indices.forEach((value) => {
      representative.studentRelationship.splice(value, 1);
    });

    return await representative.save();
  }
}
