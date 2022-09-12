import { Prop, Schema } from '@nestjs/mongoose';
import Client from './Client.entity';

@Schema()
export default class Adult extends Client {
  @Prop({ type: String, required: true })
  direction: string;
  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: String, required: true })
  degreeOfInstruction: string;
  @Prop({ type: String, required: true })
  work: string;
}
