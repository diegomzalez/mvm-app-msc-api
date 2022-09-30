import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import CurrencyDocument from 'src/modules/currencies/document/currency.document';

@Schema()
export default class Rate {
  @Prop({ type: Types.ObjectId, ref: 'Currency' })
  currency: CurrencyDocument;

  @Prop({ type: Number })
  rate: number;

  @Prop({ type: Date })
  date: Date;
}
