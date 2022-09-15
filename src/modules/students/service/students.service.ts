import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  CreateStudentDto,
  FilterStudentDto,
  UpdateStudentDto,
} from '../dto/students.dto';
import Student from '../entity/Student.entity';
import { StudentArrayType, StudentType } from '../types/Student.types';
import StudentDocument from '../types/StudentDocument';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  async getStudents(params?: FilterStudentDto): StudentArrayType {
    if (params) {
      const { limit, offset } = params;
      return await this.studentModel.find().skip(offset).limit(limit).exec();
    }
    return await this.studentModel.find().exec();
  }
  async createStudent(student: CreateStudentDto): StudentType {
    return await new this.studentModel(student).save();
  }
  async getStudent(id: string): StudentType {
    return await this.studentModel.findById(id).exec();
  }
  async updateStudent(id: string, student: UpdateStudentDto): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(id, { $set: student }, { new: true })
      .exec();
  }
  async deleteStudent(id: string) {
    await this.studentModel.findByIdAndDelete(id);
  }
}
