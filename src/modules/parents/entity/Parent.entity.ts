import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import Student from '../../../modules/students/entity/Student.entity';
import Adult from '../../entity/Adult.entity';

@Schema()
export default class Parent extends Adult {
  @Prop({ type: Boolean })
  isAlive: boolean;
  @Prop({ type: String })
  sex: string;
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Student' }] })
  children: Types.Array<Student>;
}
