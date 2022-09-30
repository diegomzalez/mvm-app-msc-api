import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Rate from '../../rates/entity/rate.entity';
import { RateMongoArray } from '../../rates/types/rate-mongo-array.type';
import Stuff from '../../../entities/stuff.entity';

@Schema()
export default class Currency extends Stuff {
  @Prop({ type: [{ type: Types.ObjectId, ref: Rate.name }] })
  readonly rates: RateMongoArray;
}
