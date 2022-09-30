import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentsController } from '../controller/students.controller';
import { StudentsService } from '../service/students.service';
import Endpoint from '../../../endpoint/endpoint';
import Student from '../entity/student.entity';
import StudentSchema from '../schema/student.schema';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema,
      },
    ]),
  ],
})
export class StudentsModule {}
