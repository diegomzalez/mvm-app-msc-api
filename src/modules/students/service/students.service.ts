import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Model } from 'mongoose';

import {
  CreateStudentDto,
  DeleteParentsDto,
  DeleteRepresentativesDto,
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

  async getStudents(params: FilterStudentDto): StudentArrayType {
    return await this.studentModel
      .find(params)
      .populate('parents')
      .populate('representatives')
      .populate('paidMonths')
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createStudent(student: CreateStudentDto): StudentType {
    return await new this.studentModel(student).save();
  }

  async getStudent(id: Types.ObjectId): StudentType {
    return await this.studentModel
      .findById(id)
      .populate('parents')
      .populate('representatives')
      .populate('paidMonths')
      .exec();
  }

  async updateStudent(
    id: Types.ObjectId,
    student: UpdateStudentDto,
  ): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(id, { $addToSet: student }, { new: true })
      .exec();
  }

  async deleteStudent(id: Types.ObjectId): StudentType {
    return await this.studentModel.findByIdAndDelete(id);
  }

  async deleteParents(
    studentId: Types.ObjectId,
    parentsId: DeleteParentsDto,
  ): StudentType {
    const student = await this.studentModel.findById(studentId).exec();
    student.parents.pull(parentsId.parents);
    await student.save();
    return student;
  }

  async deleteRepresentatives(
    studentId: Types.ObjectId,
    representativesId: DeleteRepresentativesDto,
  ): StudentType {
    const student = await this.studentModel.findById(studentId).exec();
    student.representatives.pull(representativesId.representatives);
    await student.save();
    return student;
  }
}
