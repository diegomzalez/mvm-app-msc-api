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

import Endpoint from '../../../endpoint/endpoint';
import {
  AddChildrenDto,
  CreateParentDto,
  DeleteChildrenDto,
  FilterParentDto,
  UpdateParentDto,
} from '../dto/parent.dto';
import { ParentsService } from '../service/parents.service';
import { ParentType } from '../types/parent.types';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import { mongoId } from '../../../types/mongo-id.type';
import { ParentArrayType } from '../types/parent-array.type';

@ApiTags('parents')
@Controller(Endpoint.parentsEndpoint)
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get()
  async getParents(@Query() params?: FilterParentDto): ParentArrayType {
    return await this.parentsService.getParents(params);
  }

  @Post()
  async createParent(@Body() parent: CreateParentDto): ParentType {
    return await this.parentsService.createParent(parent);
  }

  @Get(':parentId')
  async getParent(
    @Param('parentId', MongoIdPipe) parentId: mongoId,
  ): ParentType {
    return await this.parentsService.getParent(parentId);
  }

  @Put(':parentId')
  async updateParent(
    @Param('parentId', MongoIdPipe) parentId: mongoId,
    @Body() parent: UpdateParentDto,
  ): ParentType {
    return await this.parentsService.updateParent(parentId, parent);
  }

  @Put(':parentId/children')
  async addChildren(
    @Param('parentId', MongoIdPipe) parentId: mongoId,
    @Body() studentId: AddChildrenDto,
  ): ParentType {
    return await this.parentsService.addChildren(parentId, studentId);
  }

  @Delete(':parentId')
  async deleteParent(
    @Param('parentId', MongoIdPipe) parentId: mongoId,
  ): ParentType {
    return await this.parentsService.deleteParent(parentId);
  }

  @Delete(':parentId/children')
  async deleteChildren(
    @Param('parentId', MongoIdPipe) parentId: mongoId,
    @Body() studentId: DeleteChildrenDto,
  ): ParentType {
    return await this.parentsService.deleteChildren(parentId, studentId);
  }
}
