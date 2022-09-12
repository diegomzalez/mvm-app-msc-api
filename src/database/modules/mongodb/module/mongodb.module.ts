import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.MONGO_CONNECTION}://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
        dbName: process.env.MONGO_DB,
      },
    ),
  ],
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const CONNECTION = process.env.MONGO_CONNECTION;
        const USER = process.env.MONGO_INITDB_ROOT_USERNAME;
        const PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
        const HOST = process.env.MONGO_HOST;
        const PORT = process.env.MONGO_PORT;
        const MONGODB_URI = `${CONNECTION}://${USER}:${PASSWORD}@${HOST}:${PORT}/?authMechanism=DEFAULT`;

        const client = new MongoClient(MONGODB_URI);
        await client.connect();

        const db = client.db(process.env.D);
        return db;
      },
    },
  ],
  exports: ['MONGO', MongooseModule],
})
export class MongodbModule {}
