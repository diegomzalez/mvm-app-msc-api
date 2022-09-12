import { SchemaFactory } from '@nestjs/mongoose';
import Person from '../../entity/Person.entity';

export default SchemaFactory.createForClass(Person);
