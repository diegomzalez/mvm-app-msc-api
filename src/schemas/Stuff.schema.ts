import { SchemaFactory } from '@nestjs/mongoose';

import Stuff from '../entities/Stuff.entity';

export default SchemaFactory.createForClass(Stuff);
