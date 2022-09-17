import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class Person {
  @Prop({ type: String, required: true, index: true })
  name: string;
  @Prop({ type: String, required: true, index: true })
  middleName: string;
  @Prop({ type: String, required: true, index: true })
  surname: string;
  @Prop({ type: String, required: true, index: true })
  lastName: string;
}
