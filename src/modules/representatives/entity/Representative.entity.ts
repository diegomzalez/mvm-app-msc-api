import { Prop, Schema } from '@nestjs/mongoose';

import Adult from '../../../entity/Adult.entity';

@Schema()
export default class Representative extends Adult {
  @Prop({ type: String, required: true })
  representativeChildren: Array<Array<string | number>>;
}
