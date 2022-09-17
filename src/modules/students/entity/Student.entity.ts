import Client from '../../entity/Client.entity';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import Representative from '../../../modules/representatives/entity/Representative.entity';
import Month from '../../months/entity/Month.entity';
import Parent from '../../../modules/parents/entity/Parent.entity';

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

  @Prop({ type: Number })
  age: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Parent.name }] })
  parents: Types.Array<Parent>;

  @Prop({ type: [{ type: Types.ObjectId, ref: Representative.name }] })
  representatives: Types.Array<Representative>;

  @Prop({ type: String })
  liveWith: string;

  @Prop({ type: String })
  allergies: string;

  @Prop({ type: Number, required: true })
  exoneration: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Month.name }] })
  paidMonths: Types.Array<Month>;

  @Prop({ type: [{ type: String }] })
  debts: string[];
}
