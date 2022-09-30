import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RepresentativesController } from '../controller/representatives.controller';
import { RepresentativesService } from '../service/representatives.service';
import Endpoint from '../../../endpoint/endpoint';
import Representative from '../entity/representative.entity';
import RepresentativeSchema from '../schema/representative.schema';

@Module({
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: Representative.name,
        schema: RepresentativeSchema,
      },
    ]),
  ],
})
export class RepresentativesModule {}
