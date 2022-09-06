import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import Endpoint from '../../../endpoints/Endpoint';

import { CreateStudentDto, UpdateStudentDto } from '../dtos/students.dto';
import Student from '../entities/student.entity';
import { StudentsService } from '../service/students.service';

@Controller(Endpoint.studentsEndpoint)
export class StudentsController {
  constructor(private readonly service: StudentsService) {}
  @Get()
  getStudents(): Array<Student> {
    return this.service.getStudents();
  }
  @Post()
  createStudent(@Body() student: CreateStudentDto): Student {
    return this.service.createStudent(student);
  }
  @Get(':id')
  getStudent(@Param('id', ParseIntPipe) id: number): Student {
    return this.service.getStudent(id);
  }
  @Put('id')
  updateStudent(
    @Param('id') id: number,
    @Body() student: UpdateStudentDto,
  ): Student {
    return this.service.updateStudent(id, student);
  }
  @Delete('id')
  deleteStudent(@Param('id') id: number): string {
    return this.service.deleteStudent(id);
  }
}
