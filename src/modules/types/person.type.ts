import { Document } from 'mongoose';
import Person from '../entity/Person.entity';

type PersonDocument = Person & Document;
export default PersonDocument;
