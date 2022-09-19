import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/user.dto';
import { mongoId } from '../../../types/mongoId.type';

import User from '../entity/User.entity';
import { UserArrayType, UserType } from '../types/User.types';
import UserDocument from '../types/UserDocument';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(params?: FilterUserDto): UserArrayType {
    return await this.userModel
      .find()
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createUser(user: CreateUserDto): UserType {
    return await new this.userModel(user).save();
  }

  async getUser(id: mongoId): UserType {
    return await this.userModel.findById(id).exec();
  }

  async updateUser(id: mongoId, user: UpdateUserDto): UserType {
    return await this.userModel
      .findByIdAndUpdate(id, { $addToSet: user }, { new: true })
      .exec();
  }

  async deleteUser(id: mongoId): UserType {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
