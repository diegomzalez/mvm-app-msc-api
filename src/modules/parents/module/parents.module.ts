import { Module } from '@nestjs/common';
import { ParentsController } from '../controller/parents.controller';
import { ParentsService } from '../service/parents.service';
import Endpoint from '../../../endpoints/Endpoint';

@Module({
  controllers: [ParentsController],
  providers: [ParentsService],
  imports: [Endpoint],
})
export class ParentsModule {}
