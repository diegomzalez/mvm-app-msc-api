import { SchemaFactory } from '@nestjs/mongoose';
import User from '../entity/user.entity';

export default SchemaFactory.createForClass(User);
