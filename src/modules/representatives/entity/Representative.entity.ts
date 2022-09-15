import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import Adult from '../../entity/Adult.entity';

@Schema()
export default class Representative extends Adult {
  @Prop({
    type: [String],
  })
  studentRelationship: string[];
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  })
  studentChildren: string[];
}
