import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ParentsController } from '../controller/parents.controller';
import { ParentsService } from '../service/parents.service';
import Endpoint from '../../../endpoint/endpoint';
import Parent from '../entity/parent.entity';
import { ParentSchema } from '../schema/parent.schema';
@Module({
  controllers: [ParentsController],
  providers: [ParentsService],
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Parent.name,
        schema: ParentSchema,
      },
    ]),
  ],
})
export class ParentsModule {}
