import { Document } from 'mongoose';

import Rate from '../entity/Rate.entity';

type RateDocument = Rate & Document;
export default RateDocument;
