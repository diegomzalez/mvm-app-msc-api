import { Document } from 'mongoose';

import Stuff from '../entities/Stuff.entity';

type StuffDocument = Stuff & Document;
export default StuffDocument;
