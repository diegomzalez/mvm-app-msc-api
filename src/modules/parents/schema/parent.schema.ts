import { SchemaFactory } from '@nestjs/mongoose';

import Parent from '../entity/parent.entity';

export const ParentSchema = SchemaFactory.createForClass(Parent);
