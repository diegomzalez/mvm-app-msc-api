import { SchemaFactory } from '@nestjs/mongoose';
import User from '../entity/User.entity';

export default SchemaFactory.createForClass(User);
