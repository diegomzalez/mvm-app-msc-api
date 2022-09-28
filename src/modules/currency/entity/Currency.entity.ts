import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Rate from '../../rate/entity/Rate.entity';
import RateMongoArray from '../../rate/types/RateMongoArray.type';
import Stuff from '../../../entities/Stuff.entity';

@Schema()
export default class Currency extends Stuff {
  @Prop({ type: [{ type: Types.ObjectId, ref: Rate.name }] })
  rates: RateMongoArray;
}
