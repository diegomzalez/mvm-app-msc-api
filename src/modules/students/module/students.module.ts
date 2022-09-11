import { Module } from '@nestjs/common';
import { StudentsController } from '../controller/students.controller';
import { StudentsService } from '../service/students.service';
import Endpoint from '../../../endpoint/Endpoint';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [Endpoint],
})
export class StudentsModule {}
