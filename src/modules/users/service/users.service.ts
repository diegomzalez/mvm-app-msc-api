import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

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
    user.password = await bcrypt.hash(user.password, 10);
    const createdUser = await new this.userModel(user).save();
    createdUser.password = '';
    return createdUser;
  }

  async getUser(id: mongoId): UserType {
    return await this.userModel.findById(id).exec();
  }

  async getUserByEmail(email: string): UserType {
    return await this.userModel.findOne({ email }).select('+password').exec();
  }

  async updateUser(id: mongoId, user: UpdateUserDto): UserType {
    return await this.userModel
      .findByIdAndUpdate(id, { $set: user }, { new: true })
      .exec();
  }

  async deleteUser(id: mongoId): UserType {
    const deletedStudent = await this.userModel.findByIdAndDelete(id).exec();
    deletedStudent.password = '';
    return deletedStudent;
  }
}
