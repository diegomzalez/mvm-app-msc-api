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
  CreateParentDto,
  DeleteChildrenDto,
  FilterParentDto,
  UpdateParentDto,
} from '../dto/parent.dto';
import { ParentsService } from '../service/parents.service';
import { ParentType, ParentArrayType } from '../types/Parent.types';

@ApiTags('parents')
@Controller(Endpoint.parentsEndpoint)
export class ParentsController {
  constructor(private readonly service: ParentsService) {}

  @Get()
  async getParents(@Query() params?: FilterParentDto): ParentArrayType {
    return await this.service.getParents(params);
  }

  @Post()
  async createParent(@Body() parent: CreateParentDto): ParentType {
    return await this.service.createParent(parent);
  }

  @Get(':id')
  async getParent(@Param('id', MongoIdPipe) id: Types.ObjectId): ParentType {
    return await this.service.getParent(id);
  }

  @Put(':id')
  async updateParent(
    @Param('id', MongoIdPipe) id: Types.ObjectId,
    @Body() parent: UpdateParentDto,
  ): ParentType {
    return await this.service.updateParent(id, parent);
  }

  @Delete(':id')
  async deleteParent(@Param('id', MongoIdPipe) id: Types.ObjectId): ParentType {
    return await this.service.deleteParent(id);
  }

  @Delete(':parentId/children')
  async deleteChildren(
    @Param('parentId', MongoIdPipe) parentId: Types.ObjectId,
    @Body() childrenId: DeleteChildrenDto,
  ): ParentType {
    return await this.service.deleteChildren(parentId, childrenId);
  }
}
