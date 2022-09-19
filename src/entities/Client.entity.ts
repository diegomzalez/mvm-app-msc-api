import { Prop, Schema } from '@nestjs/mongoose';

import Person from './Person.entity';

@Schema()
export default class Client extends Person {
  @Prop({ type: Number, unique: true })
  ci: number;
}
