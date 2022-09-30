import { Document } from 'mongoose';

import Parent from '../entity/parent.entity';

export type ParentDocument = Parent & Document;
