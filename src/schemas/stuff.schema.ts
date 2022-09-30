import { SchemaFactory } from '@nestjs/mongoose';

import Stuff from '../entities/stuff.entity';

export default SchemaFactory.createForClass(Stuff);
