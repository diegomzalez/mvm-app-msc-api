import { SchemaFactory } from '@nestjs/mongoose';
import Adult from '../entities/adult.entity';

export const AdultSchema = SchemaFactory.createForClass(Adult);
