import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import Student from '../../../modules/students/entity/Student.entity';

import Adult from '../../entity/Adult.entity';

@Schema()
export default class Representative extends Adult {
  @Prop({
    type: [],
  })
  studentRelationship: Types.Array<string>;
  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Student' }],
  })
  studentChildren: Types.Array<Student>;
}
