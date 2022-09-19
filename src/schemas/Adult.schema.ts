import { SchemaFactory } from '@nestjs/mongoose';
import Adult from '../entities/Adult.entity';

export const AdultSchema = SchemaFactory.createForClass(Adult);
