import { SchemaFactory } from '@nestjs/mongoose';
import Adult from '../entity/Adult.entity';

export const AdultSchema = SchemaFactory.createForClass(Adult);
