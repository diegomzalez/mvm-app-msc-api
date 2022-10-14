import { SchemaFactory } from '@nestjs/mongoose';
import Customer from '../entities/customer.entity';

export default SchemaFactory.createForClass(Customer);
