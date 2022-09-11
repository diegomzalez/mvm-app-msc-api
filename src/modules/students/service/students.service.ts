import { Injectable } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from '../dto/students.dto';
import Student from '../entity/student.entity';

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
  getStudent(id: number): Student {
    return this.students.find((student) => student.id === id);
  }
  updateStudent(id: number, student: UpdateStudentDto): Student {
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = {
      ...this.students[index],
      ...student,
    };
    return this.students[index];
  }
  deleteStudent(id: number): string {
    delete this.students[id];
    return `Student ${id} deleted`;
  }
}
