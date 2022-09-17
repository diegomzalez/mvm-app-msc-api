import { Document } from 'mongoose';
import Month from '../entity/Month.entity';

type MonthDocument = Month & Document;
export default MonthDocument;
