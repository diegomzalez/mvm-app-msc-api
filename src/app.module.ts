import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/module/students.module';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import entitiesAndDtos from './entitiesAndDtos/entitiesAndDtos';
import Endpoint from './endpoints/Endpoint';
import envConfig from './config/index';
@Module({
  imports: [
    envConfig,
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...entitiesAndDtos, Endpoint],
  exports: [...entitiesAndDtos, Endpoint],
})
export class AppModule {}
