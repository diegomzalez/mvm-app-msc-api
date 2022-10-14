import Customer from '../../../entities/customer.entity';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Representative from '../../representatives/entity/representative.entity';
import Month from '../../months/entity/month.entity';
import Parent from '../../parents/entity/parent.entity';
import { ParentMongoArray } from '../../parents/types/parent-mongo-array.type';
import { RepresentativeMongoArray } from '../../representatives/types/representative-mongo-array.type';
import { MonthMongoArray } from '../../months/types/month-mongo-array.type';

@Schema()
export default class Student extends Customer {
  @Prop({ type: Date })
  birthday: Date;

  @Prop({ type: String })
  birthplace: string;

  @Prop({ type: String })
  municipality: string;

  @Prop({ type: String })
  state: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Parent.name }] })
  parents: ParentMongoArray;

  @Prop({ type: [{ type: Types.ObjectId, ref: Representative.name }] })
  representatives: RepresentativeMongoArray;

  @Prop({ type: String })
  liveWith: string;

  @Prop({ type: String })
  allergies: string;

  @Prop({ type: Number, required: true })
  exoneration: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Month.name }] })
  paidMonths: MonthMongoArray;

  @Prop({ type: [{ type: String }] })
  debts: string[];
}
