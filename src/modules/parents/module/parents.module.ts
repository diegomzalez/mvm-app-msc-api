import { Module } from '@nestjs/common';
import { ParentsController } from '../controller/parents.controller';
import { ParentsService } from '../service/parents.service';
import Endpoint from '../../../endpoint/Endpoint';
import { MongooseModule } from '@nestjs/mongoose';
import Parent from '../entity/Parent.entity';
import { ParentSchema } from '../schema/Parent.schema';
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
