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

import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import Endpoint from '../../../endpoint/Endpoint';
import User from '../entity/User.entity';
import { UsersService } from '../service/users.service';
import { UserArrayType, UserType } from '../types/User.types';

@ApiTags('users')
@Controller(Endpoint.usersEndpoint)
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  async getUsers(): UserArrayType {
    return await this.service.getUsers();
  }
  @Post()
  async createUser(@Body() user: CreateUserDto): UserType {
    return await this.service.createUser(user);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): UserType {
    return await this.service.getUser(id);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): UserType {
    return await this.updateUser(id, user);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.service.deleteUser(id);
  }
}
