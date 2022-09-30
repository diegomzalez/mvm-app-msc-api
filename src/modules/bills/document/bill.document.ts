import { Document } from 'mongodb';

import Bill from '../entity/bill.entity';

type BillDocument = Bill & Document;
export default BillDocument;
