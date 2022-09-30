import { SchemaFactory } from '@nestjs/mongoose';

import Person from '../entities/person.entity';

export default SchemaFactory.createForClass(Person);
