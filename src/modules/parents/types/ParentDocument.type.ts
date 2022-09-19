import { Document } from 'mongoose';

import Parent from '../entity/Parent.entity';

type ParentDocument = Parent & Document;
export default ParentDocument;
