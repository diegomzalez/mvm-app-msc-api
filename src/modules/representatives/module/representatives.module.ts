import { Module } from '@nestjs/common';
import { RepresentativesController } from '../controller/representatives.controller';
import { RepresentativesService } from '../service/representatives.service';
import Endpoint from '../../../endpoint/Endpoint';

@Module({
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
  imports: [Endpoint],
})
export class RepresentativesModule {}
