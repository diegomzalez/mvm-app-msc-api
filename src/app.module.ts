import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/module/students.module';
import entityAndDto from './entityAndDto/entityAndDto';
('./entityDtoAndSchema/entityDtoAndSchema');
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import Endpoint from './endpoint/Endpoint';
import configModule from './config/index';
import { MongodbModule } from './database/modules/mongodb/module/mongodb.module';

@Module({
  imports: [
    configModule,
    MongodbModule,
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, Endpoint, ...entityAndDto],
  exports: [configModule, Endpoint, ...entityAndDto],
})
export class AppModule {}
