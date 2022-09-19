import { SchemaFactory } from '@nestjs/mongoose';

import Student from '../entity/Student.entity';

export default SchemaFactory.createForClass(Student);
