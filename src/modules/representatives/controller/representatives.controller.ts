import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/representative.entity';
import { RepresentativesService } from '../service/representatives.service';

@ApiTags('representatives')
@Controller(Endpoint.representativesEndpoint)
export class RepresentativesController {
  constructor(private readonly service: RepresentativesService) {}

  @Get()
  getRepresentatives(): Array<Representative> {
    return this.service.getRepresentatives();
  }
  @Post()
  createRepresentative(
    @Body() representative: CreateRepresentativeDto,
  ): Representative {
    return this.service.createRepresentative(representative);
  }
  @Get(':id')
  getRepresentative(@Param('id', ParseIntPipe) id: number): Representative {
    return this.service.getRepresentative(id);
  }
  @Put(':id')
  updateRepresentative(
    @Param('id', ParseIntPipe) id: number,
    @Body() representative: UpdateRepresentativeDto,
  ): Representative {
    return this.service.updateRepresentative(id, representative);
  }
  @Delete(':id')
  deleteRepresentative(@Param('id', ParseIntPipe) id: number): string {
    return this.service.deleteRepresentative(id);
  }
}
