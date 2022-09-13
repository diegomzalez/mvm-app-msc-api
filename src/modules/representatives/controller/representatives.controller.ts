import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/Representative.entity';
import { RepresentativesService } from '../service/representatives.service';
import {
  RepresentativeArrayType,
  RepresentativeType,
} from '../types/Represesntative.types';

@ApiTags('representatives')
@Controller(Endpoint.representativesEndpoint)
export class RepresentativesController {
  constructor(private readonly service: RepresentativesService) {}

  @Get()
  async getRepresentatives(): RepresentativeArrayType {
    return await this.service.getRepresentatives();
  }
  @Post()
  async createRepresentative(
    @Body() representative: CreateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.createRepresentative(representative);
  }
  @Get(':id')
  async getRepresentative(@Param('id') id: string): RepresentativeType {
    return await this.service.getRepresentative(id);
  }
  @Put(':id')
  async updateRepresentative(
    @Param('id') id: string,
    @Body() representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.updateRepresentative(id, representative);
  }
  @Delete(':id')
  async deleteRepresentative(@Param('id') id: string) {
    return await this.service.deleteRepresentative(id);
  }
}
