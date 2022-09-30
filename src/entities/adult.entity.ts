import { Prop, Schema } from '@nestjs/mongoose';

import Client from './client.entity';

@Schema()
export default class Adult extends Client {
  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  job: string;
}
