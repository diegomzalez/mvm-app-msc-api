import { Prop, Schema } from '@nestjs/mongoose';
import Person from '../../../entity/Person.entity';

@Schema()
export default class User extends Person {
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: String, required: true })
  password: string;
}
