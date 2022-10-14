import { Prop, Schema } from '@nestjs/mongoose';

import Customer from './customer.entity';

@Schema()
export default class Adult extends Customer {
  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  job: string;
}
