import { Document } from 'mongodb';
import Bill from '../entity/Bill.entity';

type BillDocument = Bill & Document;
export default BillDocument;
