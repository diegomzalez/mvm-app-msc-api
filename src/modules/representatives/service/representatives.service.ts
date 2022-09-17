import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateRepresentativeDto,
  FilterRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/Representative.entity';
import RepresentativeDocument from '../types/RepresentativeDocument';
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
  async getRepresentative(id: string): RepresentativeType {
    return await this.representativeModel.findById(id).exec();
  }
  async updateRepresentative(
    id: string,
    representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.representativeModel
      .findByIdAndUpdate(id, { $set: representative }, { new: true })
      .exec();
  }
  async deleteRepresentative(id: string) {
    await this.representativeModel.findByIdAndDelete(id).exec();
  }
}
