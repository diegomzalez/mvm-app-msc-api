import { Types } from 'mongoose';
import BillDocument from '../document/bill.document';

export type BillMongoArray = Types.DocumentArray<BillDocument>;
