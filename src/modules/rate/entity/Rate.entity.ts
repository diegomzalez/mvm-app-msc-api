import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Currency from '../../currency/entity/Currency.entity';

@Schema()
export default class Rate {
  @Prop({ type: Types.ObjectId, ref: 'Currency' })
  currency: Currency;

  @Prop({ type: Number })
  rate: number;

  @Prop({ type: Date })
  date: Date;
}
