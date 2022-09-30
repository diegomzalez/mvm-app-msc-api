import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Adult from '../../../entities/adult.entity';
import { StudentMongoArray } from '../../students/types/student-mongo-array.type';

@Schema()
export default class Representative extends Adult {
  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Student' }],
  })
  studentChildren: StudentMongoArray;
}
