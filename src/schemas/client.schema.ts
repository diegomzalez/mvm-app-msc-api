import { SchemaFactory } from '@nestjs/mongoose';
import Client from '../entities/client.entity';

export default SchemaFactory.createForClass(Client);
