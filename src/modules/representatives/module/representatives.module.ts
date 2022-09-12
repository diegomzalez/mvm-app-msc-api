import { Module } from '@nestjs/common';
import { RepresentativesController } from '../controller/representatives.controller';
import { RepresentativesService } from '../service/representatives.service';
import Endpoint from '../../../endpoint/Endpoint';
import { MongooseModule } from '@nestjs/mongoose';
import Representative from '../entity/Representative.entity';
import RepresentativeSchema from '../schema/Representative.schema';

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
