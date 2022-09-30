import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/user.dto';
import Endpoint from '../../../endpoint/endpoint';
import { UsersService } from '../service/users.service';
import { UserType } from '../types/user.type';
import { MongoIdPipe } from '../../../common/mongo-id.pipe';
import { mongoId } from '../../../types/mongo-id.type';
import { FrontendKeyGuard } from '../../../auth/guards/frontend-key.guard';
import { UserArrayType } from '../types/user-array.type';

@ApiTags('users')
@UseGuards(FrontendKeyGuard)
@Controller(Endpoint.usersEndpoint)
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  async getUsers(@Query() params?: FilterUserDto): UserArrayType {
    return await this.service.getUsers(params);
  }
  @Post()
  async createUser(@Body() userData: CreateUserDto): UserType {
    return await this.service.createUser(userData);
  }

  @Get(':userId')
  async getUser(@Param('userId', MongoIdPipe) userId: mongoId): UserType {
    return await this.service.getUser(userId);
  }
  @Put(':userId')
  async updateUser(
    @Param('userId', MongoIdPipe) userId: mongoId,
    @Body() userData: UpdateUserDto,
  ): UserType {
    return await this.service.updateUser(userId, userData);
  }
  @Delete(':userId')
  async deleteUser(@Param('userId', MongoIdPipe) userId: mongoId) {
    return await this.service.deleteUser(userId);
  }
}
