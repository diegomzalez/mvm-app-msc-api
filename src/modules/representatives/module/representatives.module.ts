import { Module } from '@nestjs/common';
import { RepresentativesController } from '../controller/representatives.controller';
import { RepresentativesService } from '../service/representatives.service';

@Module({
  controllers: [RepresentativesController],
  providers: [RepresentativesService],
})
export class RepresentativesModule {}
