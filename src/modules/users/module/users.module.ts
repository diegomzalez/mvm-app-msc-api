import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import Endpoint from '../../../endpoint/endpoint';
import { UsersController } from '../controller/users.controller';
import User from '../entity/user.entity';
import UserSchema from '../schema/user.schema';
import { UsersService } from '../service/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    Endpoint,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  exports: [UsersService],
})
export class UsersModule {}
