import { SchemaFactory } from '@nestjs/mongoose';
import Person from '../entities/Person.entity';

export default SchemaFactory.createForClass(Person);
