import { Injectable } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from '../dto/students.dto';
import Student from '../entity/Student.entity';

@Injectable()
export class StudentsService {
  students: Array<Student> = [];
  createStudent(student: CreateStudentDto): Student {
    this.students.push(student);
    return student;
  }
  getStudents(): Array<Student> {
    return this.students;
  }
  getStudent(id: string): Student {
    return this.students.find((student) => student);
  }
  updateStudent(id: string, student: UpdateStudentDto): Student {
    const index = this.students.findIndex((student) => student);

    return this.students[index];
  }
  deleteStudent(id: string): string {
    delete this.students[id];
    return `Student ${id} deleted`;
  }
}
