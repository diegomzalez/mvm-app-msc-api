import { Document } from 'mongoose';

import Person from '../entities/Person.entity';

type PersonDocument = Person & Document;
export default PersonDocument;
