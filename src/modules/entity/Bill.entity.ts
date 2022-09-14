import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class Bill {
  @Prop({ type: Number, required: true })
  rate: number;
  @Prop({ type: Date, required: true })
  date: Date;
  @Prop({ type: Number, required: true })
  amount: number;
}
