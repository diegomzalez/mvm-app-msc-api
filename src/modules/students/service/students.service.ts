import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  AddPaidMonthsDto,
  AddParentsDto,
  AddRepresentativeDto,
  CreateStudentDto,
  DeletePaidMonthsDto,
  DeleteParentsDto,
  DeleteRepresentativesDto,
  FilterStudentDto,
  UpdateStudentDto,
} from '../dto/students.dto';
import Student from '../entity/student.entity';
import { StudentType } from '../types/student.types';
import StudentDocument from '../document/student-document';
import { mongoId } from '../../../types/mongo-id.type';
import { StudentArrayType } from '../types/student-array.type';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async getStudents(params: FilterStudentDto): StudentArrayType {
    return await this.studentModel
      .find(params)
      .skip(params.offset)
      .limit(params.limit)
      .exec();
  }

  async createStudent(student: CreateStudentDto): StudentType {
    return await new this.studentModel(student).save();
  }

  async getStudent(studentId: mongoId): StudentType {
    return await this.studentModel
      .findById(studentId)
      .populate('parents')
      .populate('representatives')
      .populate('paidMonths')
      .exec();
  }

  async updateStudent(
    studentId: mongoId,
    student: UpdateStudentDto,
  ): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(studentId, { $set: student }, { new: true })
      .exec();
  }

  async addParents(studentId: mongoId, parentId: AddParentsDto): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(
        studentId,
        {
          $addToSet: parentId,
        },
        { new: true },
      )
      .exec();
  }

  async addRepresentatives(
    studentId: mongoId,
    representativeId: AddRepresentativeDto,
  ): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(
        studentId,
        {
          $addToSet: representativeId,
        },
        { new: true },
      )
      .exec();
  }

  async addPaidMonths(
    studentId: mongoId,
    paidMonthsId: AddPaidMonthsDto,
  ): StudentType {
    return await this.studentModel
      .findByIdAndUpdate(
        studentId,
        {
          $addToSet: paidMonthsId,
        },
        { new: true },
      )
      .exec();
  }

  async deleteStudent(studentId: mongoId): StudentType {
    return await this.studentModel.findByIdAndDelete(studentId);
  }

  async deleteParents(
    studentId: mongoId,
    parentsId: DeleteParentsDto,
  ): StudentType {
    return await this.studentModel
      .findOneAndUpdate(
        studentId,
        {
          $pull: { parents: { $in: parentsId.parents } },
        },
        { new: true },
      )
      .exec();
  }

  async deleteRepresentatives(
    studentId: mongoId,
    representativeId: DeleteRepresentativesDto,
  ): StudentType {
    return await this.studentModel
      .findOneAndUpdate(
        studentId,
        {
          $pull: { representatives: { $in: representativeId.representatives } },
        },
        { new: true },
      )
      .exec();
  }

  async deletePaidMonths(
    studentId: mongoId,
    paidMonthsId: DeletePaidMonthsDto,
  ): StudentType {
    return await this.studentModel
      .findOneAndUpdate(
        studentId,
        {
          $pull: { paidMonths: { $in: paidMonthsId.paidMonths } },
        },
        { new: true },
      )
      .exec();
  }
}
