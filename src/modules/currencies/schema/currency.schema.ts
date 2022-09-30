import { SchemaFactory } from '@nestjs/mongoose';

import Currency from '../entity/currency.entity';

export default SchemaFactory.createForClass(Currency);
