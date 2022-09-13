import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Student from '../../../modules/students/entity/Student.entity';

import Adult from '../../entity/Adult.entity';
import { representativeChildren } from '../types/representativeChildren.type';

@Schema()
export default class Representative extends Adult {
  @Prop({
    type: [String],
  })
  representativeChildrenRelationship: representativeChildren;
  @Prop({
    type: Array<mongoose.Schema.Types.ObjectId>,
    ref: 'Student',
  })
  representativeChildrenList: [Student];
}
