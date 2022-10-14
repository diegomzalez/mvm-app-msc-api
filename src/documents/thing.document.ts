import { Document } from 'mongoose';

import Thing from '../entities/thing.entity';

type ThingDocument = Thing & Document;
export default ThingDocument;
