import { Module } from '@nestjs/common';
import { ParentsController } from '../controller/parents.controller';
import { ParentsService } from '../service/parents.service';

@Module({
  controllers: [ParentsController],
  providers: [ParentsService],
})
export class ParentsModule {}
