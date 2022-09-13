import { Prop, Schema } from '@nestjs/mongoose';
import Client from './Client.entity';

@Schema()
export default class Adult extends Client {
  @Prop({ type: String })
  direction: string;
  @Prop({ type: String })
  phone: string;
  @Prop({ type: String })
  degreeOfInstruction: string;
  @Prop({ type: String })
  work: string;
}
