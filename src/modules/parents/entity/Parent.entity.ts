import { Prop, Schema } from '@nestjs/mongoose';
import Adult from '../../../entity/Adult.entity';

@Schema()
export default class Parent extends Adult {
  @Prop({ type: Boolean, required: true })
  isAlive: boolean;
  @Prop({ type: String, required: true })
  sex: string;
}
