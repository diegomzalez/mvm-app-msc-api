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
import Parent from '../entity/parent.entity';
import { ParentsService } from '../service/parents.service';

@ApiTags('parents')
@Controller(Endpoint.parentsEndpoint)
export class ParentsController {
  constructor(private readonly service: ParentsService) {}
  @Get()
  public getParents(): Array<Parent> {
    return this.service.getParents();
  }
  @Post()
  public createParent(@Body() parent: CreateParentDto): Parent {
    return this.service.createParent(parent);
  }
  @Get(':id')
  public getParent(@Param('id', ParseIntPipe) id: number): Parent {
    return this.service.getParent(id);
  }
  @Put(':id')
  public updateParent(
    @Param('id', ParseIntPipe) id: number,
    @Body() parent: UpdateParentDto,
  ): Parent {
    return this.service.updateParent(id, parent);
  }
  @Delete(':id')
  public deleteParent(@Param('id', ParseIntPipe) id: number): string {
    return this.service.deleteParent(id);
  }
}
