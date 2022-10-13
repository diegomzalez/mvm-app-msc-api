import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Thing from '../../../entities/thing.entity';
import { BillMongoArray } from '../../bills/types/bill-mongo-array.type';
import Bill from '../../bills/entity/bill.entity';

@Schema()
export default class Month extends Thing {
  @Prop({ type: [{ type: Types.ObjectId, ref: Bill.name }] })
  readonly bills: BillMongoArray;

  @Prop({ type: Boolean, required: true })
  readonly solvent: boolean;

  @Prop({ type: Number, required: true })
  readonly missing: number;
}
