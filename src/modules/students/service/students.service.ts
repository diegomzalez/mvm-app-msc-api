import { Injectable } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from '../dtos/students.dto';
import Student from '../entities/student.entity';

@Injectable()
export class StudentsService {
  students: Array<Student> = [
    {
      id: '1',
      name: 'Diego',
      middleName: 'Miguel',
      surname: 'González',
      lastName: 'Calero',
      birthday: 'January 4, 2005',
      birthplace: 'Valecia',
      municipality: 'Valecia',
      state: 'Carabobo',
      liveWith: 'Mamá',
      ci: '30807618',
    },
  ];
  createStudent(student: CreateStudentDto): Student {
    this.students.push(student);
    return student;
  }
  getStudents(): Array<Student> {
    return this.students;
  }
  getStudent(id: string): Student {
    return this.students.find((student) => student.id === id);
  }
  updateStudent(id: string, student: UpdateStudentDto): Student {
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = {
      ...this.students[index],
      ...student,
    };
    return this.students[index];
  }
  deleteStudent(id: string): string {
    delete this.students[id];
    return `Student ${id} deleted`;
  }
}
