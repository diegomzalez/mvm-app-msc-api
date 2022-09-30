import { SchemaFactory } from '@nestjs/mongoose';

import Student from '../entity/student.entity';

export default SchemaFactory.createForClass(Student);
