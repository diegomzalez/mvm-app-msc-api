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

import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/user.dto';
import Endpoint from '../../../endpoint/Endpoint';
import { UsersService } from '../service/users.service';
import { UserArrayType, UserType } from '../types/User.types';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';

@ApiTags('users')
@Controller(Endpoint.usersEndpoint)
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  async getUsers(@Query() params?: FilterUserDto): UserArrayType {
    return await this.service.getUsers(params);
  }
  @Post()
  async createUser(@Body() user: CreateUserDto): UserType {
    return await this.service.createUser(user);
  }

  @Get(':id')
  async getUser(@Param('id', MongoIdPipe) id: string): UserType {
    return await this.service.getUser(id);
  }
  @Put(':id')
  async updateUser(
    @Param('id', MongoIdPipe) id: string,
    @Body() user: UpdateUserDto,
  ): UserType {
    return await this.updateUser(id, user);
  }
  @Delete(':id')
  async deleteUser(@Param('id', MongoIdPipe) id: string) {
    return await this.service.deleteUser(id);
  }
}
