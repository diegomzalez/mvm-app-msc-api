import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { mongoId } from '../../../types/mongo-id.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';

import Endpoint from '../../../endpoint/endpoint';
import {
  DeleteParentsDto,
  DeleteRepresentativesDto,
  CreateStudentDto,
  FilterStudentDto,
  UpdateStudentDto,
  AddParentsDto,
  AddRepresentativeDto,
  AddPaidMonthsDto,
  DeletePaidMonthsDto,
} from '../dto/students.dto';
import { StudentsService } from '../service/students.service';
import { StudentType } from '../types/student.types';
import { StudentArrayType } from '../types/student-array.type';

@ApiTags('students')
@Controller(Endpoint.studentsEndpoint)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents(@Query() params?: FilterStudentDto): StudentArrayType {
    return this.studentsService.getStudents(params);
  }

  @Post()
  createStudent(@Body() studentData: CreateStudentDto): StudentType {
    return this.studentsService.createStudent(studentData);
  }

  @Get(':studentId')
  getStudent(@Param('studentId', MongoIdPipe) studentId: mongoId): StudentType {
    return this.studentsService.getStudent(studentId);
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() studentData: UpdateStudentDto,
  ): StudentType {
    return this.studentsService.updateStudent(studentId, studentData);
  }

  @Put(':studentId/parents')
  async addParents(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() parentId: AddParentsDto,
  ): StudentType {
    return await this.studentsService.addParents(studentId, parentId);
  }

  @Put(':studentId/representatives')
  async addRepresentatives(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() representativeId: AddRepresentativeDto,
  ): StudentType {
    return await this.studentsService.addRepresentatives(
      studentId,
      representativeId,
    );
  }

  @Put(':studentId/paidMonths')
  async addPaidMonths(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() paidMonthsId: AddPaidMonthsDto,
  ): StudentType {
    return await this.studentsService.addPaidMonths(studentId, paidMonthsId);
  }

  @Delete(':studentId')
  deleteStudent(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
  ): StudentType {
    return this.studentsService.deleteStudent(studentId);
  }

  @Delete(':studentId/parents')
  async deleteParents(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() parentId: DeleteParentsDto,
  ): StudentType {
    return await this.studentsService.deleteParents(studentId, parentId);
  }

  @Delete(':studentId/representatives')
  async deleteRepresentatives(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() representativeId: DeleteRepresentativesDto,
  ): StudentType {
    return await this.studentsService.deleteRepresentatives(
      studentId,
      representativeId,
    );
  }

  @Delete(':studentId/paidMonths')
  async deletePaidMonths(
    @Param('studentId', MongoIdPipe) studentId: mongoId,
    @Body() paidMonthsId: DeletePaidMonthsDto,
  ): StudentType {
    return await this.studentsService.deletePaidMonths(studentId, paidMonthsId);
  }
}
