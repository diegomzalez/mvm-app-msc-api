import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/module/students.module';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import entitiesAndDto from './entitiesAndDto/entitiesAndDto';
import Endpoint from './endpoint/Endpoint';
import configModule from './config/index';

@Module({
  imports: [
    configModule,
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...entitiesAndDto, Endpoint],
  exports: [...entitiesAndDto, Endpoint],
})
export class AppModule {}
