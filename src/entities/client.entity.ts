import { Prop, Schema } from '@nestjs/mongoose';

import Relationship from 'src/interfaces/relationship.interface';
import Person from './person.entity';

@Schema()
export default class Client extends Person {
  @Prop({ type: Number, unique: true })
  ci: number;

  @Prop({ type: String })
  degreeOfInstruction: string;

  @Prop({ type: Object })
  relationship: Relationship;
}
