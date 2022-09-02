import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../../dtos/user.dto';
import Endpoint from '../../../endpoints/Endpoint';
import User from '../entities/user.entity';
import { UsersService } from '../service/users.service';

@Controller(Endpoint.usersEndpoint)
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  getUsers(): Array<User> {
    return this.service.getUsers();
  }
  @Post()
  createUser(@Body() user: CreateUserDto): User {
    return this.service.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.service.getUser(id);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto): User {
    return this.service.updateUser(id, user);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.service.deleteUser(id);
  }
}
