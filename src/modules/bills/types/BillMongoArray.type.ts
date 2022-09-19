import { Types } from 'mongoose';
import Bill from '../entity/Bill.entity';

export type BillMongoArray = Types.Array<Bill>;
