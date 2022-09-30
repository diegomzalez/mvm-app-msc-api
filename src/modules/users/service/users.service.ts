import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/user.dto';
import { mongoId } from '../../../types/mongo-id.type';
import User from '../entity/user.entity';
import { UserType } from '../types/user.type';
import UserDocument from '../document/user.document';
import { UserArrayType } from '../types/user-array.type';

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

  async createUser(userData: CreateUserDto): UserType {
    userData.password = await bcrypt.hash(userData.password, 10);
    const createdUser = await new this.userModel(userData).save();
    createdUser.password = '';
    return createdUser;
  }

  async getUser(userId: mongoId): UserType {
    return await this.userModel.findById(userId).exec();
  }

  async getUserByEmail(email: string): UserType {
    return await this.userModel.findOne({ email }).select('+password').exec();
  }

  async updateUser(userId: mongoId, userData: UpdateUserDto): UserType {
    return await this.userModel
      .findByIdAndUpdate(userId, { $set: userData }, { new: true })
      .exec();
  }

  async deleteUser(userId: mongoId): UserType {
    const deletedStudent = await this.userModel
      .findByIdAndDelete(userId)
      .exec();
    deletedStudent.password = '';
    return deletedStudent;
  }
}
