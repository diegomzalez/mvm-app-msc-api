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
import { ApiTags } from '@nestjs/swagger';
import Endpoint from '../../../endpoint/Endpoint';

import { CreateStudentDto, UpdateStudentDto } from '../dto/students.dto';
import Student from '../entity/Student.entity';
import { StudentsService } from '../service/students.service';

@ApiTags('students')
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
  getStudent(@Param('id') id: string): Student {
    return this.service.getStudent(id);
  }
  @Put('id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: UpdateStudentDto,
  ): Student {
    return this.service.updateStudent(id, student);
  }
  @Delete('id')
  deleteStudent(@Param('id') id: string): string {
    return this.service.deleteStudent(id);
  }
}
