import Month from '../../../entity/Month.entity';
import Client from '../../../entity/Client.entity';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class Student extends Client {
  @Prop({ type: String, required: true })
  birthday: string;
  @Prop({ type: String, required: true })
  birthplace: string;
  @Prop({ type: String, required: true })
  municipality: string;
  @Prop({ type: String, required: true })
  state: string;
  @Prop({ type: String, required: true })
  allergies: string | null;
  @Prop({ type: String, required: true })
  liveWith: Array<Array<string> | string>;
  @Prop({ type: Number, required: true })
  exoneration: number;
  @Prop({ type: String, required: true })
  months: Array<Month>;
  @Prop({ type: String, required: true })
  debs: Array<string> | null;
}
