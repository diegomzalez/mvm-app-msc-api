import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import Rate from '../../rates/entity/rate.entity';
import { RateMongoArray } from '../../rates/types/rate-mongo-array.type';
import Thing from '../../../entities/thing.entity';

@Schema()
export default class Currency extends Thing {
  @Prop({ type: [{ type: Types.ObjectId, ref: Rate.name }] })
  readonly rates: RateMongoArray;
}
