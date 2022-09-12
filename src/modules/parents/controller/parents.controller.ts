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
import { CreateParentDto, UpdateParentDto } from '../dto/parent.dto';
import Parent from '../entity/Parent.entity';
import { ParentsService } from '../service/parents.service';

@ApiTags('parents')
@Controller(Endpoint.parentsEndpoint)
export class ParentsController {
  constructor(private readonly service: ParentsService) {}
  @Get()
  public async getParents(): Promise<Parent[]> {
    return await this.service.getParents();
  }
  @Post()
  public async createParent(@Body() parent: CreateParentDto): Promise<Parent> {
    return await this.service.createParent(parent);
  }
  @Get(':id')
  public async getParent(@Param('id') id: string): Promise<Parent> {
    return await this.service.getParent(id);
  }
  @Put(':id')
  public async updateParent(
    @Param('id') id: string,
    @Body() parent: UpdateParentDto,
  ): Promise<Parent> {
    return await this.service.updateParent(id, parent);
  }
  @Delete(':id')
  public async deleteParent(@Param('id') id: string): Promise<string> {
    return await this.service.deleteParent(id);
  }
}
