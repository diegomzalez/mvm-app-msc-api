import { SchemaFactory } from '@nestjs/mongoose';

import Thing from '../entities/thing.entity';

export default SchemaFactory.createForClass(Thing);
