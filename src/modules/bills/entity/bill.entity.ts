import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Currency from '../../currencies/entity/currency.entity';
import { mongoId } from '../../../types/mongo-id.type';

@Schema()
export default class Bill {
  @Prop({ type: Types.ObjectId, ref: Currency.name, required: true })
  currency: mongoId;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Number, required: true })
  amount: number;
}
