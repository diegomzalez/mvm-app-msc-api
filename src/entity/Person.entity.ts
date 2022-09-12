import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export default class Person {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  middleName: string;
  @Prop({ type: String, required: true })
  surname: string;
  @Prop({ type: String, required: true })
  lastName: string;
}
