import { SchemaFactory } from '@nestjs/mongoose';
import Client from '../entities/Client.entity';

export default SchemaFactory.createForClass(Client);
