import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateParentDto, UpdateParentDto } from '../dto/parent.dto';
import Parent from '../entity/Parent.entity';
import ParentDocument from '../types/parent.type';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
  ) {}
  public async getParents(): Promise<Parent[]> {
    return this.ParentModel.find().exec();
  }
  public async getParent(id: string): Promise<Parent> {
    return this.ParentModel.findById(id).exec();
  }
  public async createParent(parent: CreateParentDto): Promise<Parent> {
    const createdParent = new this.ParentModel(parent);
    return await createdParent.save();
  }
  public async updateParent(
    id: string,
    parent: UpdateParentDto,
  ): Promise<Parent> {
    return await this.getParent(id);
  }
  public async deleteParent(id: string): Promise<string> {
    this.ParentModel.findByIdAndDelete(id);
    return await `Parent ${id} deleted`;
  }
}
