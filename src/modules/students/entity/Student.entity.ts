import Client from '../../../entities/Client.entity';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Representative from '../../../modules/representatives/entity/Representative.entity';
import Month from '../../months/entity/Month.entity';
import Parent from '../../../modules/parents/entity/Parent.entity';
import { ParentMongoArray } from '../../parents/types/ParentMongoArray.type';
import { RepresentativeMongoArray } from '../../representatives/types/RepresentativeMongoArray.type';
import { MonthMongoArray } from '../../months/types/MonthMongoArray.type';

@Schema()
export default class Student extends Client {
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
