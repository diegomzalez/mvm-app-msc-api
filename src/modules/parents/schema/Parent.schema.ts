import { SchemaFactory } from '@nestjs/mongoose';

import Parent from '../entity/Parent.entity';

export const ParentSchema = SchemaFactory.createForClass(Parent);
