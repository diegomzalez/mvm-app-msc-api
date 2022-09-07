import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/module/students.module';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import entitiesAndDtos from './entitiesAndDtos/entitiesAndDtos';
import Endpoint from './endpoints/Endpoint';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';

@Module({
  imports: [
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ...entitiesAndDtos, Endpoint],
  exports: [...entitiesAndDtos, Endpoint],
})
export class AppModule {}
