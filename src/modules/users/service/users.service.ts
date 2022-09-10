import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/modules/users/dto/user.dto';
import User from '../entities/user.entity';
@Injectable()
export class UsersService {
  private users: Array<User> = [];
  getUsers(): Array<User> {
    return this.users;
  }
  getUser(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  createUser(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }
  updateUser(id: number, user: UpdateUserDto): User {
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = {
      ...this.users[index],
      ...user,
    };
    return this.users[index];
  }
  deleteUser(id: number): string {
    const index = this.users.findIndex((u) => u.id === id);
    delete this.users[index];
    return `User ${id} deleted successfully!`;
  }
}
