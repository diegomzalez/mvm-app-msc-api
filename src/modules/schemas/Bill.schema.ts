import { SchemaFactory } from '@nestjs/mongoose';
import Bill from '../entity/Bill.entity';

export default SchemaFactory.createForClass(Bill);
