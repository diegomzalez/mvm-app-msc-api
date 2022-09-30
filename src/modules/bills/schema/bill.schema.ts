import { SchemaFactory } from '@nestjs/mongoose';
import Bill from '../entity/bill.entity';

export default SchemaFactory.createForClass(Bill);
