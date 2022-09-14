import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Student from 'src/modules/students/entity/Student.entity';
import Adult from '../../entity/Adult.entity';

@Schema()
export default class Parent extends Adult {
  @Prop({ type: Boolean })
  isAlive: boolean;
  @Prop({ type: String })
  sex: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
  children: Student[];
}
