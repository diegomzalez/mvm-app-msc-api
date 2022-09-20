import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { mongoId } from '../../../types/mongoId.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateRepresentativeDto,
  DeleteStudentChildrenDto,
  FilterRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
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
  async getRepresentatives(
    @Query() params?: FilterRepresentativeDto,
  ): RepresentativeArrayType {
    return await this.service.getRepresentatives(params);
  }

  @Post()
  async createRepresentative(
    @Body() representative: CreateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.createRepresentative(representative);
  }

  @Get(':id')
  async getRepresentative(
    @Param('id', MongoIdPipe) id: mongoId,
  ): RepresentativeType {
    return await this.service.getRepresentative(id);
  }

  @Put(':id')
  async updateRepresentative(
    @Param('id', MongoIdPipe) id: mongoId,
    @Body() representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.updateRepresentative(id, representative);
  }

  @Delete(':id')
  async deleteRepresentative(@Param('id', MongoIdPipe) id: mongoId) {
    return await this.service.deleteRepresentative(id);
  }

  @Delete(':representativeId/studentChildren')
  async deleteStudentChildren(
    @Param('representativeId', MongoIdPipe) representativeId: mongoId,
    @Body() studentChildrenId: DeleteStudentChildrenDto,
  ): RepresentativeType {
    return await this.service.deleteStudentsChildren(
      representativeId,
      studentChildrenId,
    );
  }
}
