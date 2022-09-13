import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import Endpoint from '../../../endpoint/Endpoint';
import { CreateStudentDto, UpdateStudentDto } from '../dto/students.dto';
import { StudentsService } from '../service/students.service';
import { StudentArrayType, StudentType } from '../types/Student.types';

@ApiTags('students')
@Controller(Endpoint.studentsEndpoint)
export class StudentsController {
  constructor(private readonly service: StudentsService) {}
  @Get()
  getStudents(): StudentArrayType {
    return this.service.getStudents();
  }
  @Post()
  createStudent(@Body() student: CreateStudentDto): StudentType {
    return this.service.createStudent(student);
  }
  @Get(':id')
  getStudent(@Param('id') id: string): StudentType {
    return this.service.getStudent(id);
  }
  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: UpdateStudentDto,
  ): StudentType {
    return this.service.updateStudent(id, student);
  }
  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.service.deleteStudent(id);
  }
}
