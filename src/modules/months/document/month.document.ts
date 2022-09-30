import { Document } from 'mongoose';

import Month from '../entity/month.entity';

type MonthDocument = Month & Document;
export default MonthDocument;
