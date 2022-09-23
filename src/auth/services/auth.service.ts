import { Injectable } from '@nestjs/common';
import { UsersService } from '../../modules/users/service/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
}
