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
import { MongoIdPipe } from '../../../common/mongo-id.pipe';

import Endpoint from '../../../endpoint/Endpoint';
import {
  CreateParentDto,
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
  async getParent(@Param('id', MongoIdPipe) id: string): ParentType {
    return await this.service.getParent(id);
  }
  @Put(':id')
  async updateParent(
    @Param('id', MongoIdPipe) id: string,
    @Body() parent: UpdateParentDto,
  ): ParentType {
    return await this.service.updateParent(id, parent);
  }
  @Delete(':id')
  async deleteParent(@Param('id', MongoIdPipe) id: string) {
    return await this.service.deleteParent(id);
  }
}
