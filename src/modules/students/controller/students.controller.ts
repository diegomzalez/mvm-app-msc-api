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
import { Types } from 'mongoose';
import Representative from 'src/modules/representatives/entity/Representative.entity';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';

import Endpoint from '../../../endpoint/Endpoint';
import {
  DeleteParentsDto,
  DeleteRepresentativesDto,
  CreateStudentDto,
  FilterStudentDto,
  UpdateStudentDto,
} from '../dto/students.dto';
import { StudentsService } from '../service/students.service';
import { StudentArrayType, StudentType } from '../types/Student.types';

@ApiTags('students')
@Controller(Endpoint.studentsEndpoint)
export class StudentsController {
  constructor(private readonly service: StudentsService) {}

  @Get()
  getStudents(@Query() params?: FilterStudentDto): StudentArrayType {
    return this.service.getStudents(params);
  }

  @Post()
  createStudent(@Body() student: CreateStudentDto): StudentType {
    return this.service.createStudent(student);
  }

  @Get(':id')
  getStudent(@Param('id', MongoIdPipe) id: Types.ObjectId): StudentType {
    return this.service.getStudent(id);
  }

  @Put(':id')
  updateStudent(
    @Param('id', MongoIdPipe) id: Types.ObjectId,
    @Body() student: UpdateStudentDto,
  ): StudentType {
    return this.service.updateStudent(id, student);
  }

  @Delete(':id')
  deleteStudent(@Param('id', MongoIdPipe) id: Types.ObjectId): StudentType {
    return this.service.deleteStudent(id);
  }

  @Delete(':studentId/parents')
  async deleteParents(
    @Param('studentId', MongoIdPipe) studentId: Types.ObjectId,
    @Body() parentsId: DeleteParentsDto,
  ): StudentType {
    return await this.service.deleteParents(studentId, parentsId);
  }

  @Delete(':studentId/representatives')
  async deleteRepresentatives(
    @Param('studentId', MongoIdPipe) studentId: Types.ObjectId,
    @Body() representativesId: DeleteRepresentativesDto,
  ): StudentType {
    return await this.service.deleteRepresentatives(
      studentId,
      representativesId,
    );
  }
}
