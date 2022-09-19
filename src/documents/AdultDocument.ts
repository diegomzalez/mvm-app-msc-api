import { Document } from 'mongoose';
import Adult from '../entities/Adult.entity';

type AdultDocument = Adult & Document;
export default AdultDocument;
