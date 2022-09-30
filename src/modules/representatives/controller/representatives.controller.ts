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

import { mongoId } from '../../../types/mongo-id.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import Endpoint from '../../../endpoint/endpoint';
import {
  AddStudentChildrenDto,
  CreateRepresentativeDto,
  DeleteStudentChildrenDto,
  FilterRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import { RepresentativesService } from '../service/representatives.service';
import { RepresentativeType } from '../types/representative.types';
import { RepresentativeArrayType } from '../types/representative-array.type';

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
    @Body() representativeData: CreateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.createRepresentative(representativeData);
  }

  @Get(':representativeId')
  async getRepresentative(
    @Param('representativeId', MongoIdPipe) representativeId: mongoId,
  ): RepresentativeType {
    return await this.service.getRepresentative(representativeId);
  }

  @Put(':representativeId')
  async updateRepresentative(
    @Param('representativeId', MongoIdPipe) representativeId: mongoId,
    @Body() representativeData: UpdateRepresentativeDto,
  ): RepresentativeType {
    return await this.service.updateRepresentative(
      representativeId,
      representativeData,
    );
  }

  @Put(':representativeId/studentChildren')
  async addStudentChildren(
    @Param('representativeId', MongoIdPipe) representativeId: mongoId,
    @Body() studentId: AddStudentChildrenDto,
  ): RepresentativeType {
    return await this.service.addStudentChildren(representativeId, studentId);
  }
  @Delete(':representativeId')
  async deleteRepresentative(
    @Param('representativeId', MongoIdPipe) representativeId: mongoId,
  ) {
    return await this.service.deleteRepresentative(representativeId);
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
