import { Document } from 'mongoose';

import Rate from '../entity/rate.entity';

type RateDocument = Rate & Document;
export default RateDocument;
