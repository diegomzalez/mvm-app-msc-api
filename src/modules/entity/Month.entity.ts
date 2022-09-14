import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Bill from './Bill.entity';

@Schema()
export default class Month {
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Bill' })
  bills: Bill[];
  @Prop({ type: Boolean, required: true })
  solvent: boolean;
  @Prop({ type: Number, required: true })
  missing: number;
}
