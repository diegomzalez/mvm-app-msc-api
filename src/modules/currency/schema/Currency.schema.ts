import { SchemaFactory } from '@nestjs/mongoose';

import Currency from '../entity/Currency.entity';

export default SchemaFactory.createForClass(Currency);
