import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Adult from '../../../entities/adult.entity';
import { StudentMongoArray } from '../../students/types/student-mongo-array.type';

@Schema()
export default class Parent extends Adult {
  @Prop({ type: Boolean })
  isAlive: boolean;

  @Prop({ type: String })
  sex: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Student' }] })
  children: StudentMongoArray;
}
