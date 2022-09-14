import Month from '../../entity/Month.entity';
import Client from '../../entity/Client.entity';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import Parent from 'src/modules/parents/entity/Parent.entity';

@Schema()
export default class Student extends Client {
  @Prop({ type: String })
  birthday: string;
  @Prop({ type: String })
  birthplace: string;
  @Prop({ type: String })
  municipality: string;
  @Prop({ type: String })
  state: string;
  @Prop({ type: String })
  allergies: string;
  @Prop({ type: String })
  liveWith: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }] })
  parents: Parent[];
  @Prop({ type: Number, required: true })
  exoneration: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Month' }] })
  months: Month[];
  @Prop({ type: [String] })
  debs: string[];
}
