import { Prop, Schema } from '@nestjs/mongoose';

import Thing from './thing.entity';

@Schema()
export default class Person extends Thing {
  @Prop({ type: String, required: true, index: true })
  middleName: string;

  @Prop({ type: String, required: true, index: true })
  surname: string;

  @Prop({ type: String, required: true, index: true })
  lastName: string;
}
