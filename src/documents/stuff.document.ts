import { Document } from 'mongoose';

import Stuff from '../entities/stuff.entity';

type StuffDocument = Stuff & Document;
export default StuffDocument;
