import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/module/students.module';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import Person from './entities/person.entity';
import Client from './entities/client.entity';
import Adult from './entities/adult.entity';

@Module({
  imports: [StudentsModule, UsersModule, RepresentativesModule, ParentsModule],
  controllers: [AppController],
  providers: [AppService, Person, Client, Adult],
  exports: [Person, Client, Adult],
})
export class AppModule {}
