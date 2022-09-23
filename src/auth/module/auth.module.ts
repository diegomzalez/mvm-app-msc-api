import { Module } from '@nestjs/common';

import { UsersModule } from '../../modules/users/module/users.module';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import Endpoint from '../../endpoint/Endpoint';

@Module({
  imports: [Endpoint, UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
