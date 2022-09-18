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
import { Types } from 'mongoose';
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
    @Param('id', MongoIdPipe) id: Types.ObjectId,
  ): RepresentativeType {
    return await this.service.getRepresentative(id);
  }

  @Put(':id')
  async updateRepresentative(
    @Param('id', MongoIdPipe) id: Types.ObjectId,
    @Body() representative: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.updateRepresentative(id, representative);
  }

  @Delete(':id')
  async deleteRepresentative(@Param('id', MongoIdPipe) id: Types.ObjectId) {
    return await this.service.deleteRepresentative(id);
  }

  @Delete(':representativeId/studentChildren')
  async deleteStudentChildren(
    @Param('representativeId', MongoIdPipe) representativeId: Types.ObjectId,
    @Body() studentChildrenId: DeleteStudentChildrenDto,
  ): RepresentativeType {
    return await this.service.deleteStudentsChildren(
      representativeId,
      studentChildrenId,
    );
  }
}
