import { SchemaFactory } from '@nestjs/mongoose';

import Month from '../entity/month.entity';

export default SchemaFactory.createForClass(Month);
