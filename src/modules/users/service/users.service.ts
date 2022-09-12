import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/modules/users/dto/user.dto';
import User from '../entity/User.entity';
@Injectable()
export class UsersService {
  private users: Array<User> = [];
  getUsers(): Array<User> {
    return this.users;
  }
  getUser(id: string): User {
    return this.users.find((user) => user);
  }
  createUser(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }
  updateUser(id: string, user: UpdateUserDto): User {
    const index = this.users.findIndex((u) => u);
    return this.users[index];
  }
  deleteUser(id: string): string {
    const index = this.users.findIndex((u) => u);
    delete this.users[index];
    return `User ${id} deleted successfully!`;
  }
}
