import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class Stuff {
  @Prop({ type: String, required: true, index: true })
  name: string;
}
