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
import { CreateParentDto, UpdateParentDto } from '../dto/parent.dto';
import { ParentsService } from '../service/parents.service';
import { ParentType, ParentArrayType } from '../types/Parent.types';

@ApiTags('parents')
@Controller(Endpoint.parentsEndpoint)
export class ParentsController {
  constructor(private readonly service: ParentsService) {}
  @Get()
  public async getParents(): ParentArrayType {
    return await this.service.getParents();
  }
  @Post()
  public async createParent(@Body() parent: CreateParentDto): ParentType {
    return await this.service.createParent(parent);
  }
  @Get(':id')
  public async getParent(@Param('id') id: string): ParentType {
    return await this.service.getParent(id);
  }
  @Put(':id')
  public async updateParent(
    @Param('id') id: string,
    @Body() parent: UpdateParentDto,
  ): ParentType {
    return await this.service.updateParent(id, parent);
  }
  @Delete(':id')
  public async deleteParent(@Param('id') id: string) {
    return await this.service.deleteParent(id);
  }
}
