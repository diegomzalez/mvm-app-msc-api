import { Prop, Schema } from '@nestjs/mongoose';

import Stuff from './Stuff.entity';

@Schema()
export default class Person extends Stuff {
  @Prop({ type: String, required: true, index: true })
  middleName: string;

  @Prop({ type: String, required: true, index: true })
  surname: string;

  @Prop({ type: String, required: true, index: true })
  lastName: string;
}
