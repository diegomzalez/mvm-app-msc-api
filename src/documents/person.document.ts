import { Document } from 'mongoose';

import Person from '../entities/person.entity';

type PersonDocument = Person & Document;
export default PersonDocument;
