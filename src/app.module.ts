import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './modules/bills/module/bills.module';
import { MonthsModule } from './modules/months/module/months.module';
import { StudentsModule } from './modules/students/module/students.module';
import entityAndDto from './modules/entityAndDto/entityAndDto';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import Endpoint from './endpoint/Endpoint';
import { MongooseConfigModule } from './database/modules/mongodb/module/mongooseConfig.module';
import config from '../config/config';

@Module({
  imports: [
    MongooseConfigModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      cache: true,
    }),
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
    MonthsModule,
    BillsModule,
  ],
  controllers: [AppController],
  providers: [Endpoint, AppService, ...entityAndDto],
  exports: [Endpoint, ...entityAndDto],
})
export class AppModule {}
