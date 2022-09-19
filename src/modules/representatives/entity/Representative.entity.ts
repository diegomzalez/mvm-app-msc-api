import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Adult from '../../../entities/Adult.entity';
import { StudentMongoArray } from '../../students/types/StudentMongoArray.type';

@Schema()
export default class Representative extends Adult {
  @Prop({ type: Types.Array<string> })
  studentRelationship: Types.Array<string>;
  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Student' }],
  })
  studentChildren: StudentMongoArray;
}
