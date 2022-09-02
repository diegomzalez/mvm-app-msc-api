import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dto';
import User from '../entities/user.entity';
@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      id: '1',
      name: 'Diego',
      middleName: 'Miguel',
      surname: 'González',
      lastName: 'Calero',
      email: 'diegom.gcalovi@gmail.com',
      password: '123456',
    },
  ];
  getUsers(): Array<User> {
    return this.users;
  }
  getUser(id: string): User {
    return this.users.find((user) => user.id === id);
  }
  createUser(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }
  updateUser(id: string, user: UpdateUserDto): User {
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = {
      ...this.users[index],
      ...user,
    };
    return this.users[index];
  }
  deleteUser(id: string): string {
    const index = this.users.findIndex((u) => u.id === id);
    delete this.users[index];
    return `User ${id} deleted successfully!`;
  }
}
