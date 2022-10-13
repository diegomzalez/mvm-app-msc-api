import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class Thing {
  @Prop({ type: String, required: true, index: true })
  name: string;
}
