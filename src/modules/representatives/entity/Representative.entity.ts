import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Student from '../../../modules/students/entity/Student.entity';

import Adult from '../../entity/Adult.entity';

@Schema()
export default class Representative extends Adult {
  @Prop({
    type: [String],
  })
  representativeChildrenRelationship: string[];
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  })
  representativeChildrenList: Student[];
}
