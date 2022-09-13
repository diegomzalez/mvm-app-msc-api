import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateStudentDto, UpdateStudentDto } from '../dto/students.dto';
import Student from '../entity/Student.entity';
import { StudentArrayType, StudentType } from '../types/Student.types';
import StudentDocument from '../types/StudentDocument';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  async getStudents(): StudentArrayType {
    return await this.studentModel.find().exec();
  }
  async createStudent(student: CreateStudentDto): StudentType {
    return await new this.studentModel(student).save();
  }
  async getStudent(id: string): StudentType {
    return await this.studentModel.findById(id).exec();
  }
  async updateStudent(id: string, student: UpdateStudentDto): StudentType {
    return await this.studentModel.findByIdAndUpdate(id, student).exec();
  }
  async deleteStudent(id: string) {
    await this.studentModel.findByIdAndDelete(id);
  }
}
