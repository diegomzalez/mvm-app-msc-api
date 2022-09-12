import { Module } from '@nestjs/common';
import { StudentsController } from '../controller/students.controller';
import { StudentsService } from '../service/students.service';
import Endpoint from '../../../endpoint/Endpoint';
import { MongooseModule } from '@nestjs/mongoose';
import Student from '../entity/Student.entity';
import StudentSchema from '../schema/Student.schema';

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
