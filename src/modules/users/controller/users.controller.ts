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
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import Endpoint from '../../../endpoint/Endpoint';
import User from '../entity/user.entity';
import { UsersService } from '../service/users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
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
  getUser(@Param('id', ParseIntPipe) id: number): User {
    return this.service.getUser(id);
  }
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ): User {
    return this.service.updateUser(id, user);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): string {
    return this.service.deleteUser(id);
  }
}
