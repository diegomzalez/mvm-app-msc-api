import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Endpoint from '../../../endpoint/Endpoint';
import { UsersController } from '../controller/users.controller';
import User from '../entity/User.entity';
import UserSchema from '../schema/User.schema';
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
})
export class UsersModule {}
